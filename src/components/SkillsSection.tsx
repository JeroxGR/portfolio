import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const skillCategories = [
  {
    name: 'Data Science & AI',
    skills: [
      { name: 'TensorFlow', level: 95 },
      { name: 'PyTorch', level: 95 },
      { name: 'Keras', level: 92 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Hugging Face', level: 90 },
      { name: 'XGBoost', level: 88 },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 82 },
      { name: 'SQL', level: 90 },
      { name: 'Scala', level: 75 },
      { name: 'Java', level: 80 },
    ],
  },
  {
    name: 'Web Scraping & Automation',
    skills: [
      { name: 'Selenium', level: 95 },
      { name: 'BeautifulSoup', level: 94 },
      { name: 'Scrapy', level: 92 },
      { name: 'Requests', level: 93 },
      { name: 'FastAPI', level: 90 },
      { name: 'Flask', level: 88 },
    ],
  },
  {
    name: 'Databases & Cloud',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 88 },
      { name: 'MySQL', level: 90 },
      { name: 'AWS', level: 85 },
      { name: 'GCP', level: 84 },
      { name: 'Azure', level: 82 },
    ],
  },
  {
    name: 'Deep Learning Specialties',
    skills: [
      { name: 'GANs & VAEs', level: 92 },
      { name: 'Transformers & LLMs', level: 90 },
      { name: 'Computer Vision', level: 92 },
      { name: 'YOLO & CNN', level: 94 },
      { name: 'RAG & Prompt Engineering', level: 90 },
      { name: 'NLP & Transformers', level: 91 },
    ],
  },
  {
    name: 'Tools & Visualization',
    skills: [
      { name: 'Power BI', level: 87 },
      { name: 'Pandas & NumPy', level: 96 },
      { name: 'Matplotlib & Seaborn', level: 90 },
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 88 },
      { name: 'CI/CD', level: 85 },
    ],
  },
];

const certifications = [
  { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', year: '2023' },
  { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI', year: '2023' },
  { name: 'CCNA Introduction to Networks', issuer: 'Cisco', year: '2022' },
  { name: 'Delf B2', issuer: 'Institut français', year: '2021' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Skills & Certifications</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-display font-semibold mb-6 gradient-text">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            <Award className="w-6 h-6 inline-block mr-2 text-primary" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-4 text-center hover-lift group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium text-sm mb-1 line-clamp-2">{cert.name}</h4>
                <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                <p className="text-primary text-xs mt-1">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
