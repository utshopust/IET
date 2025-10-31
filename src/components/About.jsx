import aboutImage from "../assets/about.webp"
import myImage from "../assets/utsho.webp"
const About = () => {
    return (
        <section
        //  className="max-w-7xl mx-auto border-b-2 mt-20"
          className="relative max-w-7xl mx-auto mt-20 py-4 overflow-hidden
    before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full 
    before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent"
         id="about">
            <h2 className="text-xl lg:text-3xl tracking-tight uppercase text-center mb-12 mx-4">About Us</h2>
            <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
                <div className="mb-8 lg:mb-0">
                    <img src={aboutImage} alt="About Motor Vehicle Engineering" className="w-full h-auto" />
                </div>
                <p className="text-lg lg:text-2xl font-light text-center lg:text-center max-w-5xl mx-auto mt-8">
                    Welcome to IET, Bangladesh’s leading automotive training institute. We are dedicated to shaping the next generation of automotive professionals. Founded with the vision of bridging the gap between industry demands and skilled manpower, we offer world-class training programs designed to meet both local and international standards. We are committed to providing hands-on, practical, and theoretical education in automotive technology. Our mission is simple: to empower our students with the skills, confidence, and knowledge to succeed in a fast-evolving automotive world.
                </p>
                <div className="mt-28 ">
                    <h1 className="text-xl lg:text-3xl tracking-tight uppercase text-center mb-12 mx-4">executive body</h1>
                    <img src={myImage} alt="My Image" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg shadow mx-auto" />
                    <h2 className="font-bold text-3xl text-center mt-5">General Secretary</h2>
                    <h2 className="font-semibold text-xl text-center mt-4">MD. FARUK HASSAN</h2>
                    <h4 className="font-light text-xl text-center mt-1">         Automotive Engineer</h4>
                    <h4 className="font-extralight text-xl text-center mt-1">         GMIAE, India. FISE, India. MSAE, USA. AAE MIMI, UK</h4>
                    

                    
                </div>
            </div>
        </section>
    );
};

export default About;