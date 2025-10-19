
import React from 'react';

export const TechStack = () => {
  return (
    <section className="flex flex-col items-center mt-5 mb-8 animate-fade-in" id="tech-stack">
      <div className="rounded-3xl glass shadow-xl p-6 bg-white/80 border border-gray-200">
        <h2 className="font-playfair text-2xl font-bold mb-2 text-primary text-center">
          Tech Stack
        </h2>
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <div>
            <div className="font-semibold text-gray-800 mb-1 text-center">Tools</div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-block bg-gradient-to-r from-pink-200 via-purple-200 to-blue-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-pink-100">
                R
              </span>
              <span className="inline-block bg-gradient-to-r from-pink-200 via-purple-200 to-blue-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-pink-100">
                Python
              </span>
              <span className="inline-block bg-gradient-to-r from-pink-200 via-purple-200 to-blue-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-purple-100">
                Julia
              </span>
              <span className="inline-block bg-gradient-to-r from-green-200 via-blue-100 to-purple-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-green-100">
                Git
              </span>
              <span className="inline-block bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-yellow-100">
                Bash
              </span>
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-800 mb-1 text-center">Concepts</div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-block bg-gradient-to-r from-blue-100 via-purple-100 to-pink-200 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-blue-100">
                Probability Theory
              </span>
              <span className="inline-block bg-gradient-to-r from-pink-100 via-red-100 to-purple-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-pink-100">
                Bayesian Statistics
              </span>
              <span className="inline-block bg-gradient-to-r from-green-100 via-blue-100 to-pink-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-green-100">
                Linear Regression
              </span>
              <span className="inline-block bg-gradient-to-r from-purple-100 via-pink-200 to-blue-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-purple-100">
                Mixed Models
              </span>
              <span className="inline-block bg-gradient-to-r from-yellow-100 via-blue-100 to-pink-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-yellow-100">
                Predictive Analysis
              </span>
              <span className="inline-block bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-pink-100">
                Machine Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
