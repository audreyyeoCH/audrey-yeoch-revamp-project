
import React from 'react';

export const WorkExperience = () => {
  return (
    <section id="work" className="max-w-2xl mx-auto mt-12 w-full px-4">
      <div className="rounded-3xl glass shadow-2xl p-8 bg-white/90 backdrop-blur-2xl border border-gray-200 animate-fade-in">
        <h2 className="font-playfair text-3xl font-bold mb-2 text-primary drop-shadow">
          Work Experience
        </h2>
        <ul className="space-y-4 text-lg">
          <li>
            <p className="font-semibold text-gray-900">
              Finc Research
            </p>
            <span className="text-gray-400 text-base">March 2025 – Current</span>
            <br />
            <span className="font-medium text-gray-800">
              Chief Statistician &amp; Entrepreneur
            </span>
            <ul className="list-disc ml-5 mt-1 text-base text-gray-700 space-y-1">
              <li>
                Transforming industry questions into Data Science solutions in diverse sectors.
              </li>
              <li>
                Deploying Statistics and Machine Learning solutions in analyses or software infrastructure such as R packages.
              </li>
              <li>
                Supporting diverse sectors in technological transformation such as R adoption.
              </li>
            </ul>
          </li>
          <li>
            <p className="font-semibold text-gray-900">
              Hoffman La Roche AG
            </p>
            <span className="text-gray-400 text-base">July 2021 – Feb 2025</span>
            <br />
            <span className="font-medium text-gray-800">Biostatistician and Statistical Software Engineer</span>
            <span className="text-gray-400 text-base"> (May 2022 – Feb 2025)</span>
            <ul className="list-disc ml-5 mt-1 text-base text-gray-700 space-y-1">
              <li>
                Project lead/study statistician for design of experiments and analysis in pharmacodynamic and pharmacokinetic studies (early and late development).
              </li>
              <li>
                Lead for statistical analysis plans, monitoring charters, dose escalation, efficacy, and futility analyses (Bayesian and Frequentist frameworks).
              </li>
              <li>
                Translate business questions into statistical frameworks and drive strategic data-driven decisions across multi-disciplinary teams.
              </li>
              <li>
                Statistical software engineering in R (collaborating with methodologists and stakeholders), and co-organiser/instructor for Julia programming courses (Q1-2, 2024).
              </li>
              <li>
                Real-World Data analytics and engineering (Flatiron, CPRD, Picnic Health, oncology/haematology, SQL, Python, Redshift).
              </li>
              <li>
                Tech: R, Julia, Git, Bash, Python, SQL, Redshift.
              </li>
            </ul>
          </li>
          {/* Previous work experience entries */}
          <li>
            <p className="font-semibold text-gray-900">
              Royal Children's Hospital
            </p>
            <span className="text-gray-400 text-base">April 2021 – June 2021</span>
            <ul className="list-disc ml-5 mt-1 text-base text-gray-700 space-y-1">
              <li>
                Registered Nurse, COVID frontline essential worker — Testing &amp; critical care of children and adolescents (including families).
              </li>
            </ul>
          </li>
          <li>
            <p className="font-semibold text-gray-900">
              University of Zurich (UZH)
            </p>
            <span className="text-gray-400 text-base">Nov 2020 – March 2021</span>
            <ul className="list-disc ml-5 mt-1 text-base text-gray-700 space-y-1">
              <li>
                Doctoral Researcher in Computational Medicine (R, C++, SQL).
              </li>
            </ul>
          </li>
          <li>
            <p className="font-semibold text-gray-900">
              Centre for Reproducible Science, UZH
            </p>
            <span className="text-gray-400 text-base">July 2019 – January 2021</span>
            <ul className="list-disc ml-5 mt-1 text-base text-gray-700 space-y-1">
              <li>
                Research Assistant &amp; Applied Statistician.
              </li>
            </ul>
          </li>
          <li>
            <p className="font-semibold text-gray-900">
              Institute of Mathematics, UZH
            </p>
            <span className="text-gray-400 text-base">Feb 2019 – May 2019</span>
            <ul className="list-disc ml-5 mt-1 text-base text-gray-700 space-y-1">
              <li>
                Statistics &amp; Probability Teaching Assistant (Spring 2019), with Assoc. Prof Reinhard Furrer.
              </li>
            </ul>
          </li>
          <li>
            <p className="font-semibold text-gray-900">
              Dept. of Economics, UZH
            </p>
            <span className="text-gray-400 text-base">Jan 2019</span>
            <ul className="list-disc ml-5 mt-1 text-base text-gray-700 space-y-1">
              <li>
                Microeconomics &amp; Statistics Research Assistant (Assoc. Prof Pietro Biroli) — Data analysis and visualisation in R on mother &amp; child outcomes after treatment for maternal depression in Pakistan.
              </li>
            </ul>
          </li>
          <li>
            <p className="font-semibold text-gray-900">
              Swiss Tropical and Public Health Institute
            </p>
            <span className="text-gray-400 text-base">Sept 2017 – Dec 2017</span>
            <ul className="list-disc ml-5 mt-1 text-base text-gray-700 space-y-1">
              <li>
                Health Economics Trainee (Health Systems Support): Exploratory data analysis of claims data for marketing and business planning (Tanzania).
              </li>
            </ul>
          </li>
          <li>
            <p className="font-semibold text-gray-900">
              World Health Organization (WHO)
            </p>
            <span className="text-gray-400 text-base">May 2016 – Sept 2016</span>
            <ul className="list-disc ml-5 mt-1 text-base text-gray-700 space-y-1">
              <li>
                Intern in Economic Evaluation and Analysis – Sustainable Development Goals.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};
