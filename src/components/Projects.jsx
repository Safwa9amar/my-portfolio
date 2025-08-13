import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import Image from "next/image";
export default function Projects() {

  return (
    <section id="projects" className="max-w-4xl mx-auto py-16 px-4">
      <h3 className="text-2xl font-semibold text-teal-300 mb-6">Projects</h3>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {['All','Web','Android','iOS','Design','Other'].map(tag => (
          <button 
            key={tag} 
            className="cursor-pointer px-4 py-2 rounded-lg bg-gray-800 text-teal-300 font-semibold hover:bg-gray-700 transition-colors" 
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>
     
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
