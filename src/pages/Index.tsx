import TableOfContents from "../components/TableOfContents";

// Use the new uploaded photo (user provided)
const AVATAR = "/lovable-uploads/5493dfe6-c274-4e4f-9c4d-cecdc1debf85.png";

// phase1b logo
const PHASE1B_LOGO = "/lovable-uploads/94a80ecc-3dcd-4c2f-96e1-70416101296c.png";

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
            <span className="block w-64 h-64 rounded-full bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 opacity-80 blur-lg" />
          </div>
          <img
            src={AVATAR}
            alt="Audrey Yeo"
            className="relative z-10 rounded-full border-4 border-white shadow-xl w-64 h-64 object-cover aspect-square animate-fade-in"
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
        </div>
      </section>

      {/* TECH STACK */}
      <section className="flex flex-col items-center mt-5 mb-8 animate-fade-in" id="tech-stack">
        <div className="rounded-3xl glass shadow-xl p-6 bg-white/80 border border-gray-200">
          <h2 className="font-playfair text-2xl font-bold mb-2 text-primary text-center">
            Tech Stack
          </h2>
          {/* Centered Tools and Concepts */}
          <div className="flex flex-col gap-3 items-center justify-center text-center">
            <div>
              <div className="font-semibold text-gray-800 mb-1 text-center">Tools</div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="inline-block bg-gradient-to-r from-pink-200 via-purple-200 to-blue-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-pink-100">
                  R
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

      {/* EDUCATION */}
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

      {/* WORK EXPERIENCE */}
      <section id="work" className="max-w-2xl mx-auto mt-12 w-full px-4">
        <div className="rounded-3xl glass shadow-2xl p-8 bg-white/90 backdrop-blur-2xl border border-gray-200 animate-fade-in">
          <h2 className="font-playfair text-3xl font-bold mb-2 text-primary drop-shadow">
            Work Experience
          </h2>
          <ul className="space-y-4 text-lg">
            {/* New Current Role */}
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
            {/* Hoffman La Roche AG - Update End Date */}
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
            <li>
              <p className="font-semibold text-gray-900">
                Royal Children’s Hospital
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

      {/* PROJECTS */}
      <section id="projects" className="max-w-2xl mx-auto mt-12 w-full px-4 mb-28">
        <div className="rounded-3xl glass shadow-2xl p-8 bg-white/90 backdrop-blur-2xl border border-gray-200 animate-fade-in">
          <h2 className="font-playfair text-3xl font-bold mb-2 text-primary drop-shadow">
            Projects
          </h2>
          <ul className="space-y-4 text-lg">
            {/* phase1b project with logo, link and role */}
            <li className="flex items-center gap-2">
              <img
                src={PHASE1B_LOGO}
                alt="phase1b logo"
                className="w-8 h-8 rounded-lg border border-gray-300 shadow"
                style={{ marginRight: '0.5rem' }}
              />
              <a
                href="https://genentech.github.io/phase1b/main/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline flex items-center gap-1 font-semibold"
              >
                Lead developer for phase1b : <span className="font-normal">A Bayesian Approach to early clinical trials</span>
              </a>
            </li>
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
