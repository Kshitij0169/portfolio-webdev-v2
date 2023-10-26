"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

const HeroSection = () => {
  const saveFile = () => {
    saveAs(
      "https://www.dropbox.com/scl/fi/2ubt2jp1tld49zwkeah3h/Kshitij_Tiwari_Resume.pdf?rlkey=q3gi1zfeusmicyxxei1oubrax&dl=0",
      "Kshitij_Tiwari_resume.pdf"
    );
  };

  return (
    <section className="lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-secondary-500">
              Hey, I am{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Kshitij",
                1000,
                "Developer",
                1100,
                "UI/UX Designer",
                1100,
                "Gymrat",
                1100,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ABD7BE] text-base sm:text-lg mb-6 lg:text-xl">
            A current graduate student at Northeastern University, pursuing MS
            in Information Systems. Full-Stack developer with an inclination
            towards Frontend.
          </p>
          <div className="sm:place-content-center">
            <button
              onClick={saveFile}
              className="uibtn w-full sm:w-fit rounded-full"
            >
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[300px] lg:w-[300px] relative">
            <Image
              src="/images/hero.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              height={300}
              width={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
