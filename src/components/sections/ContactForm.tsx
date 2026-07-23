"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2 } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { toast } from "sonner";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      // Replace with actual Formspree ID
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please ensure the Formspree ID is set, or email me directly.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-32 bg-background relative min-h-[80vh] flex items-center justify-center border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-neutral-50 border border-black/5 mb-8">
                <Mail className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
                Let's build<br />something extraordinary.
              </h2>
              <p className="text-neutral-500 text-lg mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
                Whether you have a revolutionary idea, require advanced AI integration, or need a premium web application, I am ready to turn your vision into reality.
              </p>
              
              <div className="space-y-3 text-sm font-semibold text-black uppercase tracking-wider">
                <p className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-black/20" /> Based in India.
                </p>
                <p className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-black/20" /> Working globally.
                </p>
                <p className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-black/20" /> pawarjay2443@gmail.com
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    disabled={status === "loading"}
                    className={`w-full px-4 py-3.5 rounded-xl bg-neutral-50/50 border ${errors.name ? 'border-red-300 focus:ring-red-200' : 'border-black/10 focus:border-black focus:ring-black/5'} focus:outline-none focus:ring-4 transition-all text-sm font-medium`}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    disabled={status === "loading"}
                    className={`w-full px-4 py-3.5 rounded-xl bg-neutral-50/50 border ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-black/10 focus:border-black focus:ring-black/5'} focus:outline-none focus:ring-4 transition-all text-sm font-medium`}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    disabled={status === "loading"}
                    className={`w-full px-4 py-3.5 rounded-xl bg-neutral-50/50 border ${errors.message ? 'border-red-300 focus:ring-red-200' : 'border-black/10 focus:border-black focus:ring-black/5'} focus:outline-none focus:ring-4 transition-all resize-none text-sm font-medium`}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    disabled={status === "loading"}
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </MagneticButton>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
