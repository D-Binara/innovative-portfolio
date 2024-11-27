'use client'
import {PinContainer} from "./components/contact-us-section/pin-container";
import {SparklesPreview} from "@/app/components/introduction_section/sparkles/sparkles_apply";
import {TextGenerateEffect} from "./components/about_section/text-generate-effect";
import ProjectsSection from "./components/project-section/projects-section";
import Head from 'next/head';
import Image from 'next/image';
import AchievementCard from "@/app/components/achievements-section/achievement_cards";
import {Memories} from "@/app/components/memoirs-section/memories";
import {NavBar} from "@/app/components/introduction_section/nav-bar";


export default function Home() {
    return (
        <>
            <Head>
                <title>Binara Kaveesha | Tech Enthusiast & Software Developer</title>
                <meta name="description"
                      content="Binara Kaveesha's personal portfolio website. Explore my projects, connect with me on LinkedIn and GitHub, and learn more about my work in software development."/>
                <meta name="keywords"
                      content="Binara Kaveesha, software developer, tech enthusiast, portfolio, LinkedIn, GitHub, innovation, computer science, software engineering"/>
                <meta name="robots" content="index, follow"/>
                <meta name="author" content="Binara Kaveesha"/>
                <link rel="canonical" href="https://your-domain.com"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <main className="flex flex-col min-h-screen bg-black text-white">

                {/* Introduction Section */}
                <section id="home"
                         className="flex flex-col items-center justify-center p-6 bg-black text-white min-h-screen relative">
                    <SparklesPreview/>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-xl font-light text-gray-300 opacity-50">
                            Tech Enthusiast | Software Developer | Passionate About Innovation
                        </p>
                    </div>
                    <NavBar></NavBar>
                </section>

                {/* About Section */}
                <section id="about"
                         className="flex flex-col items-center justify-center p-8 bg-white text-black min-h-screen">
                    <h2 className="text-5xl font-extrabold mb-8">About Me</h2>
                    {/* Profile Image with GitHub Avatar */}
                    <div className="relative mb-8 group">
                        {/* Glowing Border Effect */}
                        <div
                            className="absolute inset-0 w-64 h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"></div>
                        <Image
                            src="https://github.com/D-Binara.png"
                            alt="GitHub Profile Picture"
                            width={200}
                            height={200}
                            className="relative z-10 w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl transition-transform transform group-hover:scale-105 duration-300 ease-in-out"
                        />
                    </div>
                    <TextGenerateEffect
                        words=' I am an undergraduate at Sabaragamuwa University of Sri Lanka, pursuing a BSc (Hons) in Computer and Information Systems. With a deep passion for the software industry, I am dedicated to developing innovative solutions that address real-world challenges. I am constantly expanding my knowledge and skills to contribute meaningfully to the tech landscape and aspire to make a lasting impact through creativity and technological advancement.'/>

                </section>
                {/* End About Section */}

                {/* Projects Section */}
                <section
                    id="projects"
                    className="flex flex-col items-center justify-center p-6 bg-black text-white min-h-screen"
                >
                    <ProjectsSection></ProjectsSection>
                </section>
                {/* End Projects Section */}

                {/* Achievements Section */}
                <section id="achievements"
                         className="flex flex-col items-center justify-center p-8 bg-white text-black min-h-screen">
                    <h2 className="text-4xl font-bold mb-6">Achievements</h2>
                    <div className="flex flex-col items-start space-y-4 max-w-xl">

                        {/* Use AchievementCard component */}
                        <AchievementCard
                            iconSrc="/ac.jpeg"
                            title="Celebrating Team Zyndicate’s Success! - 2nd Runner-Up & Best Team Collaboration at Data Odyssey 2024!"
                            description="Thrilled to announce that Team Zyndicate from Sabaragamuwa University achieved the 2nd Runner-Up position and the prestigious Best Team Collaboration award at Data Odyssey 2024. Proud of the dedication and creativity of my incredible teammates!"
                            teamMembers={["Binara Kaveesha", "Pinil Dissanayaka", "Heshan Navindu", "Vishwa Wijesakare"]}
                        />
                    </div>
                </section>
                {/*End Achievements Section*/}

                {/* Memoirs  Section */}
                <section id="memoirs"
                         className="flex flex-col items-center justify-center p-8 bg-black text-white min-h-screen">
                    <h2 className="text-4xl font-bold mb-6">Memoirs</h2>
                    <Memories></Memories>
                </section>
                {/* End Memoirs  Section */}

                {/* Contact Us Section */}
                <section id='contact'
                         className="flex flex-col items-center justify-center p-6 bg-white text-black min-h-screen">
                    <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                        <PinContainer title="GitHub" href="https://github.com/D-Binara">
                            <div
                                className="flex flex-col justify-center items-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
                                    Explore My GitHub Projects
                                </h3>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                    alt="GitHub Logo"
                                    className="w-40 h-40 mt-4"
                                />
                            </div>
                        </PinContainer>
                        <PinContainer title="LinkedIn"
                                      href="https://www.linkedin.com/in/binara-kaveesha-weerasekara-600497271">
                            <div
                                className="flex flex-col justify-center items-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
                                    Connect with Me on LinkedIn
                                </h3>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                    alt="LinkedIn Logo"
                                    className="w-40 h-40 mt-4"
                                />
                            </div>
                        </PinContainer>
                        <PinContainer title="Email" href="mailto:dbkaveesha@gmail.com">
                            <div
                                className="flex flex-col justify-center items-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
                                    Contact Me via Email
                                </h3>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                                    alt="Email Icon"
                                    className="w-40 h-40 mt-4"
                                />
                            </div>
                        </PinContainer>
                        {/*<PinContainer title="Stack Overflow"*/}
                        {/*              href="https://stackoverflow.com/users/YOUR-STACKOVERFLOW-ID">*/}
                        {/*    <div*/}
                        {/*        className="flex flex-col justify-center items-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">*/}
                        {/*        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">*/}
                        {/*            Ask Questions or View My Contributions on Stack Overflow*/}
                        {/*        </h3>*/}
                        {/*        /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
                        {/*        <img*/}
                        {/*            src="https://cdn-icons-png.flaticon.com/512/2111/2111628.png"*/}
                        {/*            alt="Stack Overflow Logo"*/}
                        {/*            className="w-40 h-40 mt-4"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</PinContainer>*/}
                        {/*<PinContainer title="Medium" href="https://medium.com/@YOUR-MEDIUM-USERNAME">*/}
                        {/*    <div*/}
                        {/*        className="flex flex-col justify-center items-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">*/}
                        {/*        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">*/}
                        {/*            Read My Articles on Medium*/}
                        {/*        </h3>*/}
                        {/*        /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
                        {/*        <img*/}
                        {/*            src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png"*/}
                        {/*            alt="Medium Logo"*/}
                        {/*            className="w-40 h-40 mt-4"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</PinContainer>*/}
                    </div>
                </section>
                {/*End Contact Us Section */}

            </main>
        </>
    );
}
