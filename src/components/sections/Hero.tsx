import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-melody-black pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient circles */}
        <div className="absolute top-40 right-[10%] w-[400px] h-[400px] rounded-full bg-melody-purple/20 blur-[100px]"></div>
        <div className="absolute top-60 left-[5%] w-[300px] h-[300px] rounded-full bg-melody-fuchsia/20 blur-[100px]"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-melody-purple/10 blur-[100px]"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/assets/grid.png')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left side content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 mb-2"
              >
                <span className="text-sm font-medium">Premium Music Label</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              >
                Elevate Your <br/>
                <span className="gradient-text">Sound</span> to <br/>
                Greatness
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-white/70 max-w-lg mx-auto lg:mx-0"
              >
                Where exceptional talent meets industry expertise. Boss of Melody is dedicated to discovering, developing, and delivering the future of music.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg" 
                  className="bg-gradient-to-r from-melody-purple to-melody-fuchsia hover:opacity-90 transition-all text-white font-medium px-8"
                >
                  Submit Your Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  Our Services
                </Button>
              </motion.div>

              {/* Streaming platforms */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="pt-8 flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                <span className="text-sm text-white/50">Available On:</span>
                <div className="flex flex-wrap gap-6">
                  {/* Spotify */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white/50 hover:text-white transition-colors">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 11.999c6-2 10 0 10 0"></path>
                    <path d="M8 8.999c9-2.5 14 0 14 0"></path>
                    <path d="M8 15c6-1 8 0 8 0"></path>
                  </svg>

                  {/* Apple Music */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white/50 hover:text-white transition-colors">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"></path>
                    <path d="M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path>
                    <path d="M12 12v-8"></path>
                  </svg>

                  {/* Soundcloud */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white/50 hover:text-white transition-colors">
                    <path d="M17 11a2 2 0 0 0-2 2v.5a6 6 0 0 1 0-3"></path>
                    <path d="M15 12a6 6 0 0 1 0 0v3.5c0 .27-.1.51-.29.71-.19.2-.43.29-.71.29-.28 0-.52-.09-.71-.29-.19-.2-.29-.44-.29-.71V12Z"></path>
                    <path d="M12 17h-1.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H12"></path>
                    <path d="M9 12v5"></path>
                    <path d="M6 13v2.5a.5.5 0 0 1-.5.5h0a.5.5 0 0 1-.5-.5V13"></path>
                    <path d="M3 13v2.5a.5.5 0 0 1-.5.5h0a.5.5 0 0 1-.5-.5V13"></path>
                    <path d="M21 13v.5"></path>
                    <path d="M21 15v.5a.5.5 0 0 1-.5.5h0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h0a.5.5 0 0 1 .5.5"></path>
                    <path d="M21 11v.5"></path>
                  </svg>

                  {/* YouTube */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white/50 hover:text-white transition-colors">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Vinyl Record Animation */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
              {/* Vinyl disc */}
              <div className="absolute inset-0 rounded-full bg-black border-4 border-melody-fuchsia/50 shadow-2xl shadow-melody-fuchsia/20 spin-slow">
                <div className="absolute inset-[20%] rounded-full bg-melody-black/80 border border-white/10 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full bg-white"></div>
                  <div className="absolute inset-[45%] rounded-full border border-white/30"></div>
                </div>
              </div>

              {/* Album cover that moves on hover */}
              <div className="absolute -left-10 -top-10 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-lg bg-white shadow-xl hover-spin transform rotate-[-10deg]">
                <div className="absolute inset-0 bg-gradient-to-br from-melody-purple to-melody-fuchsia rounded-lg p-[2px]">
                  <div className="absolute inset-0 bg-melody-black rounded-[7px] flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold font-['Montserrat'] text-center">
                      <span className="text-white">BOSS</span>
                      <span className="block text-melody-fuchsia">OF</span>
                      <span className="text-white">MELODY</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-white/50 mb-2">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-center justify-center">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-white"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}