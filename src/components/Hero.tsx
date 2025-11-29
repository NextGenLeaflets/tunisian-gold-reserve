import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-olive-groves.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tunisian olive groves at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-dark/90 via-olive-dark/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30">
              <span className="text-gold font-medium text-sm tracking-wide">
                100% Organic • Single Origin • Cold Pressed
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-cream mb-8 leading-tight"
          >
            The Hidden Treasure of{" "}
            <span className="italic font-medium text-gold">Tunisia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-cream/90 mb-12 leading-relaxed"
          >
            Discover premium Extra Virgin Olive Oil from ancient Tunisian groves. 
            Hand-picked, cold-pressed perfection that rivals the Mediterranean's finest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-foreground font-semibold px-8 py-6 text-lg shadow-luxury transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-olive-dark font-semibold px-8 py-6 text-lg backdrop-blur-sm transition-all hover:scale-105"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-cream/70">
          <span className="text-sm tracking-widest uppercase">Discover</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-cream/70 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};
