
import React from 'react';

const AVATAR = "/lovable-uploads/5493dfe6-c274-4e4f-9c4d-cecdc1debf85.png";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-5 pt-16 sm:pt-28" id="about">
      <div className="relative">
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
            objectPosition: "center 30%"
          }}
        />
      </div>
      <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-gray-900 drop-shadow mb-2 animate-fade-in tracking-tight">
        Audrey Yeo
      </h1>
      <div className="text-lg sm:text-xl text-gray-700 font-medium max-w-2xl text-center animate-fade-in">
        <span className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent font-bold">
          Research Statistician and Software Engineer, BSc, MSc, RN, M Nursing
        </span>
      </div>
    </section>
  );
};
