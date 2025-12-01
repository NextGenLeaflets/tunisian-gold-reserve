import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chef Marcus Thompson",
    role: "Executive Chef, The Mayfair Collection",
    content:
      "The depth of flavor in TuniLink's EVOO is extraordinary. It has that robust, peppery finish you only get from truly exceptional cold-pressed oil. It's now our house olive oil across all properties.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Procurement Director, Whole Foods Market UK",
    content:
      "We've sampled countless olive oils, but TuniLink's organic Tunisian EVOO stands out. The single-origin certification and traceability give our customers confidence in what they're buying.",
    rating: 5,
  },
  {
    name: "Giovanni Rossi",
    role: "Owner, Bella Vita Restaurant Group",
    content:
      "As an Italian chef, I'm particular about olive oil. TuniLink opened my eyes to Tunisian quality—it's every bit as good as the oils I grew up with in Tuscany, if not better. Remarkable.",
    rating: 5,
  },
  {
    name: "Emma Richardson",
    role: "Head Buyer, Artisan Foods Ltd",
    content:
      "The consistency and quality of TuniLink's supply have been impeccable. Their transparency about sourcing and organic certification makes them a trusted partner for our premium retail clients.",
    rating: 5,
  },
  {
    name: "Daniel Wright",
    role: "Michelin-Starred Chef, The Grove",
    content:
      "I use it in everything from finishing dishes to sautéing. The low acidity and high polyphenol content mean it performs beautifully under heat while maintaining its character. A chef's dream.",
    rating: 5,
  },
  {
    name: "Amira Hassan",
    role: "Director, Harrods Food Hall",
    content:
      "Our discerning clientele appreciate authenticity and provenance. TuniLink delivers both with their exceptional single-origin Tunisian EVOO. It's become one of our bestsellers.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Controls for continuous motion + hover pause
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-background"
      ref={ref}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 rounded-full">
            <span className="text-secondary font-medium text-sm tracking-wide uppercase">
              Trusted by the Best
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground mb-6 leading-tight">
            What Our Partners <span className="italic text-primary">Say</span>
          </h2>

          <p className="text-xl text-muted-foreground">
            From Michelin-starred kitchens to premium retailers, TuniLink's EVOO
            has earned recognition from industry leaders.
          </p>
        </motion.div>

        {/* Continuous Slider */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() =>
              controls.start({
                x: "-50%",
                transition: {
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                },
              })
            }
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[350px] lg:min-w-[380px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 h-full flex flex-col border border-border/50">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-gold/30" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="font-display text-lg font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Fades */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
