"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Award, Star, GraduationCap, Users, Lightbulb, MessageSquare, Briefcase, CreditCard, TrendingUp, Terminal, ArrowUpRight, MapPin, Globe, Brain, CircuitBoard, Cpu, Zap } from "lucide-react";

const springIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  {
    title: "Full Stack Development",
    subtitle: "React, Next.js, Node.js",
    icon: <Globe className="size-6 text-emerald-300" />,
    className: "md:col-span-2 bg-emerald-500/5 border-emerald-500/20",
  },
  {
    title: "Machine Learning",
    subtitle: "Python, TensorFlow, PyTorch",
    icon: <Brain className="size-6 text-violet-300" />,
    className: "bg-violet-500/5 border-violet-500/20",
  },
  {
    title: "System Architecture",
    subtitle: "C#, .NET, Microservices",
    icon: <CircuitBoard className="size-6 text-cyan-300" />,
    className: "bg-cyan-500/5 border-cyan-500/20",
  },
  {
    title: "Low-Level Programming",
    subtitle: "C, C++, OS Concepts",
    icon: <Terminal className="size-6 text-orange-300" />,
    className: "md:col-span-2 bg-orange-500/5 border-orange-500/20",
  },
];

const projects = [
  {
    title: "Echoes: Digital Heritage Trail",
    tech: "React Native • Node.js • Graph Algorithms",
    problem: "Cultural heritage sites lack engaging, accessible digital narratives.",
    solution: "Built a 'Fog of War' engine that unlocks media only within a 50m physical radius.",
    highlight: "A location-based platform where historical narratives are 'echoed' to the user via geofencing.",
    icon: <MapPin className="size-6 text-rose-300" />,
    link: "https://github.com/ionutT77/Echoes-Digital-Heritage-Trail" 
  },
  {
    title: "AI Stock Predictor",
    tech: "Python • TensorFlow • NewsAPI",
    problem: "Retail traders lack tools combining technical analysis with news sentiment.",
    solution: "Created a hybrid ML pipeline feeding historical data and sentiment scores into a neural network. Includes smart caching to optimize API usage.",
    highlight: "Smart caching system reducing API calls by 90% for free-tier optimization.",
    icon: <TrendingUp className="size-6 text-emerald-300" />,
    link: "https://github.com/patric1304/Stock-price-prediction-model"
  },
  {
    title: "Modern Banking System",
    tech: "C# .NET 8 • WPF • MVVM",
    problem: "Simulating complex banking operations with a responsive desktop UI.",
    solution: "Built a WPF app using MVVM architecture for clean code separation. Implemented JSON persistence and async operations for non-blocking transactions.",
    highlight: "Custom currency conversion engine with real-time fee calculation.",
    icon: <CreditCard className="size-6 text-purple-300" />,
    link: "https://github.com/patric1304/Banking-App"
  },
  {
    title: "System Resource Manager",
    tech: "C • Linux API • IPC",
    problem: "Managing race conditions in concurrent process execution.",
    solution: "Developed 'Treasure Manager', a multi-process simulation using mutexes and shared memory to handle resource contention safely.",
    highlight: "Achieved deadlock-free execution using strict resource hierarchy.",
    icon: <Terminal className="size-6 text-orange-300" />,
    link: "https://github.com/patric1304/ProiectOS"
  }
];

const experience = [
  {
    role: "Full Stack Intern",
    company: "HiByte",
    location: "Timișoara, Romania",
    period: "Internship",
    details: [
      "Contributed to full-stack web application development using Spring Boot (Backend) and Angular (Frontend).",
      "Managed databases with PostgreSQL and utilized Docker for containerization.",
      "Collaborated in an Agile environment, enhancing team communication and workflow.",
      "Implemented dynamic UI functionality using JavaScript and modern frontend practices."
    ]
  }
];

const education = [
  {
    degree: "Computer Science Student",
    school: "Politehnica University of Timișoara",
    year: "2023 - Present",
    details: "Currently 3rd year. Focus on automation, problem-solving, and innovative technologies.",
  },
];


const softSkills = [
  {
    title: "Problem Solving",
    description: "Breaking down complex systems into manageable logic.",
    icon: <Lightbulb className="size-6 text-yellow-300" />,
  },
  {
    title: "Teamwork",
    description: "Actively participated in development team during 48h Hackathon, UniHack.",
    icon: <Users className="size-6 text-blue-300" />,
  },
  {
    title: "Rapid Learning",
    description: "Efficiently mastering new technologies and adapting to evolving project requirements.",
    icon: <Zap className="size-6 text-amber-300" />,
  },
];



export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-32 pb-16">
      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-16">
        {/* Header */}
        <motion.div
          initial={springIn.hidden}
          animate={springIn.visible}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">
            About Me
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            I am a 3rd-year Computer Science student passionate about building
            robust systems and intuitive interfaces. My journey involves deep
            dives into machine learning framworks    and full-stack
            web development, as well as creating efficient and scalable
            back-end solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/patric1304"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10"
            >
              <Github className="size-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/patric-pop-70b75033a/" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0077b5]/20 px-6 py-3 font-medium text-white hover:bg-[#0077b5]/30 transition-colors backdrop-blur-md border border-[#0077b5]/30"
            >
              <Linkedin className="size-5" />
              LinkedIn
            </a>
            <a
              href="/POP_PATRIC_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-6 py-3 font-medium text-white hover:bg-emerald-500/30 transition-colors backdrop-blur-md border border-emerald-500/30"
            >
              <FileText className="size-5" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Technical Arsenal */}
        <section className="space-y-8">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Cpu className="size-6 text-cyan-300" />
              Technical Arsenal
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={springIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-3xl border backdrop-blur-sm hover:bg-opacity-10 transition-colors ${skill.className}`}
              >
                <div className="h-full flex flex-col justify-between space-y-4">
                  <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/5">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{skill.title}</h3>
                    <p className="text-sm text-slate-400 font-mono">{skill.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="space-y-8">
          <motion.h2
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-white flex items-center gap-2"
          >
            <Briefcase className="size-6 text-blue-300" />
            Work Experience
          </motion.h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={job.role}
                className="relative pl-8 border-l-2 border-white/10"
                variants={springIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500/50 border border-blue-500" />
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <span className="hidden sm:block text-slate-500">•</span>
                    <span className="text-emerald-300 font-medium">{job.company}</span>
                  </div>
                  <p className="text-sm font-mono text-slate-400">{job.location} | {job.period}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 pt-2">
                    {job.details.map((detail, i) => (
                      <li key={i} className="text-sm leading-relaxed pl-2 marker:text-blue-500">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="space-y-8">
          <motion.h2
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-white flex items-center gap-2"
          >
            <GraduationCap className="size-6 text-emerald-300" />
            Education
          </motion.h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="relative pl-8 border-l-2 border-white/10"
                variants={springIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500/50 border border-emerald-500" />
                <div className="space-y-1">
                  <span className="text-sm font-mono text-emerald-300">{edu.year}</span>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-slate-300">{edu.school}</p>
                  <p className="text-slate-400 text-sm">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Case Studies */}
        <section id="projects" className="space-y-8">
          <motion.h2
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-white flex items-center gap-2"
          >
            <Award className="size-6 text-purple-300" />
            Project Case Studies
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-1">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl overflow-hidden hover:bg-white/10 transition-colors"
                variants={springIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="size-6 text-white/50" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 h-fit w-fit rounded-xl bg-white/5 border border-white/5 shrink-0">
                    {project.icon}
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
                          {project.tech}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div className="space-y-1">
                        <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">The Challenge</span>
                        <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">The Solution</span>
                        <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <div className="flex items-start gap-2">
                        <Star className="size-4 text-yellow-500/80 mt-0.5 shrink-0" />
                        <p className="text-sm text-yellow-100/80 italic">"{project.highlight}"</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="space-y-8">
          <motion.h2
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-white"
          >
            My Approach
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl space-y-4"
                variants={springIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/5">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                  <p className="text-slate-400 text-sm mt-2">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
