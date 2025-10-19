
import React from 'react';

const PHASE1B_LOGO = "/lovable-uploads/94a80ecc-3dcd-4c2f-96e1-70416101296c.png";

export const Projects = () => {
  return (
    <section id="projects" className="max-w-2xl mx-auto mt-12 w-full px-4 mb-8">
      <div className="rounded-3xl glass shadow-2xl p-8 bg-white/90 backdrop-blur-2xl border border-gray-200 animate-fade-in">
        <h2 className="font-playfair text-3xl font-bold mb-2 text-primary drop-shadow">
          Projects
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="flex flex-wrap items-center gap-2">
            <img
              src={PHASE1B_LOGO}
              alt="phase1b logo"
              className="w-8 h-8 rounded-lg border border-gray-300 shadow"
              style={{ marginRight: "0.5rem" }}
            />
            <span>
              Lead developer for R package phase1b :{" "}
              <a
                href="https://genentech.github.io/phase1b/main/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline font-semibold"
              >
                A Bayesian Approach to early clinical trials
              </a>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
