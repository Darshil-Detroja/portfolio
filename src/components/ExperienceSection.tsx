// src/components/ExperienceSection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
  domain: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: '2025',
    title: 'FRONT-END WEB DEV INTERN',
    organization: 'AICTE VIRTUAL INTERNSHIP',
    description: 'Completed comprehensive virtual internship focused on modern Front-End Web Development, responsive design principles, and standards-compliant web engineering.',
  },
  {
    id: '02',
    year: '2025 HONORS',
    title: 'FIRST RUNNER-UP HACKATHON',
    organization: 'VINSHIK FRONTEND HACKATHON',
    description: 'Awarded First Runner-Up distinction for rapid prototyping, designing, and delivering an intuitive frontend user experience under competitive hackathon timelines.',
  },
  {
    id: '03',
    year: '2023 - 2027',
    title: 'B.TECH IN COMPUTER ENGINEERING',
    organization: 'MARWADI UNIVERSITY - RAJKOT',
    description: 'Pursuing Bachelor of Technology with an 8.03 CGPA. Specializing in Web Development, Machine Learning, Data Structures & Algorithms, and collaborative software engineering.',
  },
  {
    id: '04',
    year: '2021 - 2023',
    title: 'HIGHER SECONDARY (H.S.C - SCIENCE)',
    organization: 'NIRMAL SCIENCE SCHOOL – MORBI',
    description: 'Completed Higher Secondary examination in the Science stream with 66%, establishing core foundations in analytical mathematics and computing logic.',
  },
  {
    id: '05',
    year: '2021',
    title: 'SECONDARY SCHOOL (S.S.C)',
    organization: 'NIRMAL VIDHYALAYA – MORBI',
    description: 'Graduated Secondary School Certificate examination with 82% distinction, exhibiting academic rigor, discipline, and problem-solving passion.',
  },
];

const certifications: Certification[] = [
  {
    title: 'CCNA: Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    domain: 'Artificial Intelligence',
  },
  {
    title: 'Prime (AI/ML)',
    issuer: 'Apna College',
    year: '2026',
    domain: 'AI & Machine Learning',
  },
  {
    title: 'Explore Machine Learning using Python',
    issuer: 'Infosys',
    year: '2025',
    domain: 'Python / ML Modeling',
  },
  {
    title: 'CCNA: Switching, Routing & Wireless',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    domain: 'Networks & Protocols',
  },
  {
    title: 'Python for Data Science',
    issuer: 'Infosys',
    year: '2024',
    domain: 'Data Analytics & SciPy',
  },
  {
    title: 'Database and SQL',
    issuer: 'Infosys',
    year: '2024',
    domain: 'Relational Schemas & Queries',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-16 sm:pb-24 px-5 xs:px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow (Desktop) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-6 sm:mb-7"
        >
          <span
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / EXPERIENCE &amp; EDUCATION
          </span>
          <div className="w-16 sm:w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          <h2
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ACADEMIC JOURNEY.
            </span>
          </h2>
        </motion.div>

        {/* Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[15px] sm:left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />
          
          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[15px] sm:left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-10 sm:space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[15px] sm:left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-5 sm:w-6 h-5 sm:h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-10 sm:ml-14 md:ml-12 pl-2">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                  </div>

                  <h3
                    className="text-2xl xs:text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-1 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {stop.title}
                  </h3>
                  
                  <span 
                    className="block text-[9.5px] sm:text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>
                  
                  <p 
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] max-w-lg group-hover:text-[#D5CBC0] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ================= CERTIFICATIONS GRID ================= */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-[#8C6D4F]/25">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-6 sm:mb-8"
          >
            <div>
              <span
                className="text-[9.5px] sm:text-[10px] font-mono tracking-[0.25em] sm:tracking-[0.28em] uppercase text-[#D4AF37] block mb-1.5 sm:mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CREDENTIALS &amp; SPECIALIZATIONS
              </span>
              <h3
                className="text-2xl xs:text-3xl sm:text-4xl text-white tracking-wide uppercase leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                VERIFIED CERTIFICATIONS
              </h3>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-[#8C6D4F] px-2.5 sm:px-3 py-1 border border-[#8C6D4F]/30 bg-[#120F0C]">
              6 ISSUED
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 sm:p-5 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B] flex flex-col justify-between group hover:border-[#D4AF37]/70 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#D4AF37]">
                      {cert.domain}
                    </span>
                    <span className="text-[9.5px] font-mono text-[#8C6D4F] group-hover:text-[#E8D7C5] transition-colors">
                      {cert.year}
                    </span>
                  </div>
                  <h4
                    className="text-sm sm:text-base font-medium text-white mb-2 leading-snug group-hover:text-[#F7E7C4] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {cert.title}
                  </h4>
                </div>
                <div className="pt-3 border-t border-[#8C6D4F]/15 flex items-center justify-between text-[10px] text-[#A8988B]">
                  <span>{cert.issuer}</span>
                  <span className="text-[#D4AF37]">✓</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;