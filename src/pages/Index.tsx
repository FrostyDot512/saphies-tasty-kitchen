import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChefHat, Truck, UtensilsCrossed } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: ChefHat, title: "Event Catering", desc: "Family gatherings, university events, religious celebrations — we bring the feast to you." },
  { icon: Truck, title: "Food Delivery", desc: "Fresh, homemade meals delivered hot to your doorstep. Just like mama made." },
  { icon: UtensilsCrossed, title: "Snack Packs", desc: "Chapati, mandazi, samosas and more — perfect for sharing with loved ones." },
];


const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />
        <div className="relative z-10 container mx-auto px-4 text-center py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Homemade Food,{" "}
              <span className="text-primary">Made with Love</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              From our family kitchen to your table — flavours that bring people together.
              Catering, delivery & snack packs for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-card"
              >
                Our Services
              </Link>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-bold px-8 py-4 rounded-lg text-lg transition-all"
              >
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="What We Offer" subtitle="Good food for good people — that's our promise." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border border-border group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Taste the Difference?
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Whether it's a family gathering, a big event, or just a craving — we've got you covered.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
