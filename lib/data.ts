import { Globe, Brain, CircuitBoard, Terminal, MapPin, CreditCard, Lightbulb, Users, Zap, Activity } from "lucide-react";
import React from "react";

export const skills = [
    {
        title: "Full Stack Development",
        subtitle: "React, Next.js, Node.js",
        icon: Globe,
        className: "md:col-span-2 bg-white/5 border-white/10",
        iconColor: "text-emerald-300"
    },
    {
        title: "Machine Learning",
        subtitle: "Python, TensorFlow, PyTorch",
        icon: Brain,
        className: "bg-white/5 border-white/10",
        iconColor: "text-violet-300"
    },
    {
        title: "System Architecture",
        subtitle: "C#, .NET, Microservices",
        icon: CircuitBoard,
        className: "bg-white/5 border-white/10",
        iconColor: "text-cyan-300"
    },
    {
        title: "Low-Level Programming",
        subtitle: "C, OS Concepts,Linux",
        icon: Terminal,
        className: "md:col-span-2 bg-white/5 border-white/10",
        iconColor: "text-orange-300"
    },
];

export const technicalSkills = [
    {
        category: "Full Stack Development",
        skills: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "HTML/CSS", "Angular"]
    },
    {
        category: "Backend & Frameworks",
        skills: ["Java", "Spring Boot", "C#", ".NET", "PostgreSQL", "Docker"]
    },
    {
        category: "Machine Learning",
        skills: ["Python", "TensorFlow", "PyTorch", "Pandas", "NumPy"]
    },
    {
        category: "Low-Level & Systems",
        skills: ["C", "OS Concepts", "Linux"]
    }
];

export const projects = [
    {
        title: "iTECify / CollabCode",
        tech: "React • Fastify • Supabase • Docker • Monaco • Gemini",
        problem: "Remote pair-programming tools often miss secure code execution, robust realtime collaboration primitives, and integrated AI assistance in one platform.",
        solution: "Built at iTEC as a team: a full-stack collaborative coding platform with Monaco editor, Supabase auth/realtime, presence and cursor sync, line locks, timeline replay, and a Fastify execution service that runs JS/Python/Rust in constrained Docker sandboxes with pre-run scanning, streaming logs, and stop/input controls.",
        highlight: "Unified collaborative editing, secure-ish containerized execution, and Gemini-powered coding assistance in an authenticated multi-user environment with session persistence.",
        icon: Terminal,
        iconColor: "text-cyan-300",
        link: "https://github.com/AlexandruCL/iTEC_2026/tree/main"
    },
    {
        title: "Water Quality IoT Monitor",
        tech: "Raspberry Pi • AWS IoT • Django • LSTM Autoencoder • ONNX",
        problem: "Traditional water quality monitoring relies on static thresholds that produce excessive false alarms from sensor noise, while missing subtle multi-parameter anomalies.",
        solution: "Built an end-to-end IoT pipeline: Raspberry Pi sensors → AWS IoT Core (MQTT/TLS) → Lambda → Django REST API with an LSTM Autoencoder for anomaly detection. The ML model engineers 20 features from 4 raw sensors and acts as a gatekeeper in a two-layer alerting system, suppressing false alarms and detecting pattern deviations that static thresholds miss.",
        highlight: "Achieved 0.946 ROC AUC with a smart two-layer alert matrix — threshold breaches alone don't trigger alerts; the ML model must confirm, reducing false alarms while catching subtle multi-sensor anomalies.",
        icon: Activity,
        iconColor: "text-emerald-300",
        link: "https://github.com/patric1304/Water-quality-IOT-project"
    },
    {
        title: "Echoes: Digital Heritage Trail",
        tech: "React • Node.js • Graph Algorithms",
        problem: "Cultural heritage sites lack engaging, accessible digital narratives.",
        solution: "Built a 'Fog of War' engine that unlocks media only within a 50m physical radius.",
        highlight: "A location-based platform where historical narratives are 'echoed' to the user via geofencing.",
        icon: MapPin,
        iconColor: "text-rose-300",
        link: "https://github.com/ionutT77/Echoes-Digital-Heritage-Trail"
    },
    {
        title: "Modern Banking System",
        tech: "C# .NET 8 • WPF • MVVM",
        problem: "Simulating complex banking operations with a responsive desktop UI.",
        solution: "Built a WPF app using MVVM architecture for clean code separation. Implemented JSON persistence and async operations for non-blocking transactions.",
        highlight: "Custom currency conversion engine with real-time fee calculation.",
        icon: CreditCard,
        iconColor: "text-purple-300",
        link: "https://github.com/patric1304/Banking-App"
    },
    {
        title: "System Resource Manager",
        tech: "C • Linux API • IPC",
        problem: "Managing race conditions in concurrent process execution.",
        solution: "Developed 'Treasure Manager', a multi-process simulation using mutexes and shared memory to handle resource contention safely.",
        highlight: "Achieved deadlock-free execution using strict resource hierarchy.",
        icon: Terminal,
        iconColor: "text-orange-300",
        link: "https://github.com/patric1304/ProiectOS"
    }
];

export const experience = [
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
        ],
        quote: "Demonstrated good technical understanding, adaptability, and a desire to learn. His contributions were useful in implementing features, solving problems, and meeting delivery deadlines."
    }
];

export const education = [
    {
        degree: "Computer Science Student",
        school: "Politehnica University of Timișoara",
        year: "2023 - Present",
        details: "Currently 3rd year. Focus on automation, problem-solving, and innovative technologies.",
    },
];

export const softSkills = [
    {
        title: "Problem Solving",
        description: "Breaking down complex systems into manageable logic.",
        icon: Lightbulb,
        iconColor: "text-yellow-300"
    },
    {
        title: "Teamwork",
        description: "Actively participated in development team during 48h Hackathon, UniHack.",
        icon: Users,
        iconColor: "text-blue-300"
    },
    {
        title: "Rapid Learning",
        description: "Efficiently mastering new technologies and adapting to evolving project requirements.",
        icon: Zap,
        iconColor: "text-amber-300"
    },
];
