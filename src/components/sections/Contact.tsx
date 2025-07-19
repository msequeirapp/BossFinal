import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLang } from "@/hooks/use-language";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { toast } = useToast();
  const { lang, translations } = useLang();
  const t = translations.contact;
  
  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real implementation, this would send data to your backend or email service
    console.log(values);
    
    // Show success toast
    toast({
      title: t.formSuccess,
      description: t.formSuccessMessage,
    });
    
    // Reset form
    form.reset();
  }
  
  return (
    <section id="contact" className="py-20 lg:py-32 bg-melody-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient backdrop */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-melody-purple/10 blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-melody-fuchsia/10 blur-[150px]"></div>
        
        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        </div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-melody-fuchsia font-medium mb-2">{t.contactUs}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.getInTouch} <span className="gradient-text">{t.withUs}</span></h2>
            <p className="text-lg text-white/70">
              {t.description}
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">{t.sendMessage}</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.name}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t.namePlaceholder} 
                              {...field} 
                              className="bg-white/5 border-white/10 focus-visible:ring-melody-fuchsia"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.email}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t.emailPlaceholder} 
                              {...field} 
                              className="bg-white/5 border-white/10 focus-visible:ring-melody-fuchsia"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.subject}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t.subjectPlaceholder} 
                            {...field} 
                            className="bg-white/5 border-white/10 focus-visible:ring-melody-fuchsia"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.message}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t.messagePlaceholder} 
                            {...field} 
                            className="bg-white/5 border-white/10 focus-visible:ring-melody-fuchsia min-h-[120px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-melody-purple to-melody-fuchsia hover:opacity-90 transition-all text-white"
                  >
                    {t.submitButton}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          {/* Right side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">{t.contactInfo}</h3>
            
            <div className="space-y-8">
              {/* Contact methods */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-4 border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-melody-fuchsia">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t.phone}</h4>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-4 border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-melody-fuchsia">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t.email}</h4>
                    <p className="text-white/70">contact@bossofmelody.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-4 border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-melody-fuchsia">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t.address}</h4>
                    <p className="text-white/70">
                      123 Music Avenue<br />
                      Los Angeles, CA 90028<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Business hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3">{t.businessHours}</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-white/70">{t.weekdays}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/70">{t.saturday}</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/70">{t.sunday}</span>
                    <span>{t.closed}</span>
                  </li>
                </ul>
              </div>
              
              {/* WhatsApp button */}
              <div className="mt-8">
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full p-4 rounded-lg bg-[#25D366] text-white hover:bg-[#22bf5b] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.whatsAppButton}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}