import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLang } from "@/hooks/use-language";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { translations } = useLang();
  const t = translations.contact;
  
  // Social links
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://tiktok.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
  ];
  
  return (
    <section id="contact" className="py-20 lg:py-32 bg-melody-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-melody-black via-melody-dark to-melody-black"></div>
        
        {/* Blurred circles */}
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-melody-purple/5 blur-[150px]"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 rounded-full bg-melody-fuchsia/5 blur-[150px]"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-melody-fuchsia font-medium mb-2">{t.getInTouch}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.contactUs}</h2>
            <p className="text-lg text-white/70">
              {t.description}
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <form className="space-y-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.name}</Label>
                  <Input
                    id="name"
                    placeholder={t.namePlaceholder}
                    className="bg-white/5 border-white/10 focus:border-melody-fuchsia/50 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    className="bg-white/5 border-white/10 focus:border-melody-fuchsia/50 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">{t.subject}</Label>
                <Input
                  id="subject"
                  placeholder={t.subjectPlaceholder}
                  className="bg-white/5 border-white/10 focus:border-melody-fuchsia/50 text-white placeholder:text-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{t.message}</Label>
                <Textarea
                  id="message"
                  placeholder={t.messagePlaceholder}
                  rows={6}
                  className="bg-white/5 border-white/10 focus:border-melody-fuchsia/50 text-white placeholder:text-white/50 resize-none"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-melody-purple to-melody-fuchsia hover:opacity-90 transition-all">
                {t.sendMessage}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-5"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 text-melody-fuchsia">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.address}</h3>
                    <p className="text-white/70">123 Music Avenue</p>
                    <p className="text-white/70">Los Angeles, CA 90028</p>
                  </div>
                </div>
              </div>
              
              {/* Phone */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 text-melody-fuchsia">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.phone}</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 text-melody-fuchsia">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.emailLabel}</h3>
                    <p className="text-white/70">contact@bossofmelody.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">{t.followUs}</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 hover:text-melody-fuchsia transition-colors border border-white/10"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}