import { motion } from "framer-motion";
import { ChefHat, Truck, UtensilsCrossed, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: ChefHat,
    title: "Event Catering",
    desc: "From intimate family gatherings to large university events and religious celebrations. We handle the food so you can focus on making memories.",
    items: ["Wedding receptions", "Birthday parties", "University events", "Religious gatherings", "Corporate functions"],
  },
  {
    icon: Truck,
    title: "Food Delivery",
    desc: "Hot, homemade meals delivered right to your door. Perfect for busy days when you still want that home-cooked taste.",
    items: ["Daily meal plans", "Family platters", "Lunch deliveries", "Weekend specials"],
  },
  {
    icon: UtensilsCrossed,
    title: "Snack Packs",
    desc: "Our famous snack packs are perfect for sharing. Great for parties, office treats, or just because you deserve something delicious.",
    items: ["Chapati packs", "Mandazi packs", "Samosa packs", "Mixed snack boxes", "Custom combos"],
  },
];

const Services = () => (
  <div className="pt-20">
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="font-body text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Whatever the occasion, we've got the perfect food solution for you and your loved ones.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 space-y-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="flex-1 bg-card rounded-2xl p-10 shadow-card border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <s.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{s.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-foreground">
                    <ArrowRight size={14} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-primary/5 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
              <s.icon className="text-primary/20" size={120} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Let's Plan Your Event Together
        </h2>
        <p className="font-body text-primary-foreground/80 mb-8">
          Reach out and let us create something delicious for your next occasion.
        </p>
        <a
          href="https://wa.me/254700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
        >
          Chat with Us on WhatsApp
        </a>
      </div>
    </section>
  </div>
);

export default Services;
