import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'AI Engineer - Automation & Web Scraping Expert',
    company: 'Fiverr (Top Rated Seller)',
    location: 'Remote',
    period: 'Mar 2022 - Present',
    description: 'Self-employed AI Engineer specializing in web scraping, AI automation, and custom Python applications.',
    achievements: [
      'Delivered 200+ successful projects with consistent 5-star reviews',
      'Earned "Top Rated Seller" badge - awarded only to top-performing sellers',
      'Certified Vetted Pro Seller in Data Science & Machine Learning',
      'Built robust web scrapers using Selenium, BeautifulSoup, Requests, and Scrapy for international clients',
      'Deployed AI-powered automation systems leveraging Python, TensorFlow, and FastAPI for high-volume task handling',
      'Developed custom Python applications for process automation, data engineering, analytics dashboards, and backend services',
      'Led 1-on-1 consultation sessions with major clients on technical requirements and AI solutions',
    ],
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Scrapy', 'FastAPI', 'TensorFlow', 'Data Engineering'],
  },
  {
    title: 'Data Scientist',
    company: 'INEX BET',
    location: 'Montreuil, Île-de-France, France',
    period: 'Feb 2025 - Aug 2025',
    description: 'Working on BimiFy project: AI-driven solution transforming 2D architectural plans into 3D models using deep learning and computer vision.',
    achievements: [
      'Contributing to BimiFy - transforming 2D architectural plans to 3D using deep learning and computer vision',
      'Developed Deep Learning classification model achieving 97% accuracy for plan scale classification',
      'Optimized YOLO/CNN models for object detection in parking plans with 14% performance improvement',
      'Implementing AI-powered features for architectural workflow automation and design optimization',
    ],
    technologies: ['Python', 'PyTorch', 'YOLO', 'CNN', 'Computer Vision', 'Deep Learning', 'Flask', 'NLP', 'LLM'],
  },
  {
    title: 'President',
    company: 'DIGITECH CLUB ENSAM RABAT',
    location: 'Rabat, Morocco',
    period: 'Sep 2023 - Aug 2024',
    description: 'Led one of the most active clubs at ENSAM, founded by the 1st promotion of INDIA program.',
    achievements: [
      'Led and managed one of the most active clubs in the school',
      'Organized events and initiatives for students interested in digital transformation and AI',
      'Demonstrated strong leadership and team management capabilities',
      'Developed marketing strategies and public speaking skills',
    ],
    technologies: ['Team Leadership', 'Public Speaking', 'Marketing', 'Team Management'],
  },
  {
    title: 'Data Scientist',
    company: 'Mylibrairie.ma',
    location: 'Casablanca, Morocco',
    period: 'Jul 2023 - Aug 2023',
    description: 'Developed recommendation system and analyzed purchasing behavior for e-commerce platform.',
    achievements: [
      'Implemented recommendation system to optimize shopping experience',
      'Analyzed purchasing behavior of 3,000+ users to identify patterns and seasonality',
      'Built and optimized recommender models with hyperparameter tuning',
      'Created data-driven insights using Python, PostgreSQL, and Power BI visualization',
    ],
    technologies: ['Python', 'PostgreSQL', 'Data Science', 'Recommender Systems', 'Machine Learning', 'Power BI'],
  },
  {
    title: 'ERP & AI Consultant',
    company: 'BC Skills Group',
    location: 'Safi, Morocco',
    period: 'Apr 2022 - Jul 2022',
    description: 'Configured SAP Business Suite ERP and evaluated AI tools integration.',
    achievements: [
      'Configured SAP Business Suite in Sales, Purchases, and Inventory modules',
      'Learned and applied ERP system implementation best practices',
      'Analyzed and evaluated AI tools integrated into the ERP system',
      'Provided technical consultation on enterprise AI implementation',
    ],
    technologies: ['SAP ERP', 'Enterprise Resource Planning', 'AI', 'Python', 'Django', 'FastAPI', 'Flask'],
  },
  {
    title: 'Software Developer',
    company: 'Ciments du Maroc - HeidelbergCement Group',
    location: 'Safi, Morocco',
    period: 'Jul 2021 - Aug 2021',
    description: 'Created desktop application for invoice management with modern technologies.',
    achievements: [
      'Built desktop application to streamline invoice management for Ciments du Maroc',
      'Initial implementation in C/C++ with SDL for graphics',
      'Enhanced and reimplemented using Python and Tkinter for improved functionality',
      'Demonstrated strong object-oriented programming and database design skills',
    ],
    technologies: ['Python', 'C', 'C++', 'Tkinter', 'SQL', 'SQLite', 'OOP', 'Data Structures'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-6 md:p-8 hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{exp.description}</p>

              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-secondary/20 text-secondary rounded-full border border-secondary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
