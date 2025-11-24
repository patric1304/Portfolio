import { Globe, Brain, CircuitBoard, Terminal, MapPin, TrendingUp, CreditCard, Lightbulb, Users, Zap } from "lucide-react";
import React from "react";

export const skills = [
    {
        title: "Full Stack Development",
        subtitle: "React, Next.js, Node.js",
        icon: Globe,
        className: "md:col-span-2 bg-emerald-500/5 border-emerald-500/20",
        iconColor: "text-emerald-300"
    },
    {
        title: "Machine Learning",
        subtitle: "Python, TensorFlow, PyTorch",
        icon: Brain,
        className: "bg-violet-500/5 border-violet-500/20",
        iconColor: "text-violet-300"
    },
    {
        title: "System Architecture",
        subtitle: "C#, .NET, Microservices",
        icon: CircuitBoard,
        className: "bg-cyan-500/5 border-cyan-500/20",
        iconColor: "text-cyan-300"
    },
    {
        title: "Low-Level Programming",
        subtitle: "C, C++, OS Concepts",
        icon: Terminal,
        className: "md:col-span-2 bg-orange-500/5 border-orange-500/20",
        iconColor: "text-orange-300"
    },
];

export const projects = [
    {
        title: "Echoes: Digital Heritage Trail",
        tech: "React Native • Node.js • Graph Algorithms",
        problem: "Cultural heritage sites lack engaging, accessible digital narratives.",
        solution: "Built a 'Fog of War' engine that unlocks media only within a 50m physical radius.",
        highlight: "A location-based platform where historical narratives are 'echoed' to the user via geofencing.",
        icon: MapPin,
        iconColor: "text-rose-300",
        link: "https://github.com/ionutT77/Echoes-Digital-Heritage-Trail"
    },
    {
        title: "AI Stock Predictor",
        tech: "Python • TensorFlow • NewsAPI",
        problem: "Retail traders lack tools combining technical analysis with news sentiment.",
        solution: "Created a hybrid ML pipeline feeding historical data and sentiment scores into a neural network. Includes smart caching to optimize API usage.",
        highlight: "Smart caching system reducing API calls by 90% for free-tier optimization.",
        icon: TrendingUp,
        iconColor: "text-emerald-300",
        link: "https://github.com/patric1304/Stock-price-prediction-model"
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
