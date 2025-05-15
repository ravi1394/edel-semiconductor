import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './HeroSection.css';

const HeroSection = () => {
  const slides = [
    {
      heading: 'Front End Design and Verification',
      subtext: 'Delivering RTL to GDSII excellence with precision logic and verification expertise.',
    },
    {
      heading: 'Foundation IP Design and Automation',
      subtext: 'Optimizing IP blocks with high-quality design methodologies and automation workflows.',
    },
    {
      heading: 'Design for Testability (DFT)',
      subtext: 'Improving test coverage and manufacturability with cutting-edge DFT techniques.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <header className="hero-section">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="overlay">
              <h1>{slide.heading}</h1>
              <p>{slide.subtext}</p>
              <button>Talk to an Expert</button>
            </div>
          </div>
        ))}
      </Slider>
    </header>
  );
};

export default HeroSection;