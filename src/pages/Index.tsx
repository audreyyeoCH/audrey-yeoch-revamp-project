
import TableOfContents from "../components/TableOfContents";

// Use the new uploaded photo (user provided)
const AVATAR = "/lovable-uploads/5493dfe6-c274-4e4f-9c4d-cecdc1debf85.png";

// Updated pastel gradient background inspired by Taylor Swift's Lover album cover (soft warm pinks, lilacs, and blues)
const BG_GRADIENT =
  "bg-[linear-gradient(135deg,_#ff9a9e_0%,_#fad0c4_50%,_#fad0c4_70%,_#fbc2eb_85%,_#a18cd1_100%)]";

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
            alt="Audrey Yeo"
            className="relative z-10 rounded-full border-4 border-white shadow-xl w-40 h-40 object-cover aspect-square animate-fade-in"
            style={{
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.11)",
              background: "#fff",
              objectPosition: "center 20%" // shift the image a bit lower to see top of head fully
            }}
          />
        </div>
        <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-gray-900 drop-shadow mb-2 animate-fade-in tracking-tight">
          Audrey Yeo
        </h1>
        <div className="text-lg sm:text-xl text-gray-700 font-medium max-w-2xl text-center animate-fade-in">
          <span className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent font-bold">
            Research Statistician and Software Engineer
          </span>
          {/* Removed old p, since your headline covers it */}
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
              <strong>National University of Singapore</strong><br />
              Bachelor of Science (B.Sc.), Statistics, Minor in Computer Science<br />
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
                Research Statistician, Singapore Institute for Clinical Sciences (A*STAR)
              </p>
              <span className="text-gray-400 text-base">Jul 2023 – Present</span>
              <p className="text-gray-600 text-base">
                Designing and analyzing research studies on maternal and child health, data processing and reporting, and supporting the development of statistical tools.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">
                Software Engineering Intern, Shopee
              </p>
              <span className="text-gray-400 text-base">May 2022 – Aug 2022</span>
              <p className="text-gray-600 text-base">
                Built scalable backend services and web applications for e-commerce logistics.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">
                Data Science Intern, Standard Chartered Bank
              </p>
              <span className="text-gray-400 text-base">Jan 2022 – May 2022</span>
              <p className="text-gray-600 text-base">
                Developed analytics dashboards and predictive models for business insights.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">
                Frontend Developer Intern, XYZ Studio
              </p>
              <span className="text-gray-400 text-base">May 2021 – Aug 2021</span>
              <p className="text-gray-600 text-base">
                Designed and implemented interactive user interfaces for digital campaigns.
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

