
import React from 'react';

export const Talks = () => {
  return (
    <section id="talks" className="max-w-2xl mx-auto mt-6 w-full px-4 mb

-28">
      <div className="rounded-3xl glass shadow-2xl p-8 bg-white/90 backdrop-blur-2xl border border-gray-200 animate-fade-in">
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-1 text-pink-700">Upcoming :</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <a
                  href="https://iscb2025.info/courses.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Pre-Conference Course with Daniel Sabanés Bové & Alessandro Gasparini - International Society of Clinical Biostatistics, Basel, CH - 2025
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1 text-purple-700">Recent :</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <a
                  href="https://www.finc-research.com/2025_DAGStat_Practical-Bayesian-Statistics.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Practical Bayesian Statistics, DAGStat, Berlin, D - 2025
                </a>
              </li>
              <li>
                <a
                  href="https://www.finc-research.com/2024_PHUSE24_Gearing_Statisticians_Software_Success_files"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Good Statistical Software Engineering in R Packages
                </a>
              </li>
              <li>
                <a
                  href="https://www.finc-research.com/2024_PHUSE24_Gearing_Statisticians_Software_Success_files"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Gearing Statisticians up for Software Success
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
