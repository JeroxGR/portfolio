import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'AI Agent for Stock News Analysis',
    description: 'Autonomous AI agent that monitors financial news streams and transforms unstructured data into decision-ready insights.',
    longDescription: 'An intelligent system capable of independent reasoning for real-time stock market analysis. Built with event detection, contextual enrichment, and multi-step analysis. Features asynchronous execution, fallback mechanisms, and strict output schemas for production reliability.',
    image: '/AI Agent for Stock Analysis.png',
    tags: ['AI Agent', 'LLM', 'Real-time Analysis'],
    category: 'AI Agent',
    github: '#',
    demo: '#',
  },
  {
    title: 'Automated Parking Availability Monitoring',
    description: 'AI-based system that detects parking occupancy and makes real-time availability accessible to users.',
    longDescription: 'Computer vision system that processes visual inputs to determine free or occupied spaces. Includes intelligent misuse detection to identify abnormal behavior such as vehicles occupying multiple spaces. Features robust vision pipelines and spatial consistency checks.',
    image: '/Parking Monitoring.png',
    tags: ['Computer Vision', 'Real-time Detection', 'AI'],
    category: 'Computer Vision',
    github: '#',
    demo: '#',
  },
  {
    title: 'Generative AI for Image Restoration',
    description: 'Restoration and inpainting of damaged images using GAN networks, achieving 87% reconstruction accuracy.',
    longDescription: 'Leveraged Generative Adversarial Networks (GANs) to restore and inpaint damaged historical photos. The model was trained on a custom dataset of damaged/clean pairs, achieving an 87% structural similarity index (SSIM) in reconstruction accuracy.',
    image: '/restoration-demo.jpg',
    tags: ['Generative AI', 'GANs', 'Computer Vision'],
    category: 'Generative AI',
    github: '#',
    demo: '#',
  },
  {
    title: 'Real Estate Scraper',
    description: 'Advanced web scraper for extracting real estate data from multiple property listing websites.',
    longDescription: 'Built an intelligent scraper capable of gathering property information, calculating metrics, and augmenting insights. Refined through multiple iterations to precisely match client requirements. Client expressed high satisfaction with the final solution.',
    image: '/Real Estate Scraper.webp',
    tags: ['Web Scraping', 'Data Engineering', 'Real Estate'],
    category: 'Automation',
    github: '#',
    demo: '#',
  },
  {
    title: 'Football Analysis Scraper',
    description: 'Specialized web scraper for extracting comprehensive football and sports data from multiple sources.',
    longDescription: 'Advanced scraper designed to gather player statistics, match details, and performance metrics from diverse football websites. Includes intricate calculations to augment gathered insights. Developed through multiple iterations to align with client specifications.',
    image: '/Football Analysis Scraper.png',
    tags: ['Web Scraping', 'Sports Data', 'Data Engineering'],
    category: 'Automation',
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-Time Detection of American Sign Language (ASL)',
    description: 'Sign language character recognition with 92% accuracy using YOLO object detection models.',
    longDescription: 'Developed a real-time computer vision system capable of recognizing ASL alphabets and common gestures. Utilized the YOLOv8 architecture optimized for edge deployment, achieving 92% mean Average Precision (mAP) with less than 50ms latency.',
    image: '/asl-detection.png',
    tags: ['Computer Vision', 'YOLO', 'Real-time'],
    category: 'Computer Vision',
    github: '#',
    demo: '#',
  },
];

const categories = ['All', 'AI Agent', 'Computer Vision', 'Generative AI', 'Automation'];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Projects</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI, machine learning, and software engineering.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden hover-lift"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image placeholder */}
              <div className="relative h-48 overflow-hidden bg-muted/5">
                {/* project image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* subtle gradient overlay for consistent look */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold gradient-text opacity-70">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
                  className="absolute inset-0 bg-background/90 flex items-center justify-center gap-4"
                >
                  <a
                    href={project.github}
                    className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
