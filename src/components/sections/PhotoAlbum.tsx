import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample photos data
const photos = [
  {
    id: 1,
    title: "Studio Session",
    description: "Recording session with Luna Skye",
    imageUrl: "/assets/photo1.jpg", // Placeholder path
  },
  {
    id: 2,
    title: "Live Performance",
    description: "Neon Pulse at Summer Fest 2023",
    imageUrl: "/assets/photo2.jpg", // Placeholder path
  },
  {
    id: 3,
    title: "Album Release Party",
    description: "Celebrating the launch of 'Urban Echoes'",
    imageUrl: "/assets/photo3.jpg", // Placeholder path
  },
  {
    id: 4,
    title: "Artist Collaboration",
    description: "Metro Beats & Cosmic Wave project",
    imageUrl: "/assets/photo4.jpg", // Placeholder path
  },
  {
    id: 5,
    title: "Music Video Shoot",
    description: "Behind the scenes with Synthwave Dreams",
    imageUrl: "/assets/photo5.jpg", // Placeholder path
  },
  {
    id: 6,
    title: "Producer Meeting",
    description: "Sound engineering team working on latest tracks",
    imageUrl: "/assets/photo6.jpg", // Placeholder path
  }
];

export default function PhotoAlbum() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section id="photos" className="py-20 lg:py-32 bg-melody-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient circles */}
        <div className="absolute bottom-40 right-[10%] w-[300px] h-[300px] rounded-full bg-melody-purple/20 blur-[100px]"></div>
        <div className="absolute top-60 left-[5%] w-[250px] h-[250px] rounded-full bg-melody-fuchsia/20 blur-[100px]"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-melody-fuchsia font-medium mb-2">Our Latest Work</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Photo <span className="gradient-text">Album</span></h2>
            <p className="text-lg text-white/70">
              Take a glimpse into the world of Boss of Melody through our photo gallery of events, studio sessions, and artist collaborations.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Featured photos gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {photos.slice(0, 6).map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <div className="absolute inset-0 bg-melody-dark/60 flex items-center justify-center">
                  {/* Placeholder for the actual photo */}
                  <span className="text-lg font-medium text-white/90 text-center p-6">
                    {photo.title}
                  </span>
                </div>
                
                {/* Overlay with info that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold">{photo.title}</h3>
                  <p className="text-white/80">{photo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel for mobile viewing */}
          <div className="block md:hidden mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {photos.map((photo) => (
                  <CarouselItem key={photo.id}>
                    <div className="relative overflow-hidden rounded-xl aspect-square">
                      <div className="absolute inset-0 bg-melody-dark/60 flex items-center justify-center">
                        <span className="text-lg font-medium text-white/90 text-center p-6">
                          {photo.title}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-xl font-bold">{photo.title}</h3>
                        <p className="text-white/80">{photo.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-4">
                <CarouselPrevious className="relative inset-auto bg-white/5 hover:bg-white/10 border-white/10" />
                <CarouselNext className="relative inset-auto bg-white/5 hover:bg-white/10 border-white/10" />
              </div>
            </Carousel>
          </div>
          
          <div className="text-center">
            <Button className="bg-melody-fuchsia hover:bg-melody-fuchsia/90 text-white">
              View Full Gallery
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}