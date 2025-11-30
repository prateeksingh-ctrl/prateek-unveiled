import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brand Campaign",
    category: "Marketing & Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Portrait Series",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Tech Startup Identity",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
  },
];

const WorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-secondary/30" ref={ref}>
      {/* Section Header */}
      <motion.div
        className="mb-16 md:mb-24"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
          Selected Works/
        </h2>
        <p className="text-muted-foreground text-sm tracking-wider uppercase">
          (Projects)
        </p>
      </motion.div>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-16 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Thoughtfully crafted digital experiences that blend utility and aesthetics 
        into something functional, memorable, and refined.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card group"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              
              {/* Hover Arrow */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowUpRight className="w-5 h-5 text-foreground" />
              </motion.div>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-display text-2xl md:text-3xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.category}</p>
              </div>
              <span className="text-muted-foreground text-sm">0{project.id}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
