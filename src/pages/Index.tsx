
import TableOfContents from "../components/TableOfContents";

const AVATAR = "/lovable-uploads/0cd4ffc8-fb6f-4349-99cd-14200b53e072.png";

// "Lover"-inspired pastel linear gradient (pink to soft blue to purple).
const BG_GRADIENT =
  "bg-[linear-gradient(135deg,_#ffdee2_0%,_#e5deff_60%,_#9b87f5_100%)]";

const Index = () => {
  return (
    <div
      className={`min-h-screen flex flex-col ${BG_GRADIENT} relative overflow-x-hidden pb-32 transition-all`}
      style={{
        backgroundAttachment: "fixed"
      }}
    >
      {/* HERO */}
      <section className="flex flex-col items-center gap-5 pt-16 sm:pt-28" id="about">
        <div className="relative">
          {/* Pastel gradient border ring for avatar */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <span className="block w-40 h-40 rounded-full bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 opacity-80 blur-lg" />
          </div>
          <img
            src={AVATAR}
            alt="Audrey Yeoch"
            className="relative z-10 rounded-full border-4 border-white shadow-xl w-40 h-40 object-cover aspect-square animate-fade-in"
            style={{
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.11)",
              background: "#fff"
            }}
          />
        </div>
        <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-gray-900 drop-shadow mb-2 animate-fade-in tracking-tight">
          Audrey Yeoch
        </h1>
        <div className="text-lg sm:text-xl text-gray-700 font-medium max-w-2xl text-center animate-fade-in">
          <span className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent font-bold">
            Software Engineer, Designer, Creative Technologist
          </span>
          <p className="mt-3 text-base sm:text-lg text-gray-500 font-normal">
            Building delightful experiences at the intersection of code & creativity.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-2xl mx-auto mt-20 w-full px-4">
        <div className="rounded-3xl glass shadow-2xl p-8 bg-white/90 backdrop-blur-2xl border border-gray-200 animate-fade-in">
          <h2 className="font-playfair text-3xl font-bold mb-2 text-primary drop-shadow">
            Education
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
            <li>
              <strong>National University of Singapore</strong>
              <br />
              B.Sc. Computer Science
              <br />
              <span className="text-gray-400 text-base">2019 – 2023</span>
            </li>
          </ul>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="work" className="max-w-2xl mx-auto mt-12 w-full px-4">
        <div className="rounded-3xl glass shadow-2xl p-8 bg-white/90 backdrop-blur-2xl border border-gray-200 animate-fade-in">
          <h2 className="font-playfair text-3xl font-bold mb-2 text-primary drop-shadow">
            Work Experience
          </h2>
          <ul className="space-y-4 text-lg">
            <li>
              <p className="font-semibold text-gray-900">
                Software Engineer, ABC Company
              </p>
              <span className="text-gray-400 text-base">2023 – Present</span>
              <p className="text-gray-600 text-base">
                Working on web applications, UI modernization, rapid prototyping, storytelling.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">
                Frontend Developer Intern, XYZ Studio
              </p>
              <span className="text-gray-400 text-base">Summer 2022</span>
              <p className="text-gray-600 text-base">
                Helped design and implement interactive interfaces for digital campaigns.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-2xl mx-auto mt-12 w-full px-4 mb-28">
        <div className="rounded-3xl glass shadow-2xl p-8 bg-white/90 backdrop-blur-2xl border border-gray-200 animate-fade-in">
          <h2 className="font-playfair text-3xl font-bold mb-2 text-primary drop-shadow">
            Projects
          </h2>
          <ul className="space-y-4 text-lg">
            <li>
              <span className="font-semibold text-gray-900">
                Personal Portfolio Website
              </span>
              <p className="text-gray-600 text-base">
                Designed and developed a responsive site with React, Tailwind, and custom artwork.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Creative Coding Gallery</span>
              <p className="text-gray-600 text-base">
                Showcases experiments with generative art and visual storytelling.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Sticky Table of Contents at bottom */}
      <TableOfContents />
    </div>
  );
};

export default Index;
