import { IconBrandGithub, IconBrandLinkedin, IconCode, IconHome, IconMail, IconUser } from "@tabler/icons-react";
import { PinContainer } from "./components/3d-cards";
import { FloatingDock } from "./components/floating-dock";
import { SparklesPreview } from "./components/sparkles/sparkles_apply";
import { TextGenerateEffect } from "./components/about";
import ProjectsSection from "./components/projectcard";
import { Metadata } from 'next';


const links = [
  {
    "title": "Home",
    
    "icon": (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    "href": "#home"
  },
  {
    "title": "About Me",
    "icon": (
      <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    "href": "#about"
  },
  {
    "title": "Projects",
    "icon": (
      <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    "href": "#projects"
  },
  {
    "title": "GitHub",
    "icon": (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    "href": "#contact"
  },
  {
    "title": "LinkedIn",
    "icon": (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    "href": "#contact"
  },
  {
    "title": "Contact",
    "icon": (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    "href": "#contact"
  }
];

export const metadata: Metadata = {
  title: 'Binara Kaveesha - Portfolio',
  description: 'Binara Kaveesha\'s portfolio website showcasing projects and skills in software development.',
  keywords: 'Binara Kaveesha, software developer, portfolio, projects',
  authors: [{ name: 'Binara Kaveesha' }],
  openGraph: {
    title: 'Binara Kaveesha - Portfolio',
    description: 'Binara Kaveesha\'s portfolio website showcasing projects and skills in software development.',
    images: ['/path-to-your-image.jpg'],
    url: 'https://your-website.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Introduction Section */}
      <section id="home" className="flex flex-col items-center justify-center p-6 bg-black text-white min-h-screen relative">
        <SparklesPreview />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xl font-light text-gray-300 opacity-50">
            Tech Enthusiast | Software Developer | Passionate About Innovation
          </p>
        </div>
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />

      </section>


      {/* About Section */}
      <section id="about" className="flex flex-col items-center justify-center p-6 bg-white text-black min-h-screen">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <TextGenerateEffect words=' I am an undergraduate at Sabaragamuwa University of Sri Lanka, pursuing a BSc (Hons) in Computer and Information Systems. With a deep passion for the software industry, I am dedicated to developing innovative solutions that address real-world challenges. I am constantly expanding my knowledge and skills to contribute meaningfully to the tech landscape and aspire to make a lasting impact through creativity and technological advancement.' />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="flex flex-col items-center justify-center p-6 bg-black text-white min-h-screen"
      >
        <ProjectsSection></ProjectsSection>
      </section>
      {/* <section id="projects"className="flex flex-col items-center justify-center p-6 bg-black text-white min-h-screen">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
      </section> */}

      {/* Contact Us Section */}
      <section id='contact' className="flex flex-col items-center justify-center p-6 bg-white text-black min-h-screen">
        <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <PinContainer title="GitHub" href="https://github.com/D-Binara">
            <div className="flex flex-col justify-center items-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
                Explore My GitHub Projects
              </h3>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub Logo"
                className="w-40 h-40 mt-4"
              />
            </div>
          </PinContainer>

          <PinContainer title="LinkedIn" href="https://www.linkedin.com/in/binara-kaveesha-weerasekara-600497271">
            <div className="flex flex-col justify-center items-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
                Connect with Me on LinkedIn
              </h3>
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn Logo"
                className="w-40 h-40 mt-4"
              />
            </div>
          </PinContainer>

          <PinContainer title="Email" href="mailto:dbkaveesha@gmail.com">
            <div className="flex flex-col justify-center items-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
                Contact Me via Email
              </h3>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email Icon"
                className="w-40 h-40 mt-4"
              />
            </div>
          </PinContainer>
        </div>
      </section>
    </main>
  );
}
