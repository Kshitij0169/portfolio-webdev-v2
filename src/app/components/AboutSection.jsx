"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Programming Languages/Frameworks",
    id: "languages",
    content: (
      <ul className="grid sm:grid-cols-3 grid-cols-2 list-disc pl-2 mr-4">
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Angular.js</li>
        <li>Next.js</li>
        <li>HTML & CSS</li>
        <li>Tailwind CSS</li>
        <li>UX Design</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid sm:grid-cols-3 grid-cols-2 list-disc pl-2 mr-4">
        <li>SDLC Management</li>
        <li>GTM Strategies</li>
        <li>Stakeholder Management</li>
        <li>Competitior Analysis</li>
        <li>Customer Research</li>
        <li>Change Management</li>
        <li>Design Thinking</li>
        <li>Project Management</li>
        <li>Product Management</li>
        <li>Agile Methodologies</li>
        <li>Backlog Refinement</li>
        <li>Sprint Planning</li>
        <li>Product Roadmapping</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Software Engineer/Quality Assurance Lead Co-op (Jan 2024 - Dec 2024)
        </li>
        <p className="pb-2">
          <b>Commonwealth Financial Network, Waltham MA</b>
        </p>
        <li>Associate Product/Project Manager Intern (Jul 2021 - Aug 2022)</li>
        <p className="pb-2">
          <b>The White Tusk, India</b>
        </p>
        <li>Full Stack Software Engineer Intern (Mar 2020 - June 2021)</li>
        <p className="pb-2">
          <b>The White Tusk, India </b>
        </p>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="pb-2">
          Master of Science in Information Systems,{" "}
          <b>Northeastern University</b>
        </li>
        <li>
          Bachelor of Engineering in Computer Engineering,{" "}
          <b>University of Mumbai</b>{" "}
        </li>
        <p>
          <em>Best Student of Computer Engineering Department, 2018-2022</em>
        </p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certs",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Certified Scrum Product Owner <sup>®</sup>, <b>Scrum Alliance </b>
          <a href="https://bcert.me/shngyylmb">
            <p className="underline hover:no-underline pb-2">
              View Credentials
            </p>
          </a>
        </li>
        <li>
          Design Thinking: Implementing the Process <sup>®</sup>,{" "}
          <b>LinkedIn Learning </b>
          <a href="https://www.linkedin.com/learning/certificates/a8181d58092755f67a6bf89b454324cb5eec5533ef8da9af56842297674f8d6d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B3C449oSvQyKbsdkqAIZBcw%3D%3D">
            <p className="underline hover:no-underline">View Credentials</p>
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-6 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about.png"}
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 test-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lgn:text-lg">
            About Graduate in Information Systems at Northeastern University
            with experience in product development, project management, and
            software engineering. I have led cross-functional teams on
            large-scale projects, optimized processes for efficiency, and
            collaborated with stakeholders to deliver user-focused solutions.
            With a strong technical foundation in React, Python, JavaScript, and
            Next.js, combined with a passion for leveraging data to drive
            decisions, I thrive in dynamic, fast-paced environments. I am eager
            to bring my skills to a role where I can contribute to impactful
            products while continuing to grow and learn.
          </p>
          <div className="flex flex-row mt-8 flex-wrap">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages/Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certs")}
              active={tab === "certs"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 min-h-full">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
