import { useEffect, useState } from 'react';
import { SiReact, SiNodedotjs, SiNextdotjs, SiGo, SiPython } from 'react-icons/si'; // Import additional icons as needed

// Map of technology names to corresponding icons
const iconMap = {
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "Next.js": SiNextdotjs,
  "Go": SiGo,
  "Python": SiPython
};

const ProjectCard = ({ name, description, link, image, tags, hideLink }) => (
  <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-4">
    {/* Textual Details */}
    <div className="flex-grow">
      <h2 className="text-2xl font-bold">{name}</h2>
      {/* Technology Tags */}
      <div className="flex flex-wrap mt-4 gap-2">
        {tags.map((tag, index) => {
          const IconComponent = iconMap[tag];
          return IconComponent ? (
            <div
              key={index}
              className="relative group flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              <IconComponent className="text-white w-6 h-6" />
              <span className="absolute bottom-full mb-1 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                {tag}
              </span>
            </div>
          ) : null;
        })}
      </div>
      <p className="text-gray-300 mb-2">{description}</p>
      
      
      {/* Conditionally display the link text based on hideLink */}
      <a href={link} className="text-gray-400 hover:text-gray-200" target="_blank" rel="noopener noreferrer">
        {hideLink ? "View project" : link} <span aria-hidden="true">↗</span>
      </a>
    </div>
    
    {/* Image Section */}
    <div className="w-full md:w-1/3">
      <img src={image} alt={`${name} UI`} className="w-full rounded-lg shadow-md" />
    </div>
  </div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('server_data/projects.json') // fetch from the public folder
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load projects data');
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-black">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
