import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {

  return (
    <div className="pt-20">
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="font-body text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              Have a question, want to place an order, or planning an event? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <SectionHeading title="Contact Info" />
            <div className="space-y-6">
              <a href="tel:+254700000000" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-body font-bold text-foreground">Phone</p>
                  <p className="font-body text-muted-foreground">+254 700 000 000</p>
                </div>
              </a>
              <a href="mailto:hello@saphiestasty.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-body font-bold text-foreground">Email</p>
                  <p className="font-body text-muted-foreground">hello@saphiestasty.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-body font-bold text-foreground">Location</p>
                  <p className="font-body text-muted-foreground">Kampala, Uganda</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Quick Order?</h3>
              <p className="font-body text-muted-foreground mb-4">
                For the fastest response, reach us directly on WhatsApp!
              </p>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-[hsl(0,0%,100%)] font-body font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
