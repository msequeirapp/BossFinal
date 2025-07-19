import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "@/hooks/use-language";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Sample gallery data (would typically come from an API or CMS)
const galleryImages = [
  {
    id: 1,
    src: "/assets/gallery/studio-session-1.jpg",
    alt: "Studio Session",
    category: "studio",
  },
  {
    id: 2,
    src: "/assets/gallery/concert-1.jpg",
    alt: "Live Concert Performance",
    category: "live",
  },
  {
    id: 3,
    src: "/assets/gallery/artist-portrait-1.jpg",
    alt: "Artist Portrait",
    category: "portraits",
  },
  {
    id: 4,
    src: "/assets/gallery/backstage-1.jpg",
    alt: "Backstage Moments",
    category: "backstage",
  },
  {
    id: 5,
    src: "/assets/gallery/studio-session-2.jpg",
    alt: "Recording Session",
    category: "studio",
  },
  {
    id: 6,
    src: "/assets/gallery/concert-2.jpg",
    alt: "Festival Performance",
    category: "live",
  },
  {
    id: 7,
    src: "/assets/gallery/artist-portrait-2.jpg",
    alt: "Artist Photoshoot",
    category: "portraits",
  },
  {
    id: 8,
    src: "/assets/gallery/award-ceremony.jpg",
    alt: "Award Ceremony",
    category: "events",
  }
];

export default function Photos() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { translations } = useLang();
  const t = translations.photos;
  
  // For a real implementation, these would be used for filtering
  const categories = [
    "All",
    "Studio Sessions",
    "Live Performances",
    "Portraits",
    "Events"
  ];
  
  return (
    <section id="photos" className="py-20 lg:py-32 bg-melody-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-melody-dark via-melody-black to-melody-dark"></div>
        
        {/* Blurred circles */}
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-melody-purple/5 blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-melody-fuchsia/5 blur-[120px]"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-melody-fuchsia font-medium mb-2">{t.subtitle}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.title}</h2>
            <p className="text-lg text-white/70">
              {t.description}
            </p>
          </motion.div>
        </div>
        
        {/* Category filters - simplified version, would be functional in a real implementation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
                ${index === 0 
                  ? 'bg-gradient-to-r from-melody-purple to-melody-fuchsia text-white' 
                  : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-melody-fuchsia/30 transition-all duration-300"
            >
              <AspectRatio ratio={1 / 1}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-white font-medium">{image.alt}</h3>
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <Button variant="outline" className="border-white/20 hover:border-white hover:bg-white/10">
            {t.viewAll}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}