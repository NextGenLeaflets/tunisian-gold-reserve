import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import oliveOilImage from "@/assets/olive-oil-pour.jpg";

export const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={oliveOilImage}
                alt="Premium Tunisian olive oil"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-accent rounded-full opacity-20 blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                The Untold Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground mb-8 leading-tight">
              Tunisia's Best-Kept{" "}
              <span className="italic text-primary">Secret</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                While Spain and Italy dominate the olive oil narrative, few know the truth: 
                much of their "premium" oil originates from Tunisia's ancient groves.
              </p>

              <p>
                For generations, Tunisian farmers have quietly supplied bulk oil to European 
                producers who blend it with their own and sell it as Italian or Spanish EVOO. 
                The quality? Exceptional. The recognition? Long overdue.
              </p>

              <p className="font-medium text-foreground">
                TuniLink changes this story. We bring authentic, single-origin Tunisian EVOO 
                directly to UK wholesalers and retailers—no blending, no middlemen, just pure, 
                certified organic excellence from Tunisia's sun-drenched hills.
              </p>

              <div className="pt-6 border-t border-border">
                <p className="text-base italic text-muted-foreground">
                  "It's time the world knows where true quality begins. 
                  It's time to taste Tunisia."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
