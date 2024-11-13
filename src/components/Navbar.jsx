import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/ui/CustomImage';
import logo from '../assets/maharun_logo.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled ? 'h-12 p-2' : 'h-16 p-4'
      } bg-white/20 backdrop-blur-md sticky top-0 transition-all duration-300 ease-in-out font-poppins`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 overflow-x-auto">
        <Link to="/" className="text-gray-800 text-xl md:text-2xl font-bold">
          <Image src={logo} className="h-8" />
        </Link>
        <div className="flex space-x-4 flex-nowrap">
          <NavItem to="/" text="Home" />
          <NavItem to="/projects" text="Projects" />
          <NavItem to="/blogs" text="Blogs" />
          <NavItem to="/skills" text="Skills" />
          <NavItem to="/about" text="About Me" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text }) => (
  <Link
    to={to}
    className="text-gray-800 text-sm md:text-base px-3 py-1 md:px-5 md:py-2 rounded-3xl hover:bg-gray-800/30 hover:text-white transition duration-300"
  >
    {text}
  </Link>
);

export default Navbar;
