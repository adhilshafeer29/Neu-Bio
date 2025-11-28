import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// TypeScript interface for a single testimonial object
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
}

// TypeScript interface for the component's props
interface TestimonialSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

/**
 * A responsive section component to display customer testimonials.
 * It features a title, subtitle, and a grid of animated testimonial cards.
 */
export const TestimonialSection = ({
  title,
  subtitle,
  testimonials,
}: TestimonialSectionProps) => {
  // Animation variants for the container to orchestrate staggered children animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each testimonial card
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-16 sm:py-24 relative overflow-hidden">
       {/* Background elements to enhance glass effect */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="liquid-glass relative overflow-hidden flex flex-col p-2"
              variants={itemVariants}
            >
              <div className="relative h-[450px] w-full overflow-hidden rounded-2xl">
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                
                 {/* Content within the card - Positioned relatively to sit on top of everything */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white z-20">
                    <Quote
                    className="mb-3 h-8 w-8 text-blue-300"
                    aria-hidden="true"
                    />
                    <blockquote className="text-base font-medium leading-relaxed text-white/90 italic">
                    "{testimonial.quote}"
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3">
                        <div className="h-px w-8 bg-blue-400/50"></div>
                        <div>
                            <p className="font-semibold text-white">
                                {testimonial.name}
                            </p>
                            <p className="text-sm text-white/60">
                                {testimonial.role}
                            </p>
                        </div>
                    </figcaption>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
