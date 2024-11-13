const Image = ({ src, alt = 'image', className = '' }) => {
  return (
    <img src={src} alt={alt} className={`image ${className}`} />
  );
};

export default Image;
