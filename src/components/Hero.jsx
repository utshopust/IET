import { HERO_CONTENT } from "../constants";
import { useState, useEffect } from "react";
import Slide1 from "../assets/slide1.webp";
import Slide2 from "../assets/slide2.webp";
import Slide3 from "../assets/slide3.webp";
import Slide4 from "../assets/slide4.webp";

const Hero = () => {
  const slides = [
    {
      id: 1,
      img: Slide1,
      title: "Professional Car Service",
      desc: "Get high-quality vehicle repair and maintenance from trusted experts.",
    },
    {
      id: 2,
      img: Slide2,
      title: "Reliable Maintenance",
      desc: "Keep your car running smoothly with our expert care and maintenance plans.",
    },
    {
      id: 3,
      img: Slide3,
      title: "Premium Auto Detailing",
      desc: "Experience a spotless and polished finish with our detailing specialists.",
    },
    {
      id: 4,
      img: Slide4,
      title: "Advanced Car Wash",
      desc: "Wash and polish your car with premium products for a lasting shine.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
    
    className="relative max-w-7xl mx-auto px-4 py-4 overflow-hidden 
before:content-[''] before:absolute before:bottom-0 before:left-0 
before:w-full before:h-px before:bg-gradient-to-r 
before:from-transparent before:via-gray-300 before:to-transparent"

    id="home">
      <div className="flex flex-col items-center my-20">
        <h1 className="text-xl lg:text-[5rem] p-2 uppercase font-bold">
          {HERO_CONTENT.title}
        </h1>

        <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
          {HERO_CONTENT.subtitle}
        </p>

        {/* Carousel Start */}
        <div className="relative w-full max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 relative">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-sm lg:text-lg max-w-2xl">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-5">
            <button
              onClick={prevSlide}
              className="btn btn-circle bg-gray-800/60 text-white hover:bg-gray-700"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-circle bg-gray-800/60 text-white hover:bg-gray-700"
            >
              ❯
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-gray-400/70"
                }`}
              ></button>
            ))}
          </div>
        </div>
        {/* Carousel End */}
      </div>
    </section>
  );
};

export default Hero;
