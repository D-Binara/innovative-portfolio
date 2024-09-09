'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        "title": "AgriConnect",
        "description": "An AI-powered mobile app to provide crop recommendations and facilitate farmer-buyer connections.",
        "link": "/projects/agriconnect"
    },
    {
        "title": "Med Assist",
        "description": "An AI-driven mobile app that simplifies medical report interpretation and offers personalized healthcare provider recommendations.",
        "link": "https://github.com/HeshanNavindu-7/MedAssist-frontend"
    },
    {
        "title": "Glova",
        "description": "A revolutionary skincare app using facial recognition and AI for personalized skincare solutions.",
        "link": "https://github.com/pinilDissanayaka/Glova-Application-using-Flutter"
    }
    
];

export default function ProjectsSection() {
    return (
        <div>
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
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
                            <a className="flex items-center text-cyan-400 underline">
                                <FaGithub className="mr-2" />
                                {project.link.startsWith("https://github.com") ? "View on GitHub" : "Learn more"}
                            </a>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>

    );
}
