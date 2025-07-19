import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/hooks/use-language";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

function ServiceCard({ icon, title, description, delay, isInView }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <Card className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-melody-fuchsia/30 transition-all duration-300 overflow-hidden">
        <CardContent className="p-6">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-melody-purple/0 via-melody-fuchsia/0 to-melody-purple/0 group-hover:from-melody-purple/10 group-hover:via-melody-fuchsia/10 group-hover:to-melody-purple/10 transition-all duration-500"></div>
          
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-melody-fuchsia/20 transition-colors text-melody-fuchsia">
            {icon}
          </div>
          
          {/* Content */}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white/70">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { translations } = useLang();
  const t = translations.services;
  
  const servicesList = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      ),
      title: t.production,
      description: t.productionDesc
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      ),
      title: t.distribution,
      description: t.distributionDesc
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="6" r="4"></circle>
          <path d="M17 14.5a9 9 0 0 0-10 0"></path>
          <path d="M17 18.5a13 13 0 0 0-10 0"></path>
        </svg>
      ),
      title: t.development,
      description: t.developmentDesc
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <path d="M14 2v6h6"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
          <path d="M10 9H8"></path>
        </svg>
      ),
      title: t.publishing,
      description: t.publishingDesc
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      ),
      title: t.licensing,
      description: t.licensingDesc
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-melody-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-melody-black via-melody-dark to-melody-black"></div>
        
        {/* Background glow */}
        <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-melody-purple/5 blur-[150px]"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-melody-fuchsia/5 blur-[150px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-[20%] w-20 h-20 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-[30%] w-40 h-40 border border-white/5 rounded-full"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-melody-fuchsia font-medium mb-2">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.2 + index * 0.1}
              isInView={isInView}
            />
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-melody-purple/20 to-melody-fuchsia/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Ready to elevate your music career?</h3>
              <p className="text-white/70">Contact our team today to discuss how we can help you achieve your goals.</p>
            </div>
            
            <Button className="bg-gradient-to-r from-melody-purple to-melody-fuchsia hover:opacity-90 transition-all text-white px-8">
              {t.getInTouch}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}