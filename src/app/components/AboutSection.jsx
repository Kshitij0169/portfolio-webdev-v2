"use client";
import React, {useState, useTransition} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';


const TAB_DATA = [
  {
    title:"Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 list-disc pl-2">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Angular.js</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>MongoDB</li>
        <li>Tailwind CSS</li>
        <li>UX Design</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Front end Designer/Developer Intern <b>at</b></li>
        <li>Magick Box Media</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Engineering in Computer Engineering, University of Mumbai</li>
        <li>Master of Science in Information Systems, Northeastern University</li>
      </ul>
    )
  },
];


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
   });
};

  return (
    <section className="text-white">
        <div  className="md:grid md:grid-cols-2 gap-6 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image
                src={"/images/about.png"}
                alt="about image"
                width={500}
                height={500}
             />
             <div className="mt-4 md:mt-0 test-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lgn:text-lg">   
                    I am a fervent full-stack developer with a relentless passion for learning and building new skills. 
                    Proficient in React, Node.js, Express, JavaScript, HTML, CSS, and Git, I constantly seek opportunities to expand my technical toolkit. 
                    Beyond my technical prowess, I prioritize effective teamwork, clear communication, and creative problem-solving. 
                    Thriving in the ever-evolving tech landscape, I am committed to delivering high-quality code and crafting exceptional user experiences. 
                </p>
                <div className="flex flex-row mt-8 ">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> 
                      {" "} Skills {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> 
                      {" "} Experience {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> 
                    {" "} Education {" "}
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
             </div>
        </div>
    </section>
  )
}

export default AboutSection