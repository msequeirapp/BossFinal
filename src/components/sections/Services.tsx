import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "@/hooks/use-language";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { translations } = useLang();
  const t = translations.services;
  
  // Services data
  const services = [
    {
      title: t.production,
      description: t.productionDesc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8a6 6 0 0 0-9-5 6 6 0 0 0-3 10 6 6 0 0 0 9 5 6 6 0 0 0 3-10z"></path>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    },
    {
      title: t.distribution,
      description: t.distributionDesc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.21 15.89-2.12-2.12a1 1 0 0 0-1.42 0l-1.41 1.41c-.2.2-.45.3-.71.3H8.08c-.26 0-.51-.1-.71-.29l-1.4-1.42a1 1 0 0 0-1.42 0l-2.12 2.12a1 1 0 0 0 0 1.42l2.12 2.12a1 1 0 0 0 1.42 0l1.4-1.42c.2-.2.45-.29.71-.29h7.47c.26 0 .51.1.71.29l1.41 1.41a1 1 0 0 0 1.42 0l2.12-2.12a1 1 0 0 0 0-1.42z"></path>
          <circle cx="12" cy="8" r="2"></circle>
          <path d="M12 10v4"></path>
        </svg>
      )
    },
    {
      title: t.development,
      description: t.developmentDesc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"></path>
          <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"></path>
          <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"></path>
        </svg>
      )
    },
    {
      title: t.publishing,
      description: t.publishingDesc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 0 0-2 2v4"></path>
          <path d="M11 21h8a2 2 0 0 0 2-2v-8"></path>
          <path d="m5 9-3 3 3 3"></path>
          <path d="m21 11-3-3-3 3"></path>
          <path d="M9 11v.01"></path>
          <path d="M9 18v.01"></path>
          <path d="M15 12v.01"></path>
          <path d="M15 17v.01"></path>
        </svg>
      )
    },
    {
      title: t.licensing,
      description: t.licensingDesc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2Z"></path>
          <rect width="18" height="12" x="3" y="8" rx="2"></rect>
          <path d="M5 8v6"></path>
          <path d="M19 8v6"></path>
          <path d="m2 8 2-4h16l2 4"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-melody-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-melody-dark via-melody-dark to-melody-black"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-melody-purple/5 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-melody-fuchsia/5 blur-[100px]"></div>
        
        {/* Pattern */}
        <div className="absolute inset-0 bg-[url('/assets/noise.png')] bg-repeat opacity-5"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h2>
            <p className="text-lg text-white/70 mb-0">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-melody-fuchsia/10 flex items-center justify-center mb-6 text-melody-fuchsia">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <div className="pt-4 border-t border-white/10">
                <a href="#contact" className="flex items-center text-melody-fuchsia font-medium">
                  <span className="mr-2">Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button className="bg-gradient-to-r from-melody-purple to-melody-fuchsia hover:opacity-90 transition-all">
            <a href="#contact">{t.getInTouch}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}