import { PinContainer } from "./components/3d-cards";
import { SparklesPreview } from "./components/sparkles/sparkles_apply";
import { TracingBeam } from "./components/tracingBeam";

export default function Home() {
  return (
    
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Introduction Section */}
      <section className="flex flex-col items-center justify-center p-6 bg-black text-white min-h-screen relative">
        <SparklesPreview />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xl font-light text-gray-300 opacity-50">
            Tech Enthusiast | Software Developer | Passionate About Innovation
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col items-center justify-center p-6 bg-white text-black min-h-screen">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        {/* Add project content here */}
      </section>

      {/* Projects Section */}
      <section className="flex flex-col items-center justify-center p-6 bg-black text-white min-h-screen">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        {/* Add project content here */}
      </section>

      {/* Contact Us Section */}
      <section className="flex flex-col items-center justify-center p-6 bg-white text-black min-h-screen">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

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
