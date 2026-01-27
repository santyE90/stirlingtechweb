import Hero from "@/components/sections/Hero";
import ProductDemo from "@/components/sections/ProductDemo";
import Feature from "@/components/sections/Feature";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductDemo />
      <Feature />
      <Testimonials />
      <FAQ />
    </main>
  );
}
