import { useLocation } from 'react-router-dom';

const Skills = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/'

  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
  ];

  return (
    <div className={`p-4 ${!isHomePage? 'px-60' : ''}`}>
      <h1 className="text-3xl font-bold mb-4">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{skill.name}</h2>
            <p className="text-gray-600">Level: {skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
