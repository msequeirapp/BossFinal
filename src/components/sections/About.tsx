import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-melody-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/texture.png')] opacity-5"></div>
        <div className="absolute top-40 left-[10%] w-[300px] h-[300px] rounded-full bg-melody-purple/10 blur-[120px]"></div>
        <div className="absolute bottom-40 right-[10%] w-[350px] h-[350px] rounded-full bg-melody-fuchsia/10 blur-[120px]"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-melody-fuchsia font-medium mb-2">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About <span className="gradient-text">Boss of Melody</span></h2>
            <p className="text-lg text-white/70">
              Founded with a passion for exceptional music and artist development, we're changing the landscape of the music industry.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-melody-purple to-melody-fuchsia rounded-2xl p-[2px]">
                <div className="absolute inset-0 bg-melody-black/80 rounded-2xl">
<img
  src="/assets/bossofmelody/banner-main.jpg"
  alt="Moises March - Founder"
  className="w-full h-full object-cover rounded-2xl"
/>

                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-melody-fuchsia/10 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-melody-purple/10 blur-xl"></div>

            <div className="absolute -bottom-8 -right-8 md:right-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-melody-fuchsia text-3xl md:text-4xl font-bold">50+</p>
                  <p className="text-white/70 text-sm">Artists</p>
                </div>
                <div>
                  <p className="text-melody-purple text-3xl md:text-4xl font-bold">120+</p>
                  <p className="text-white/70 text-sm">Releases</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold">Our Vision & Mission</h3>
            <p className="text-white/80">
              Founded in 2020 by music industry veteran Moises March, Boss of Melody was born from a vision to create a label that truly puts artists first while delivering exceptional music to the world.
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
                <h4 className="text-xl font-bold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-melody-fuchsia/20 flex items-center justify-center text-melody-fuchsia mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4"></path>
                      <path d="m6.36 6.36 2.83 2.83"></path>
                      <path d="M2 12h4"></path>
                      <path d="m6.36 17.64 2.83-2.83"></path>
                      <path d="M12 18v4"></path>
                      <path d="m17.64 17.64-2.83-2.83"></path>
                      <path d="M18 12h4"></path>
                      <path d="m17.64 6.36-2.83 2.83"></path>
                    </svg>
                  </span>
                  Our Vision
                </h4>
                <p className="text-white/70 ml-11">
                  To revolutionize the music industry with an artist-first approach that empowers creators while delivering exceptional music to global audiences.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
                <h4 className="text-xl font-bold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-melody-purple/20 flex items-center justify-center text-melody-purple mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    </svg>
                  </span>
                  Our Mission
                </h4>
                <p className="text-white/70 ml-11">
                  To discover and develop exceptional musical talent, providing artists with the resources, guidance, and platform they need to share their unique voice with the world.
                </p>
              </div>
            </div>

            <p className="text-white/80">
              With a team of industry experts, cutting-edge production facilities, and innovative marketing strategies, we've quickly established ourselves as a leader in the independent music scene, with over 50 signed artists and 120+ successful releases.
            </p>

            <div className="pt-4">
              <Button className="bg-gradient-to-r from-melody-purple to-melody-fuchsia hover:opacity-90 transition-all text-white font-medium">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Founder Banner image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="/assets/bossofmelody/banner-main.jpg"
            alt="Founder Banner"
            className="mt-20 rounded-xl shadow-lg mx-auto max-w-4xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
