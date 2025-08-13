import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiEye, FiArrowRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    image,
    tags,
    tech,
    status,
    githubUrl,
    liveUrl,
    previewUrl
  } = project;

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
      {/* Image Container */}
        <Image
          src={image} 
          width={200} 
          height={200} 
          className="mx-auto my-5" 
          alt={title} 
        />
      <div className="relative overflow-hidden">
        {/* Status Badge */}
        {status && (
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              status === 'Completed' ? 'bg-green-600 text-white' :
              status === 'In Progress' ? 'bg-yellow-600 text-white' :
              'bg-blue-600 text-white'
            }`}>
              {status}
            </span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h4 className="font-bold text-xl text-teal-200 mb-3 group-hover:text-teal-100 transition-colors">
          {title}
        </h4>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full bg-teal-700 text-xs text-white font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="text-sm text-teal-400 mb-6">
          <span className="font-semibold">Tech:</span> {tech}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {previewUrl && (
            <Link 
              href={previewUrl}
              className="text-xs group/btn flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <FiEye className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
              Preview
              <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
          )}
          
          {liveUrl && (
            <Link 
              href={liveUrl}
              target="_blank"
              className="text-xs group/btn flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <FiExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
              Live Demo
              <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
          )}
          
          {githubUrl && (
            <Link 
              href={githubUrl}
              className="text-xs group/btn flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <FiGithub className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
              Code
              <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
          )}
        </div>

        {/* Alternative: Single Primary Button with Dropdown */}
        {!previewUrl && !liveUrl && !githubUrl && (
          <div className="relative group/dropdown">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              <span>View Project</span>
              <FiArrowRight className="w-4 h-4 group-hover/dropdown:rotate-90 transition-transform duration-200" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 transform translate-y-2 group-hover/dropdown:translate-y-0">
              <div className="p-2 space-y-1">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  View Details
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  Download Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 