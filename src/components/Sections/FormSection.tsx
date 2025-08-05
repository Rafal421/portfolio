"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Loader2,
  Send,
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  name: z.string().min(1, "Please provide your name"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Please provide a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long (max 1000 characters)"),
});

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormData | "recaptcha", string>>
  >({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedMessage, setCopiedMessage] = useState<"email" | "phone" | null>(
    null
  );
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const validateField = (name: keyof FormData, value: string) => {
    try {
      const fieldSchema = formSchema.pick({ [name]: true });
      fieldSchema.parse({ [name]: value });
      const newErrors = { ...formErrors };
      delete newErrors[name];
      setFormErrors(newErrors);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setFormErrors((prev) => ({ ...prev, [name]: error.issues[0].message }));
      }
      return false;
    }
  };

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setFormErrors(newErrors);
      }
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    validateField(id as keyof FormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    if (!validateForm()) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
      return;
    }

    // Check for recaptcha token
    if (!recaptchaToken) {
      setFormErrors((prev) => ({
        ...prev,
        recaptcha: "Please verify you are human.",
      }));
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
      return;
    }

    setFormStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFormErrors({});
      setRecaptchaToken(null); // Reset recaptcha token

      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const handleCopy = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessage(type);
      setTimeout(() => setCopiedMessage(null), 2000); // Clear message after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="rounded-xl border border-[#2a2a2a] overflow-hidden shadow-xl p-8 md:p-10">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach
          out.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
        {/* Left Column: Contact Information & Follow Me */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="h-full rounded-xl p-6 border border-[#333333] shadow-inner bg-transparent">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              I&apos;m currently available for freelance work and full-time
              positions. If you have a project that needs some creative work,
              I&apos;m your person.
            </p>
            <div className="space-y-4">
              <div
                className="group relative rounded-xl border border-[#333333] p-4 flex items-center space-x-4  hover:bg-[#242323] transition-all duration-300 cursor-pointer"
                onClick={() => handleCopy("rhaczek421@gmail.com", "email")}
                title="Click to copy email"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#333333] group-hover:bg-blue-500/30 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-medium">Email</p>
                  <p className="text-sm text-white font-semibold">
                    rhaczek421@gmail.com
                  </p>
                </div>
                {copiedMessage === "email" && (
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute top-2 right-2 text-xs text-green-400 bg-green-900/50 px-2 py-1 rounded-full"
                  >
                    Copied!
                  </motion.span>
                )}
              </div>
              <div
                className="group relative rounded-xl border border-[#333333] p-4 flex items-center space-x-4  hover:bg-[#242323] transition-all duration-300 cursor-pointer"
                onClick={() => handleCopy("+48 504 447 802", "phone")}
                title="Click to copy phone number"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#333333] group-hover:bg-green-500/30 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-medium">Phone</p>
                  <p className="text-sm text-white font-semibold">
                    +48 504 447 802
                  </p>
                </div>
                {copiedMessage === "phone" && (
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute top-2 right-2 text-xs text-green-400 bg-green-900/50 px-2 py-1 rounded-full"
                  >
                    Copied!
                  </motion.span>
                )}
              </div>
              <a
                href="https://www.linkedin.com/in/rafa%C5%82-haczek-4053b72a4/  " // Replace with your LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[#333333] p-4 flex items-center space-x-4  hover:bg-[#242323] transition-all duration-300"
                title="Visit LinkedIn profile"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#333333] group-hover:bg-blue-500/30 transition-colors duration-200">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-medium">LinkedIn</p>
                  <p className="text-sm text-white font-semibold">
                    Rafal Haczek
                  </p>
                </div>
              </a>
              <a
                href="https://github.com/Rafal421" // Replace with your GitHub profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[#333333] p-4 flex items-center space-x-4  hover:bg-[#242323] transition-all duration-300"
                title="Visit GitHub profile"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#333333] group-hover:bg-gray-500/30 transition-colors duration-200">
                  <Github className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-medium">GitHub</p>
                  <p className="text-sm text-white font-semibold">Rafal421</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
        {/* Right Column: Send Me a Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="h-full rounded-xl p-6 md:p-8 shadow-xl border border-[#333333] bg-transparent">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-white">
                Send Me a Message
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="border-[#333333] text-white  rounded-xl h-12 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500 shadow-inner"
                    required
                  />
                  {formErrors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.name}
                    </motion.p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="border-[#333333] text-white  rounded-xl h-12 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500 shadow-inner"
                    required
                  />
                  {formErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.email}
                    </motion.p>
                  )}
                </div>
              </div>
              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="border-[#333333] text-white  rounded-xl h-12 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500 shadow-inner"
                  required
                />
                {formErrors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.subject}
                  </motion.p>
                )}
              </div>
              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="border-[#333333] text-white  rounded-xl resize-none placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500 shadow-inner"
                  required
                />
                {formErrors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.message}
                  </motion.p>
                )}
              </div>
              {/* ReCAPTCHA */}
              <div className="flex justify-center pt-2">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={(token) => setRecaptchaToken(token)}
                  theme="dark"
                />
              </div>
              {formErrors.recaptcha && (
                <p className="text-red-400 text-xs flex items-center gap-1 justify-center">
                  <AlertCircle className="w-3 h-3" />
                  {formErrors.recaptcha}
                </p>
              )}
              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01] hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={formStatus === "loading" || !recaptchaToken}
                >
                  {formStatus === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
              {/* Status Messages */}
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 border border-green-800/50 rounded-xl p-4 mt-4"
                >
                  <p className="text-green-300 text-sm text-center font-medium flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Thank you! Your message has been sent. I will respond as
                    soon as possible.
                  </p>
                </motion.div>
              )}
              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-900/30 border border-red-800/50 rounded-xl p-4 mt-4"
                >
                  <p className="text-red-300 text-sm text-center font-medium flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    An error occurred. Please check that all fields are filled
                    out correctly and try again.
                  </p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
