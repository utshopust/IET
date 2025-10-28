// import { useState, useEffect, useRef } from "react";
// import { PORTFOLIO_PROJECTS } from "../constants";

// const Portfolio = () => {
//   const [activeId, setActiveId] = useState(null);
//   const containerRef = useRef(null);

//   // Detect click outside to close overlays
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (containerRef.current && !containerRef.current.contains(event.target)) {
//         setActiveId(null);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   // Toggle overlay on tap / click
//   const handleToggle = (id) => {
//     setActiveId((prevId) => (prevId === id ? null : id));
//   };

//   return (
//     <section className="max-w-7xl mx-auto border-b-2" id="portfolio">
//       <div className="mb-20">
//         <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">
//           portfolio
//         </h2>

//         <div
//           ref={containerRef}
//           className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {PORTFOLIO_PROJECTS.map((project) => (
//             <div
//               key={project.id}
//               className="group relative overflow-hidden rounded-3xl mx-4 cursor-pointer"
//               onClick={() => handleToggle(project.id)}
//             >
//               {/* Project Image */}
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Overlay with fade, zoom & dark background */}
//               <div
//                 className={`
//                   absolute inset-0 flex flex-col items-center justify-center
//                   backdrop-blur-sm bg-black/60 text-white transition-all duration-500 ease-in-out
//                   ${activeId === project.id ? "opacity-100 scale-100" : "opacity-0 scale-95"}
//                   md:opacity-0 md:scale-95 md:group-hover:opacity-100 md:group-hover:scale-100
//                 `}
//               >
//                 <h3 className="mb-2 text-xl text-orange-300 font-extrabold">
//                   {project.name}
//                 </h3>
//                 <p className="mb-12 p-4 text-center">{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;



import { useState, useEffect, useRef } from "react";
import { PORTFOLIO_PROJECTS } from "../constants";

const Portfolio = () => {
  const [activeId, setActiveId] = useState(null);
  const containerRef = useRef(null);

  // Detect click outside to close overlays
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveId(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Toggle overlay on tap / click
  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="max-w-7xl mx-auto border-b-2" id="portfolio">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">
          portfolio
        </h2>

        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl mx-4 cursor-pointer"
              onClick={() => handleToggle(project.id)}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay with Fade-Up Animation */}
              <div
                className={`
                  absolute inset-0 flex flex-col items-center justify-center text-center
                  backdrop-blur-sm bg-black/70 text-white transition-all duration-500 ease-in-out
                  transform
                  ${
                    activeId === project.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                  group-hover:opacity-100 group-hover:translate-y-0
                `}
              >
                <h3 className="mb-2 text-xl text-orange-300 font-extrabold">
                  {project.name}
                </h3>
                <p className="px-4 text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
