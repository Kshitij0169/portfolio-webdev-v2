"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return( 
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold " >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                    Hey, I&apos;m{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        "Kshitij",
                        1000,
                        "a Developer",
                        1100,
                        "a UI/UX Designer",
                        1100,
                        "a Gymrat",
                        1100
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ABD7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="sm:place-content-center">
                    <button className="uibtn w-full sm:w-fit rounded-full">
                        <span>Download Resume</span> 
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[300px] lg:w-[300px] relative">
                    <Image
                    src="/images/hero.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    height={300}
                    width={300}
                    />
                </div>
            </div> 
        </div> 
    </section>
    );
};

export default HeroSection; 