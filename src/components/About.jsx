import aboutImage from "../assets/about.webp"
const About = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
            <h2 className="text-xl lg:text-3xl tracking-tight uppercase text-center mb-12 mx-4">About</h2>
            <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
                <div className="mb-8 lg:mb-0">
                    <img src={aboutImage} alt="About Motor Vehicle Engineering" className="w-full h-auto" />
                </div>
                <p className="text-lg lg:text-2xl font-light text-center lg:text-center max-w-5xl mx-auto mt-8">
                    Welcome to IET, Bangladesh’s leading automotive training institute. We are dedicated to shaping the next generation of automotive professionals. Founded with the vision of bridging the gap between industry demands and skilled manpower, we offer world-class training programs designed to meet both local and international standards. We are committed to providing hands-on, practical, and theoretical education in automotive technology. Our mission is simple: to empower our students with the skills, confidence, and knowledge to succeed in a fast-evolving automotive world.
                </p>
            </div>
        </section>
    );
};

export default About;