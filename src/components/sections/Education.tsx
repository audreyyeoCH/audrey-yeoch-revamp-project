
import React from 'react';

export const Education = () => {
  return (
    <section id="education" className="max-w-2xl mx-auto mt-20 w-full px-4">
      <div className="rounded-3xl glass shadow-2xl p-8 bg-white/90 backdrop-blur-2xl border border-gray-200 animate-fade-in">
        <h2 className="font-playfair text-3xl font-bold mb-2 text-primary drop-shadow">
          Education
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
          <li>
            <strong>University of Zürich (UZH)</strong>
            <br />
            Master of Science in Biostatistics
            <br />
            <span className="text-gray-500 text-base">
              Technologies: R, Python, MATLAB
            </span>
          </li>
          <li>
            <strong>University of Geneva</strong>
            <br />
            Coursework in Economics and Statistics
            <br />
            <span className="text-gray-500 text-base">
              Technologies: MATLAB, R
            </span>
          </li>
          <li>
            <strong>University of Sydney</strong>
            <br />
            Graduate Certificate in Clinical Trials Practice
          </li>
          <li>
            <strong>University of Melbourne</strong> <span className="text-gray-600">(Coursework only)</span>
            <br />
            Economic Evaluation I from Master of Public Health <span className="text-gray-600">(First Class Honours)</span>
          </li>
          <li>
            <strong>University of Sydney</strong>
            <br />
            Bachelor of Science &amp; Master of Nursing
          </li>
        </ul>
      </div>
    </section>
  );
};
