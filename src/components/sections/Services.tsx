import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

// Services data
const services = [
  {
    id: 1,
    title: "Music Production",
    description: "Professional studio production with industry-leading producers and engineers. We'll help you craft your unique sound.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M10 8v8l6-4-6-4z"></path>
      </svg>
    )
  },
  {
    id: 2,
    title: "Artist Development",
    description: "Comprehensive artist development program that focuses on your artistic identity, performance, and career growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: "Distribution & Marketing",
    description: "Global distribution to all major platforms with targeted marketing campaigns to maximize your reach and impact.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
        <path d="M16 16h5v5"></path>
      </svg>
    )
  },
  {
    id: 4,
    title: "Sync Licensing",
    description: "Opportunities for your music to be placed in films, TV shows, commercials, and video games.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m14.5 2-6 6c-2 2-2 4.5 0 6.5s4.5 2 6.5 0l6-6c2-2 2-4.5 0-6.5s-4.5-2-6.5 0Z"></path>
        <path d="m14.5 2-6 6c-2 2-2 4.5 0 6.5s4.5 2 6.5 0l6-6c2-2 2-4.5 0-6.5s-4.5-2-6.5 0Z"></path>
        <path d="m21 16-1 1"></path>
        <path d="m12 5-8 8"></path>
        <path d="m4 13-1 1"></path>
        <path d="m5 14-1 1"></path>
      </svg>
    )
  },
  {
    id: 5,
    title: "Branding & Design",
    description: "Creative visual identity development including album artwork, press photos, and comprehensive brand strategy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5"></path>
        <path d="M16 2v10"></path>
        <path d="M8 2v10"></path>
        <path d="M12 2v19"></path>
        <path d="M2 12h20"></path>
      </svg>
    )
  },
  {
    id: 6,
    title: "Publishing & Rights Management",
    description: "Protection and management of your intellectual property with expert rights administration and royalty collection.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    )
  }
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-melody-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient accents */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-melody-purple/10 blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-melody-fuchsia/10 blur-[120px]"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('/assets/dots.png')] bg-repeat opacity-5"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-melody-fuchsia font-medium mb-2">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our <span className="gradient-text">Services</span></h2>
            <p className="text-lg text-white/70">
              We provide comprehensive music industry services to help artists succeed at every stage of their career.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-melody-fuchsia/20 text-melody-fuchsia flex items-center justify-center mb-5 group-hover:bg-melody-fuchsia/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/70 mb-5">{service.description}</p>
              <a href="#" className="inline-flex items-center text-melody-fuchsia hover:text-melody-purple transition-colors font-medium">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-white/70">
              Ready to take your music career to the next level?
              <Button className="ml-4 bg-gradient-to-r from-melody-purple to-melody-fuchsia hover:opacity-90 transition-all text-white">
                Contact Us Now
              </Button>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}