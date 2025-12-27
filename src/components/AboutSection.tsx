import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Zap, Database } from 'lucide-react';

const expertise = [
  {
    icon: Brain,
    title: 'Deep Learning & Generative AI',
    description: 'Building advanced neural networks, GANs, VAEs, and generative models for image restoration, classification, and creative applications.',
  },
  {
    icon: Zap,
    title: 'Agentic AI & Automation',
    description: 'Designing intelligent agents and automated systems using LLMs, RAG, and prompt engineering for autonomous task execution.',
  },
  {
    icon: Code,
    title: 'Web Scraping & Data Engineering',
    description: 'Building robust web scrapers and large-scale data extraction pipelines using Selenium, BeautifulSoup, Scrapy, and automation frameworks.',
  },
  {
    icon: Database,
    title: 'Data Science & Analytics',
    description: 'Developing ML models, recommendation systems, and predictive analytics with comprehensive data analysis and visualization.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            AI Engineer & Data Scientist
            <span className="gradient-text"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            With expertise in Deep Learning, Generative AI, and Agentic AI, I build intelligent systems that automate complex processes 
            and solve real-world problems. Specialized in web scraping, data engineering, and building scalable AI applications.
            Based in Paris, France. Top Rated Seller on Fiverr with 200+ successful projects.
          </p>
        </motion.div>

        {/* Expertise grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '200+', label: 'Projects Completed' },
            { value: '97%', label: 'Model Accuracy' },
            { value: '5.0★', label: 'Client Rating' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
