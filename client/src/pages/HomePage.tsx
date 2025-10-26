import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PopularDestinations from "@/components/PopularDestinations";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <PopularDestinations />
        <Fleet />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
