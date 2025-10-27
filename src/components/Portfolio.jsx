import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../constants";

const Portfolio = () => {
  // Track which project is currently "tapped" on mobile
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto border-b-2" id="portfolio">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">
          portfolio
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl mx-4 cursor-pointer"
              onClick={() => handleToggle(project.id)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay section */}
              <div
                className={`
                  absolute inset-0 flex flex-col items-center justify-center
                  backdrop-blur-lg transition-opacity duration-500
                  text-white
                  ${activeId === project.id ? "opacity-100" : "opacity-0"} 
                  md:opacity-0 md:group-hover:opacity-100
                `}
              >
                <h3 className="mb-2 text-xl text-orange-300 font-extrabold">
                  {project.name}
                </h3>
                <p className="mb-12 p-4 text-center">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
