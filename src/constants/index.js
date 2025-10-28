import hero from "../assets/hero.webp";
import kitchenImage from "../assets/kitchen.webp";
import bathroomImage from "../assets/bathroom.webp";
import livingRoomImage from "../assets/living-room.webp";

import portfolio1 from "../assets/portfolio1.webp";
import portfolio2 from "../assets/portfolio2.webp";
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "Motor Vehicle Engineering",
  subtitle: "Reimagine Your Space with Expert Renovation Services",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "✨ Expert Diagnostics and Repair",
    description:
      "Precision Service for Your Vehicle. We provide comprehensive services from routine maintenance to complex repairs, ensuring your vehicle is running at peak performance. Our state-of-the-art facility is equipped to handle all major makes and models.",
    image: kitchenImage,
    alt: "✨ Expert Diagnostics and Repair",
  },
  {
    title: "🔧 Full-Service Mechanical Bay",
    description:
      "Quality Repairs You Can Trust. From tire service and wheel alignment to undercarriage inspections and mechanical overhauls, our dedicated bays and professional equipment ensure high-quality workmanship for every service we perform.",
    image: bathroomImage,
    alt: "🔧 Full-Service Mechanical Bay",
  },
  {
    title: "💻 Advanced Software Tuning and Coding",
    description:
      "Optimizing Performance with Technology. Our technicians use the latest diagnostic tools and specialized software to perform advanced coding, tuning, and system resets, unlocking your car's true potential and addressing electronic issues with precision.",
    image: livingRoomImage,
    alt: "💻 Advanced Software Tuning and Coding",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Engine Air Intake Optimization",
    description:
      "Breathe Easy, Drive Hard. A high-flow air filter is critical for performance and engine health. We provide and install top-tier intake systems designed to improve horsepower, torque, and overall engine efficiency.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Routine Maintenance & Service",
    description:
      "The Spark of Reliability. Don't overlook the essentials. Our routine maintenance services, including professional spark plug replacement, ignition checks, and thorough inspections, keep your engine starting strong and running smoothly.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Tire Sales & Expert Fitting",
    description:
      "Your Connection to the Road. The right tires are paramount for safety and performance. We offer a comprehensive range of seasonal and performance tires, complete with expert fitting, balancing, and alignment services.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Custom Vehicle Lighting & Aesthetics",
    description:
      "Bold Looks, Enhanced Visibility. Give your vehicle a distinctive, aggressive edge with professional lighting upgrades. We specialize in custom headlight and exterior lighting installations that stand out both day and night.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Precision Performance Tuning",
    description:
      "Mastering the Mechanics. We focus on the fine-tuned details that deliver maximum performance and reliability. From advanced suspension systems to essential fluid dynamics, our expert technicians ensure every component operates at its peak.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Premium Alloy Wheels & Rims",
    description:
      "Style Meets Strength. Upgrade your ride's aesthetic and handling with our selection of high-quality alloy wheels. We stock, fit, and balance a wide range of premium rims, combining durability with head-turning design.",
    image: portfolio6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Hear what our clients have to say about their experiences with Motor Vehicle Engineering. We take pride in our work and are committed to delivering top-notch Vehicle services.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Car-owner",
      review:
        "Motor Vehicle Engineering transformed  into a modern masterpiece. The team was professional, attentive to our needs, and delivered beyond our expectations. We couldn't be happier with the results!",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Car-owner",
      review:
        "My Car renovation was seamless, thanks to Motor Vehicle Engineering. They took care of everything from design to execution, and the attention to detail was impeccable. Highly recommended!",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Car-owner",
      review:
        "Motor Vehicle Engineering helped us create the perfect Car. Their creativity and craftsmanship turned our Car into a beautiful Masterpiece. It's now our favorite vehicle.",
      image: user3,
    },
    {
      name: "David Lee",
      title: "Car-owner",
      review:
        "The Car update exceeded our expectations. Motor Vehicle Engineering team was skilled and communicative, ensuring a smooth renovation process. The new design has brought a fresh, modern look to our vehicle.",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "Car-owner",
      review:
        "From start to finish, Motor Vehicle Engineering was a pleasure to work with. They listened to our vision and brought it to life with expert craftsmanship. my vehicle  is now a stylish and functional Automobile.",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Car-owner",
      review:
        "Motor Vehicle Engineering did an amazing job on our Car conversion. They created a cozy, multi-functional space that our family loves. The team was professional and delivered on time and within budget.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we ll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@vastuspaze.com",
  },
  address: {
    label: "Address",
    value: "1234 Renovation Ave, Suite 100, Your City, ST 56789",
  },
};
