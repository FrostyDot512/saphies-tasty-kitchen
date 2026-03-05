import { motion } from "framer-motion";
import { Heart, Users, Utensils, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Heart, title: "Made with Love", desc: "Every meal is prepared with the same care and passion as cooking for our own family." },
  { icon: Users, title: "Community First", desc: "We believe food brings people together. That's why we serve with heart." },
  { icon: Utensils, title: "Authentic Recipes", desc: "Traditional recipes passed down through generations, with a modern twist." },
  { icon: Clock, title: "Always Fresh", desc: "We prepare everything fresh for each order — no shortcuts, no compromises." },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Meet <span className="text-primary">Saphie</span>
          </h1>
          <p className="font-body text-lg text-secondary-foreground/70 leading-relaxed">
            Saphie's Tasty started from a simple dream — to share the flavours of home with
            everyone. What began as cooking for family and friends quickly grew into a beloved
            catering service known for generous portions, authentic taste, and that warm "auntie's
            kitchen" feeling that makes every meal special.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Story" subtitle="From a family kitchen to your favourite caterer." />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto font-body text-muted-foreground leading-relaxed space-y-6 text-lg"
        >
          <p>
            It all started with Saphie cooking for her family — experimenting with recipes,
            perfecting the chapati, and making sure everyone left the table with a full belly
            and a smile. Word spread quickly: friends started asking for party platters,
            neighbours wanted delivery, and before long, Saphie's Tasty was born.
          </p>
          <p>
            Today, we cater for university events, religious gatherings, family celebrations,
            and everything in between. But no matter how big we grow, the heart of what we do
            stays the same — real food, made with real love, for real people.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Values" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
