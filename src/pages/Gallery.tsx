import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const Gallery = () => {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="font-body text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              A feast for the eyes — see what we've been cooking up!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Photo Gallery" subtitle="Snapshots from our kitchen and events." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square bg-muted rounded-2xl overflow-hidden group cursor-pointer relative"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
                  <span className="font-body text-muted-foreground text-sm">Photo {i + 1}</span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground font-body mt-8 text-sm">
            Add your real photos to the gallery to showcase your delicious creations!
          </p>
        </div>
      </section>

      {/* Video Gallery Placeholder */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Video Gallery" subtitle="Watch us in action!" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: n * 0.1 }}
                className="aspect-video bg-card rounded-2xl overflow-hidden shadow-card border border-border flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="font-body text-muted-foreground text-sm">Video {n}</p>
                  <p className="font-body text-muted-foreground/60 text-xs mt-1">Add vid{n}.mp4 to play</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
