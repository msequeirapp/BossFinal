import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample releases data
const releases = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Luna Skye",
    coverImage: "/assets/album1.jpg", // Placeholder image path
    releaseDate: "July 2023",
    featured: true,
    streamingLinks: {
      spotify: "#",
      apple: "#",
      youtube: "#"
    }
  },
  {
    id: 2,
    title: "Electric Soul",
    artist: "Neon Pulse",
    coverImage: "/assets/album2.jpg", // Placeholder image path
    releaseDate: "September 2023",
    featured: true,
    streamingLinks: {
      spotify: "#",
      apple: "#",
      youtube: "#"
    }
  },
  {
    id: 3,
    title: "Urban Echoes",
    artist: "Metro Beats Collective",
    coverImage: "/assets/album3.jpg", // Placeholder image path
    releaseDate: "October 2023",
    featured: true,
    streamingLinks: {
      spotify: "#",
      apple: "#",
      youtube: "#"
    }
  },
  {
    id: 4,
    title: "Astral Journey",
    artist: "Cosmic Wave",
    coverImage: "/assets/album4.jpg", // Placeholder image path
    releaseDate: "December 2023",
    featured: true,
    streamingLinks: {
      spotify: "#",
      apple: "#",
      youtube: "#"
    }
  },
  {
    id: 5,
    title: "Neon Nights",
    artist: "Synthwave Dreams",
    coverImage: "/assets/album5.jpg", // Placeholder image path
    releaseDate: "February 2024",
    featured: true,
    streamingLinks: {
      spotify: "#",
      apple: "#",
      youtube: "#"
    }
  }
];

export default function Releases() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [activeRelease, setActiveRelease] = useState(releases[0]);

  return (
    <section id="releases" className="py-20 lg:py-32 bg-gradient-to-b from-melody-black to-melody-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Waveform background pattern */}
        <div className="absolute inset-0 bg-[url('/assets/waveform.png')] bg-repeat opacity-5"></div>
        
        {/* Gradient accents */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-melody-purple/10 blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-melody-fuchsia/10 blur-[150px]"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-melody-fuchsia font-medium mb-2">Discover Our Music</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Latest <span className="gradient-text">Releases</span></h2>
            <p className="text-lg text-white/70">
              Explore our catalog of chart-topping hits and discover your next favorite track from our talented roster of artists.
            </p>
          </motion.div>
        </div>

        {/* Featured release showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
            {/* Left side - Album Cover */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="relative w-full h-full">
                  {/* Album cover with animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-melody-purple to-melody-fuchsia rounded-xl p-[2px] shadow-lg shadow-melody-fuchsia/10">
                    <div className="absolute inset-0 bg-melody-black rounded-[10px] flex items-center justify-center">
                      {/* Placeholder for album cover */}
                      <div className="w-full h-full rounded-[8px] flex items-center justify-center bg-melody-dark/60 overflow-hidden">
                        <span className="text-xl font-bold text-white/80">
                          {activeRelease.artist} - {activeRelease.title}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vinyl disc peek-a-boo effect */}
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-16 h-[80%] overflow-hidden">
                    <div className="absolute left-0 w-24 h-24 rounded-full bg-black border border-white/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-melody-dark border border-white/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Featured badge */}
                  <div className="absolute -top-3 -left-3 bg-gradient-to-r from-melody-purple to-melody-fuchsia text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg">
                    Featured
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Release Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{activeRelease.title}</h3>
                <p className="text-xl text-white/90 font-medium">{activeRelease.artist}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  Released: {activeRelease.releaseDate}
                </div>
                <div className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  Album
                </div>
              </div>
              
              <p className="text-white/70">
                "{activeRelease.title}" showcases {activeRelease.artist}'s unique sound, blending electronic elements with soulful melodies. This groundbreaking release has been making waves across the industry.
              </p>
              
              <div className="pt-2">
                <p className="text-white/80 font-medium mb-3">Available on:</p>
                <div className="flex gap-3">
                  {/* Streaming links */}
                  <a href={activeRelease.streamingLinks.spotify} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 11.999c6-2 10 0 10 0"></path>
                      <path d="M8 8.999c9-2.5 14 0 14 0"></path>
                      <path d="M8 15c6-1 8 0 8 0"></path>
                    </svg>
                  </a>
                  <a href={activeRelease.streamingLinks.apple} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"></path>
                      <path d="M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path>
                      <path d="M12 12v-8"></path>
                    </svg>
                  </a>
                  <a href={activeRelease.streamingLinks.youtube} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="bg-melody-fuchsia hover:bg-melody-fuchsia/90 text-white">
                  Listen Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* More releases carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">More Releases</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {releases.map((release) => (
                <CarouselItem key={release.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div 
                    className="cursor-pointer hover:scale-[1.03] transition-all duration-300"
                    onClick={() => setActiveRelease(release)}
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
                      <div className="aspect-square relative">
                        {/* Placeholder for album cover */}
                        <div className="absolute inset-0 bg-melody-dark/60 flex items-center justify-center">
                          <span className="text-sm font-medium text-white/90 text-center p-4">
                            {release.title}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold truncate">{release.title}</h4>
                        <p className="text-white/70 text-sm">{release.artist}</p>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs text-white/50">{release.releaseDate}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polygon points="10 8 16 12 10 16 10 8"></polygon>
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-auto bg-white/5 hover:bg-white/10 border-white/10" />
              <CarouselNext className="relative inset-auto bg-white/5 hover:bg-white/10 border-white/10" />
            </div>
          </Carousel>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
              View All Releases
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}