"use client";
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTags from './ProjectTags';
import { motion, useInView } from 'framer-motion';
 

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio NextJS",
    description: "NextJS Website",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "UX"],
    git: "https://github.com/Kshitij0169/portfolio-webdev-v2.git",
    preview:"https://portfolio-webdev-v2.vercel.app/"
  },
  {
    id: 2,
    title: "i-Fix e-commerce Website",
    description: "Full-stack React web application",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    git: "https://github.com/Kshitij0169/WebDesignFinal_Group4.git",
    preview:"https://github.com/Kshitij0169/WebDesignFinal_Group4.git"
  },
  {
    id: 3,
    title: "Secrets Web App",
    description: "Web app to share secrets anonymously",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    git: "https://github.com/Kshitij0169/Secrets-App.git",
    preview:"https://github.com/Kshitij0169/Secrets-App.git"
  },
  {
    id: 4,
    title: "Simple Invest Finance app",
    description: "UX design and prototyping",
    image: "/images/projects/3.png",
    tag: ["All", "Figma", "UX"],
    git: "https://github.com/Kshitij0169/Simple-invest.git",
    preview:"https://www.figma.com/file/1zNPAyHfYsbqnMmCNdVQcL/Simple-Invest-Final-Project?type=design&node-id=603%3A237&mode=design&t=gXKQZfg09CKwgtQJ-1"
  },
  {
    id: 5,
    title: "Digimall (Product Website)",
    description: "Full-stack Development",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    git: "https://github.com/Kshitij0169/digi-store.git",
    preview:"https://github.com/Kshitij0169/digi-store.git"
  },

]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null); 
  const isInView = useInView(ref, {once: true}); 

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1},
  };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-4xl font-bold text-white mb-8">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-3 py-6">
        <ProjectTags 
          onClick={handleTagChange} 
          name="All" 
          isSelected={tag === "All"} 
        />
        <ProjectTags 
          onClick={handleTagChange} 
          name="Web" 
          isSelected={tag === "Web"} 
        />
        <ProjectTags 
          onClick={handleTagChange} 
          name="UX" 
          isSelected={tag === "UX"} 
        />
      </div>
      <ul ref={ref} className="lg:grid lg:grid-cols-3 gap-10">
        {filteredProjects.map((project, index) => (
          <motion.li 
          key={index}
          variants={cardVariants} 
          initial="initial" 
          animate={isInView ? "animate" : "initial "}
          transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              gitUrl={project.git}
              previewUrl={project.preview}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  ) 
}

export default ProjectsSection