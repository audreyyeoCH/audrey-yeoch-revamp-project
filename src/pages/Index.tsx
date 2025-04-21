
// Modern portfolio: hero, sections, animated ToC, card style. Uses placeholder image for demo.

import TableOfContents from "../components/TableOfContents";

// If images/ folder exists, replace src below with: /images/profile.jpg or similar
const AVATAR =
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=300&h=300&facepad=2&q=80";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#ecf0ff] to-[#f6eaff] relative overflow-x-hidden pb-28">
      {/* HERO */}
      <section
        className="flex flex-col items-center gap-4 pt-14 sm:pt-24"
        id="about"
      >
        <img
          src={AVATAR}
          alt="Audrey Yeoch"
          className="rounded-full border-4 border-white shadow-lg w-36 h-36 object-cover mb-6 animate-fade-in"
        />
        <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-gray-900 drop-shadow mb-1 animate-fade-in">
          Audrey Yeoch
        </h1>
        <div className="text-lg text-gray-600 font-medium max-w-xl text-center animate-fade-in">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
            Software Engineer, Designer, Creative Technologist
          </span>
          <p className="mt-2">
            Building delightful experiences at the intersection of code & creativity.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="max-w-2xl mx-auto mt-16 w-full px-4"
      >
        <div className="rounded-2xl glass shadow-lg p-7 bg-white/90 backdrop-blur-md border border-gray-200 animate-fade-in">
          <h2 className="font-playfair text-2xl font-semibold mb-2 text-primary drop-shadow">
            Education
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>National University of Singapore</strong>
              <br />
              B.Sc. Computer Science
              <br />
              <span className="text-gray-500 text-sm">2019 – 2023</span>
            </li>
          </ul>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section
        id="work"
        className="max-w-2xl mx-auto mt-10 w-full px-4"
      >
        <div className="rounded-2xl glass shadow-lg p-7 bg-white/90 backdrop-blur-md border border-gray-200 animate-fade-in">
          <h2 className="font-playfair text-2xl font-semibold mb-2 text-primary drop-shadow">
            Work Experience
          </h2>
          <ul className="space-y-3">
            <li>
              <p className="font-semibold text-gray-800">
                Software Engineer, ABC Company
              </p>
              <span className="text-gray-500 text-sm">2023 – Present</span>
              <p className="text-gray-600 text-sm">
                Working on web applications, UI modernization, rapid prototyping, storytelling.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-800">
                Frontend Developer Intern, XYZ Studio
              </p>
              <span className="text-gray-500 text-sm">Summer 2022</span>
              <p className="text-gray-600 text-sm">
                Helped design and implement interactive interfaces for digital campaigns.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-2xl mx-auto mt-10 w-full px-4 mb-24"
      >
        <div className="rounded-2xl glass shadow-lg p-7 bg-white/90 backdrop-blur-md border border-gray-200 animate-fade-in">
          <h2 className="font-playfair text-2xl font-semibold mb-2 text-primary drop-shadow">
            Projects
          </h2>
          <ul className="space-y-3">
            <li>
              <span className="font-semibold text-gray-800">Personal Portfolio Website</span>
              <p className="text-gray-600 text-sm">
                Designed and developed a responsive site with React, Tailwind, and custom artwork.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-800">Creative Coding Gallery</span>
              <p className="text-gray-600 text-sm">
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
