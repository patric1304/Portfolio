import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
    title: string;
    subtitle: string;
    icon: LucideIcon;
    className?: string;
    iconColor?: string;
    index: number;
    variants: any;
}

export default function SkillCard({
    title,
    subtitle,
    icon: Icon,
    className = "",
    iconColor = "text-emerald-300",
    index,
    variants,
}: SkillCardProps) {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-3xl border backdrop-blur-sm hover:bg-opacity-10 transition-colors ${className}`}
        >
            <div className="h-full flex flex-col justify-between space-y-4">
                <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/5">
                    <Icon className={`size-6 ${iconColor}`} />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
                    <p className="text-sm text-slate-400 font-mono">{subtitle}</p>
                </div>
            </div>
        </motion.div>
    );
}
