import Image from '../components/ui/CustomImage';
import avatar from '../assets/avatar.jpeg';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';

const Home = () => (
  <div className="min-h-screen flex flex-col items-center py-6 px-4 space-y-6">
    {/* Hero Section */}
    <div className="p-4 max-w-md text-center">
      <Image
        src={avatar}
        alt="Profile"
        className="w-20 h-20 rounded-full border-4 border-purple-500/30 mb-4 mx-auto"
      />
      <h1 className="text-3xl font-bold mb-1">Maharun Afroz</h1>
      <p className="text-gray-600 mb-2">Software Developer | Problem solver</p>
      <SocialLinks />
    </div>

    {/* Sections */}
    {['projects', 'blogs', 'skills', 'about'].map((id) => (
      <section key={id} id={id} className="w-full max-w-4xl py-4 px-2">
        {id === 'projects' && <Projects />}
        {id === 'blogs' && <Blogs />}
        {id === 'skills' && <Skills />}
        {id === 'about' && <AboutMe />}
      </section>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="flex space-x-4 mt-4 justify-center">
    {[
      { href: 'https://github.com/maharun0', icon: 'fab fa-github', label: 'GitHub' },
      { href: 'https://www.linkedin.com/in/maharun/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
      { href: 'https://x.com/maharun0', icon: 'fab fa-twitter', label: 'Twitter' },
    ].map(({ href, icon, label }) => (
      <a key={label} href={href} aria-label={label} className="text-gray-600 hover:text-gray-900">
        <i className={`${icon} fa-lg`}></i>
      </a>
    ))}
  </div>
);

export default Home;
