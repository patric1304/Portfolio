"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Cpu, Briefcase, GraduationCap, Award } from "lucide-react";
import { projects, experience, education, softSkills, technicalSkills } from "../../lib/data";
import SkillCard from "../components/ui/SkillCard";
import ExperienceItem from "../components/ui/ExperienceItem";
import ProjectCard from "../components/ui/ProjectCard";
import TechBadge from "../components/ui/TechBadge";

const springIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

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
            dives into machine learning frameworks and full-stack
            web development, as well as creating efficient and scalable
            back-end solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/patric1304"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:shadow-white/30 transition-all duration-300 backdrop-blur-md border border-white/10"
            >
              <Github className="size-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/patric-pop-70b75033a/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0077b5]/20 px-6 py-3 font-medium text-white hover:bg-[#0077b5]/30 hover:scale-105 hover:shadow-lg hover:shadow-[#0077b5]/50 transition-all duration-300 backdrop-blur-md border border-[#0077b5]/30"
            >
              <Linkedin className="size-5" />
              LinkedIn
            </a>
            <a
              href="/PATRIC_POP_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-6 py-3 font-medium text-white hover:bg-emerald-500/30 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 backdrop-blur-md border border-emerald-500/30"
            >
              <FileText className="size-5" />
              Download CV
            </a>
          </div>
        </motion.div>


        {/* Skills */}
        <section className="space-y-8">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Cpu className="size-6 text-cyan-300" />
              Skills
            </h2>
          </motion.div>

          {/* Individual Skills */}
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {technicalSkills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="space-y-3"
                >
                  <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <TechBadge
                        key={skill}
                        skill={skill}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              <ExperienceItem
                key={job.role}
                {...job}
                index={index}
                variants={springIn}
                type="work"
              />
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
              <ExperienceItem
                key={edu.degree}
                role={edu.degree}
                company={edu.school}
                period={edu.year}
                details={edu.details}
                index={index}
                variants={springIn}
                type="education"
              />
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
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                variants={springIn}
              />
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
              <SkillCard
                key={skill.title}
                title={skill.title}
                subtitle={skill.description}
                icon={skill.icon}
                iconColor={skill.iconColor}
                className="bg-white/5 border-white/10"
                index={index}
                variants={springIn}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
