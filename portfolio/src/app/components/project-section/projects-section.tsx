'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import {AnimatedTooltip} from "@/app/components/project-section/animated-tooltip";

const projects = [
    {
        title: "AgriConnect",
        description: "An AI-powered mobile app to provide crop recommendations and facilitate farmer-buyer connections.",
        frontend: "https://github.com/HeshanNavindu-7/AgriConnect_mobile_app",
        backend: "https://github.com/D-Binara/Agri_Connect_laravel_BackEnd-",
        contributors: [
            { id: 1, name: "D-Binara" },
            { id: 2, name: "pinilDissanayaka" },
            { id: 3, name: "HeshanNavindu-7" },
            { id: 4, name: "Denuwan-Kalubowila" },
            { id: 5, name: "Vishwa0416" },
        ]
    },
    {
        title: "Med Assist",
        description: "An AI-driven mobile app that simplifies medical report interpretation and offers personalized healthcare provider recommendations.",
        frontend: "https://github.com/HeshanNavindu-7/MedAssist-frontend",
        backend: "https://github.com/Denuwan-Kalubowila/MedAssist-be",
        contributors: [
            { id: 1, name: "D-Binara" },
            { id: 2, name: "Vishwa0416" },
            { id: 3, name: "HeshanNavindu-7" },
            { id: 4, name: "Denuwan-Kalubowila" },
        ]
    },
    {
        title: "Glova",
        description: "A revolutionary skincare app using facial recognition and AI for personalized skincare solutions.",
        frontend: "https://github.com/pinilDissanayaka/Glova-Application-using-Flutter/tree/main/Front-End",
        backend: "https://github.com/pinilDissanayaka/Glova-Application-using-Flutter/tree/main/Back-End",
        contributors: [
            { id: 1, name: "D-Binara" },
            { id: 2, name: "pinilDissanayaka" },
            { id: 3, name: "HeshanNavindu-7" },
            { id: 4, name: "Denuwan-Kalubowila" },
            { id: 5, name: "Vishwa0416" },
        ]
    },
    {
        title: "Official Website of the Society of Computer Sciences",
        description: "Developed the official website for the Society of Computer Sciences to provide a platform for society activities.",
        frontend: "https://github.com/GihanSVND/SOCS-Website-Front_end",
        backend: "https://github.com/GihanSVND/SOCS-Website-Front_end",
        contributors: [
            { id: 1, name: "D-Binara" },
            { id: 2, name: "GihanSVND" },
            { id: 3, name: "LakshanShalintha" },
            { id: 4, name: "HarshaniYaparathne" },
            { id: 5, name: "nethhari" },
        ]
    },
    {
        title: "Travalo- Sri Lankan Tourism Web Platform",
        description: " Developed a platform for Sri Lankan tourism, including travel destinations, accommodations, and cultural in sights with admin management.",
        frontend: "https://github.com/D-Binara/PHP-Web-Project",
        backend: "https://github.com/D-Binara/PHP-Web-Project",
        contributors: [
            { id: 1, name: "D-Binara" },
            { id: 2, name: "GihanSVND" },
            { id: 3, name: "HeshanNavindu-7" },
            { id: 4, name: "Denuwan-Kalubowila" },
            { id: 5, name: "LakshanShalintha" },
            { id: 6, name: "LakruwanKavinda" },
            { id: 7, name: "Dileesha-Lakshan07" },
        ]
    },
    {
        title: "AgriZone",
        description: "AgriZone, an innovative solution for modern-day farming! With features that empower farmers to make data-driven decisions and connect to valuable resources, AgriZone brings the power of technology right to the field.",
        frontend: "https://github.com/D-Binara/iwb102-team-novices",
        backend: "https://github.com/D-Binara/iwb102-team-novices",
        contributors: [
            { id: 1, name: "D-Binara" },
            { id: 2, name: "LakshanShalintha" },
            { id: 3, name: "DeepikaRajapaksha" },
            { id: 4, name: "HarshaniYaparathne" },
        ]
    },
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

                        <div className="flex space-x-4 mb-4">
                            <Link href={project.frontend} legacyBehavior>
                                <a className="flex items-center text-cyan-400 underline">
                                    <FaGithub className="mr-2" />
                                    Frontend
                                </a>
                            </Link>

                            <Link href={project.backend} legacyBehavior>
                                <a className="flex items-center text-cyan-400 underline">
                                    <FaGithub className="mr-2" />
                                    Backend
                                </a>
                            </Link>
                        </div>

                        {/*/!* Contributors Section *!/*/}
                        {/*<div className="flex -space-x-2">*/}
                        {/*    {project.contributors.map((contributor, idx) => (*/}
                        {/*        <Link key={idx} href={`https://github.com/${contributor}`} legacyBehavior>*/}
                        {/*            <a target="_blank" className="inline-block">*/}
                        {/*                /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
                        {/*                <img*/}
                        {/*                    src={`https://github.com/${contributor}.png?size=40`}*/}
                        {/*                    alt={`${contributor}'s GitHub profile`}*/}
                        {/*                    className="w-10 h-10 rounded-full border-2 border-gray-700"*/}
                        {/*                />*/}
                        {/*            </a>*/}
                        {/*        </Link>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        {/* Contributors Section */}
                        <div className="flex -space-x-2">
                            <AnimatedTooltip
                                items={project.contributors.map((contributor) => ({
                                    id: contributor.id,
                                    name: contributor.name,
                                    image: `https://github.com/${contributor.name}.png?size=40`
                                }))}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
