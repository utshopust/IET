// import { HERO_CONTENT } from "../constants";
// const Hero = () => {
//   return (
//     <section className="max-w-7xl mx-auto border-b-2" id="home">
//       <div className="flex flex-col items-center my-20">
//         <h1 className="text-xl lg:text-[5rem] p-2 uppercase font-bold">
//           {HERO_CONTENT.title}
//         </h1>

//         <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
//           {HERO_CONTENT.subtitle}
//         </p>
//         {/* <img
//           src={HERO_CONTENT.image}
//           className="w-full h-[85vh] object-cover rounded-2xl p-2"
//           alt="Hero"
//         /> */}
//         {/* Carousel Start */}
//      <div className="carousel w-full max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
//   {/* Slide 1 */}
//   <div id="slide1" className="carousel-item relative w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
//       className="w-full object-cover h-[500px]"
//       alt="Car Workshop Service"
//     />
//     {/* Overlay Text */}
//     <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
//       <h2 className="text-3xl lg:text-5xl font-bold mb-3">
//         Professional Car Service
//       </h2>
//       <p className="text-sm lg:text-lg max-w-2xl">
//         Get high-quality vehicle repair and maintenance from trusted experts.
//       </p>
//     </div>

//     {/* Navigation Arrows */}
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide4" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">
//         ❮
//       </a>
//       <a href="#slide2" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">
//         ❯
//       </a>
//     </div>
//   </div>

//   {/* Slide 2 */}
//   <div id="slide2" className="carousel-item relative w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//       className="w-full object-cover h-[500px]"
//       alt="Maintenance Services"
//     />
//     <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
//       <h2 className="text-3xl lg:text-5xl font-bold mb-3">
//         Reliable Maintenance
//       </h2>
//       <p className="text-sm lg:text-lg max-w-2xl">
//         Keep your car running smoothly with our expert care and maintenance plans.
//       </p>
//     </div>
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide1" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">
//         ❮
//       </a>
//       <a href="#slide3" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">
//         ❯
//       </a>
//     </div>
//   </div>

//   {/* Slide 3 */}
//   <div id="slide3" className="carousel-item relative w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//       className="w-full object-cover h-[500px]"
//       alt="Auto Detailing"
//     />
//     <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
//       <h2 className="text-3xl lg:text-5xl font-bold mb-3">
//         Premium Auto Detailing
//       </h2>
//       <p className="text-sm lg:text-lg max-w-2xl">
//         Experience a spotless and polished finish with our detailing specialists.
//       </p>
//     </div>
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide2" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">
//         ❮
//       </a>
//       <a href="#slide4" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">
//         ❯
//       </a>
//     </div>
//   </div>

//   {/* Slide 4 */}
//   <div id="slide4" className="carousel-item relative w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//       className="w-full object-cover h-[500px]"
//       alt="Car Wash"
//     />
//     <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
//       <h2 className="text-3xl lg:text-5xl font-bold mb-3">
//         Advanced Car Wash
//       </h2>
//       <p className="text-sm lg:text-lg max-w-2xl">
//         Wash and polish your car with premium products for a lasting shine.
//       </p>
//     </div>
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide3" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">
//         ❮
//       </a>
//       <a href="#slide1" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">
//         ❯
//       </a>
//     </div>
//   </div>
// </div>

//         {/* Carousel End */}
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import Slide1 from "../assets/slide1.webp"
import Slide2 from "../assets/slide2.webp"
import Slide3 from "../assets/slide3.webp"
import Slide4 from "../assets/slide4.webp"

const Hero = () => {
  useEffect(() => {
    let index = 1;
    const totalSlides = 4;

    const interval = setInterval(() => {
      index = index >= totalSlides ? 1 : index + 1;
      const target = document.getElementById(`slide${index}`);
      if (target) {
        // scroll না করে শুধু visible slide পরিবর্তন করবো
        target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto border-b-2" id="home">
      <div className="flex flex-col items-center my-20">
        <h1 className="text-xl lg:text-[5rem] p-2 uppercase font-bold">
          {HERO_CONTENT.title}
        </h1>

        <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
          {HERO_CONTENT.subtitle}
        </p>

        {/* Carousel Start */}
        <div className="carousel w-full max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={Slide1}
              className="w-full object-cover h-[500px]"
              alt="Car Workshop Service"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl lg:text-5xl font-bold mb-3">
                Professional Car Service
              </h2>
              <p className="text-sm lg:text-lg max-w-2xl">
                Get high-quality vehicle repair and maintenance from trusted experts.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">❮</a>
              <a href="#slide2" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={Slide2}
              className="w-full object-cover h-[500px]"
              alt="Maintenance Services"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl lg:text-5xl font-bold mb-3">
                Reliable Maintenance
              </h2>
              <p className="text-sm lg:text-lg max-w-2xl">
                Keep your car running smoothly with our expert care and maintenance plans.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">❮</a>
              <a href="#slide3" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={Slide3}
              className="w-full object-cover h-[500px]"
              alt="Auto Detailing"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl lg:text-5xl font-bold mb-3">
                Premium Auto Detailing
              </h2>
              <p className="text-sm lg:text-lg max-w-2xl">
                Experience a spotless and polished finish with our detailing specialists.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">❮</a>
              <a href="#slide4" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">❯</a>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={Slide4}
              className="w-full object-cover h-[500px]"
              alt="Car Wash"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl lg:text-5xl font-bold mb-3">
                Advanced Car Wash
              </h2>
              <p className="text-sm lg:text-lg max-w-2xl">
                Wash and polish your car with premium products for a lasting shine.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">❮</a>
              <a href="#slide1" className="btn btn-circle bg-white/30 border-none hover:bg-white/50 text-white">❯</a>
            </div>
          </div>
        </div>
        {/* Carousel End */}
      </div>
    </section>
  );
};

export default Hero;
