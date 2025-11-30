import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplet, Leaf, MapPin, Award, Sun, HandHeart } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic Certified",
    description: "Grown without pesticides or synthetic fertilizers. Pure, natural goodness from soil to bottle.",
  },
  {
    icon: MapPin,
    title: "Single Origin",
    description: "Every drop comes from Tunisia's heritage groves. No blending, no mystery—just authentic provenance.",
  },
  {
    icon: Sun,
    title: "Cold Pressed",
    description: "First cold press within hours of harvest preserves maximum nutrients, flavor, and that distinctive peppery finish.",
  },
  {
    icon: HandHeart,
    title: "Hand Picked",
    description: "Carefully selected by skilled harvesters who know exactly when each olive reaches peak ripeness.",
  },
  {
    icon: Droplet,
    title: "Exceptional Quality",
    description: "Low acidity, rich polyphenols, and award-worthy taste that rivals Mediterranean legends.",
  },
  {
    icon: Award,
    title: "Heritage & Tradition",
    description: "3,000 years of olive cultivation expertise flows through every bottle of TuniLink EVOO.",
  },
];

export const USPs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="usps" className="py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-gold/10 rounded-full">
            <span className="text-gold font-medium text-sm tracking-wide uppercase">
              Why TuniLink
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground mb-6 leading-tight">
            Uncompromising{" "}
            <span className="italic text-primary">Excellence</span>
          </h2>

          <p className="text-xl text-muted-foreground">
            Our EVOO represents the pinnacle of Tunisian olive cultivation. 
            Every bottle tells a story of quality, tradition, and authenticity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-background" />
                  </div>

                  <h3 className="text-2xl font-display font-medium text-foreground mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-olive-dark to-primary rounded-2xl p-8 lg:p-12 text-center shadow-luxury"
        >
          <h3 className="text-3xl md:text-4xl font-display font-medium text-cream mb-4">
            The Truth About Tunisian Olive Oil
          </h3>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed">
            Tunisia is the world's 4th largest olive oil producer, yet most of its premium harvest 
            is shipped to Spain and Italy for blending. We're changing that narrative—bringing 
            you pure, traceable Tunisian excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
