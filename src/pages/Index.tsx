import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Releases from "@/components/sections/Releases";
import { useLang } from "@/hooks/use-language";

export default function Index() {
  const { lang } = useLang();
  
  return (
    <main className="bg-melody-black text-white">
      <Hero />
      <About />
      <Releases />
      {/* Other sections will be added here */}
    </main>
  );
}