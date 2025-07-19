import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-melody-black pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-[10%] w-[400px] h-[400px] rounded-full bg-melody-purple/20 blur-[100px]"></div>
        <div className="absolute top-60 left-[5%] w-[300px] h-[300px] rounded-full bg-melody-fuchsia/20 blur-[100px]"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-melody-purple/10 blur-[100px]"></div>
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
              {/* 🎵 Logo arriba del título */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:justify-start"
              >
              </motion.div>

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
                Elevate Your <br />
                <span className="gradient-text">Sound</span> to <br />
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
                {/* (los íconos siguen como los tenías) */}
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
            {/* (tu vinilo animado sigue igual) */}
            {/* ... */}
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
