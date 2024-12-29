const Image = ({ src, alt = 'image', className = '' }) => {
  return (
    <img src={src} alt={alt} className={`image ${className}`} />
  );
};

export default Image;

// how to use
// import Image from '../components/ui/CustomImage';
// import logo from '../assets/logo1.svg';
// <Image src={logo} className="" />
