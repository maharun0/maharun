import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CarouselSection Component
const CarouselSection = ({ title, description, items }) => {
  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-section py-8 px-4 md:px-8">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">{title}</h2>

      {/* Optional Description */}
      {description && <p className="text-gray-700 mb-6 text-center md:text-left text-sm md:text-base">{description}</p>}

      {/* Carousel */}
      <div className="carousel-container max-w-full md:max-w-5xl mx-auto">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-1 md:px-2">
              <div className="bg-white shadow-md rounded-lg p-3 md:p-4 h-full flex flex-col items-center justify-center">
                {item.image && (
                  <div className="flex items-center justify-center h-64 md:h-96 w-full">
                    <img
                      src={item.image.props.src}
                      alt={item.image.props.alt || 'carousel image'}
                      className="w-auto h-full object-contain rounded-md"
                    />
                  </div>
                )}
                <h3 className="text-base md:text-lg font-semibold mt-3 md:mt-4 mb-1 md:mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselSection;
