import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Releases from "@/components/sections/Releases";
import PhotoAlbum from "@/components/sections/PhotoAlbum";
import Contact from "@/components/sections/Contact";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Releases />
      <Services />
      <PhotoAlbum />
      <Contact />
    </>
  );
}