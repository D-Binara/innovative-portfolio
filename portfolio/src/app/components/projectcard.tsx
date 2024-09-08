'use client'
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "AgriConnect",
        description:
            "An AI-powered mobile app to provide crop recommendations and facilitate farmer-buyer connections.",
        link: "/projects/agriconnect",
    },
    {
        title: "Baby Chart App",
        description:
            "A mobile app that digitizes baby cards for tracking vaccinations, growth, and medical insights.",
        link: "/projects/baby-chart-app",
    },
    {
        title: "FOC Alumina",
        description:
            "A website developed for the Faculty of Computing alumni network, connecting graduates and students.",
        link: "/projects/foc-alumina",
    },
];

export default function ProjectsSection() {
    return (
        <div>
            <h2 className="text-4xl font-bold mb-12">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform"
                    >
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <Link href={project.link} legacyBehavior>
                            <a className="text-cyan-400 underline">Learn more</a>
                        </Link>

                    </motion.div>
                ))}
            </div>
        </div>

    );
}
