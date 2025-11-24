import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface ExperienceItemProps {
    role: string;
    company: string;
    location?: string;
    period?: string;
    details: string | string[];
    quote?: string;
    index: number;
    variants: any;
    type?: "work" | "education";
}

export default function ExperienceItem({
    role,
    company,
    location,
    period,
    details,
    quote,
    index,
    variants,
    type = "work",
}: ExperienceItemProps) {
    const isWork = type === "work";
    const borderColor = isWork ? "border-blue-500" : "border-emerald-500";
    const dotColor = isWork ? "bg-blue-500/50" : "bg-emerald-500/50";

    return (
        <motion.div
            className="relative pl-8 border-l-2 border-white/10"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
        >
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${dotColor} ${borderColor} border`} />
            <div className="space-y-2">
                {isWork ? (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <h3 className="text-xl font-semibold text-white">{role}</h3>
                        <span className="hidden sm:block text-slate-500">•</span>
                        <span className="text-emerald-300 font-medium">{company}</span>
                    </div>
                ) : (
                    <div className="space-y-1">
                        <span className="text-sm font-mono text-emerald-300">{period}</span>
                        <h3 className="text-xl font-semibold text-white">{role}</h3>
                        <p className="text-slate-300">{company}</p>
                    </div>
                )}

                {isWork && <p className="text-sm font-mono text-slate-400">{location} | {period}</p>}

                {Array.isArray(details) ? (
                    <ul className="list-disc list-inside space-y-1 text-slate-300 pt-2">
                        {details.map((detail, i) => (
                            <li key={i} className="text-sm leading-relaxed pl-2 marker:text-blue-500">
                                {detail}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-slate-400 text-sm">{details}</p>
                )}

                {quote && (
                    <div className="mt-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                        <div className="flex gap-3">
                            <Quote className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                            <p className="text-sm text-emerald-100/80 italic leading-relaxed">
                                "{quote}"
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
