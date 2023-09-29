"use client";
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTags from './ProjectTags';

const projectsData = [
  {
    id: 1,
    title: "i-Fix e-commerce Website",
    description: "Full-stack React web application",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    git: "https://github.com/Kshitij0169/WebDesignFinal_Group4.git",
    preview:"/"
  },
  {
    id: 2,
    title: "Secrets Web App",
    description: "Web app to share secrets anonymously",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    git: "https://github.com/Kshitij0169/Secrets-App.git",
    preview:"/"
  },
  {
    id: 3,
    title: "Simple Invest Finance app",
    description: "UX design and prototyping",
    image: "/images/projects/3.png",
    tag: ["All", "Figma", "UX"],
    git: "https://github.com/Kshitij0169/Simple-invest.git",
    preview:"/"
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    < >
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
    <div className="lg:grid lg:grid-cols-3 gap-10">
      {filteredProjects.map((project) => <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imageUrl={project.image} 
        gitUrl={project.git}
        previewUrl={project.preview}
        />)}
    </div>
    </>
  )
}

export default ProjectsSection