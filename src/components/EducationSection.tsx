import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master\'s Degree - MLSD',
    institution: 'Université Paris Cité',
    year: '2025 - 2026',
    focus: 'Machine Learning for Data Science',
    achievements: ['Currently Enrolled', 'Advanced Data Science & ML', 'Paris, France'],
  },
  {
    degree: 'Erasmus Semester',
    institution: 'ESIEE PARIS',
    year: '2024 - 2025',
    focus: 'Data Science and AI',
    achievements: ['International Exchange', 'Specialized in Data Science & AI', 'Paris, France'],
  },
  {
    degree: 'Engineer\'s Degree',
    institution: 'Arts et Métiers - ENSAM',
    year: '2022 - 2025',
    focus: 'Artificial Intelligence & Data Science',
    achievements: ['Specialization in AI', 'Deep Learning & Neural Networks', 'Rabat, Morocco'],
  },
  {
    degree: 'DUT\'s Degree',
    institution: 'École Supérieure de Technologie de Safi',
    year: '2020 - 2022',
    focus: 'Computer Science',
    achievements: ['Foundation in Computer Science', 'Programming & Algorithms', 'Safi, Morocco'],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Education</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-6 animate-pulse-glow z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <GraduationCap className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.institution}</span>
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold mb-2">{item.degree}</h3>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{item.year}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{item.focus}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
