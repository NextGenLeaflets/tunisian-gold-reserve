import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Received!",
      description: "Thank you for your interest. We'll be in touch within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Get in Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground mb-6 leading-tight">
            Partner With{" "}
            <span className="italic text-primary">TuniLink</span>
          </h2>

          <p className="text-xl text-muted-foreground">
            Whether you're a wholesaler, retailer, or chef looking to elevate your offering, 
            we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-medium text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We work with wholesalers, retailers, restaurants, and hotels across the UK. 
                Our team is ready to discuss volume pricing, sampling, and partnership opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <a href="mailto:info@tunilink.co.uk" className="text-muted-foreground hover:text-primary transition-colors">
                    info@tunilink.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Phone</p>
                  <a href="tel:+442071234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +44 (0) 20 7123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Location</p>
                  <p className="text-muted-foreground">
                    London, United Kingdom<br />
                    Serving UK Wholesalers & Retailers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-2xl p-6 border border-primary/10">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Trade Inquiries:</span> We offer competitive 
                volume pricing and flexible delivery schedules for B2B partners.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-luxury border border-border/50">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Smith"
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    placeholder="Your Company Ltd"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your business and how we can help..."
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-olive-dark text-primary-foreground font-semibold py-6 text-lg shadow-soft transition-all hover:scale-[1.02]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
