import { useLocation } from 'react-router-dom';
import CarouselSection from '../components/ui/CarouselSection';
import Image from '../components/ui/CustomImage';
import icpcBigPoster from '../assets/designs/icpc big poster.png';
import icpcSmallPoster from '../assets/designs/icpc small poster.png';
import injpc24Cover from '../assets/designs/injpc24 slides cover page.png';
import injpc24 from '../assets/designs/injpc24.png';
import nirjhorFarewell from '../assets/designs/nirjhor vi farewell.png';
import s17 from '../assets/designs/s17.png';
import s18 from '../assets/designs/s18.png';
import s19 from '../assets/designs/s19.png';
import s20 from '../assets/designs/s20.png';

const AboutMe = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const carouselItems = [
    {
      image: s20,
      title: 'Design S20',
      description: 'Sample design S20.',
    },
    {
      image: nirjhorFarewell,
      title: 'Nirjhor VI Farewell',
      description: 'Poster for Nirjhor VI farewell event.',
    },
    {
      image: s19,
      title: 'Design S19',
      description: 'Sample design S19.',
    },
    
    {
      image: s18,
      title: 'Design S18',
      description: 'Sample design S18.',
    },
    {
      image: s17,
      title: 'Design S17',
      description: 'Sample design S17.',
    },
    {
      image: injpc24,
      title: 'INJPC24',
      description: 'Poster for the INJPC24 event.',
    },
    {
      image: injpc24Cover,
      title: 'INJPC24 Cover Page',
      description: 'Cover page for INJPC24 slides.',
    },
    {
      image: icpcBigPoster,
      title: 'ICPC Big Poster',
      description: 'A poster for the ICPC event.',
    },
    {
      image: icpcSmallPoster,
      title: 'ICPC Small Poster',
      description: 'A smaller version of the ICPC poster.',
    },
  ];

  return (
    <div className={`p-4 ${!isHomePage ? 'px-72' : ''}`}>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-600 mb-4">
        Hi! I am Maharun Afroz, a passionate software developer with a love for solving problems. 
      </p>
      <p className="text-gray-600 mb-4">
        When I’m not coding, I enjoy reading about new tech trends, contributing to open-source projects, 
        and exploring new places.
      </p>
      <p className="text-gray-600 mb-4">
        Feel free to reach out if you have any exciting project ideas or just want to connect!
      </p>

      {/* Carousel Section */}
      <CarouselSection 
        title="Designs" 
        description="Never was a designer. It's just something I like to fiddle around with in my free time, more like a hobby. Here are some designs I volunteered for." 
        items={carouselItems.map((item) => ({
          ...item,
          image: <Image src={item.image} alt={item.title} className="rounded-lg" />,
        }))} 
      />
    </div>
  );
};

export default AboutMe;
