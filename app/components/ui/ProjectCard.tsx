import { motion } from "framer-motion";
import { ArrowUpRight, Star, LucideIcon } from "lucide-react";

interface ProjectCardProps {
    title: string;
    tech: string;
    problem: string;
    solution: string;
    highlight: string;
    icon: LucideIcon;
    iconColor?: string;
    link: string;
    index: number;
    variants: any;
}

export default function ProjectCard({
    title,
    tech,
    problem,
    solution,
    highlight,
    icon: Icon,
    iconColor,
    link,
    index,
    variants,
}: ProjectCardProps) {
    return (
        <motion.div
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl overflow-hidden hover:bg-white/10 transition-colors"
            variants={variants}
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
                    <Icon className={`size-6 ${iconColor}`} />
                </div>
                <div className="space-y-4 flex-1">
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3 className="text-xl font-semibold text-white">{title}</h3>
                            <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
                                {tech}
                            </span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-1">
                            <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">
                                The Challenge
                            </span>
                            <p className="text-slate-300 leading-relaxed">{problem}</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">
                                The Solution
                            </span>
                            <p className="text-slate-300 leading-relaxed">{solution}</p>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                        <div className="flex items-start gap-2">
                            <Star className="size-4 text-yellow-500/80 mt-0.5 shrink-0" />
                            <p className="text-sm text-yellow-100/80 italic">"{highlight}"</p>
                        </div>
                    </div>
                </div>
            </div>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${title}`}
            />
        </motion.div>
    );
}
