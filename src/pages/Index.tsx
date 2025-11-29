import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { USPs } from "@/components/USPs";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Story />
      <USPs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
