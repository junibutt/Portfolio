import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

import img5 from "../assets/5.png";
import chatbot from "../assets/chatbot.jpg"
import { motion } from "framer-motion";

const projectsData = [
  {
    image: img1,
    title: "Juni Venture",
    description: "This website offers exclusive adventure travel deals with up to 60% off, showcasing handpicked destinations, member-only offers, and popular travel options across continents in a clean, visually engaging design.",
    linkk: "https://juni-venture.vercel.app/"
  },
  {
    image: img5,
    title: "Monks Estate",
    description: "Monks Estate showcases a sleek design offering real estate services like buying, renting, and property management, with an emphasis on client satisfaction, awards, and personalized property discovery.",
    linkk: "https://monks-estate.vercel.app/#blog"
  },
  {
    image: img2,
    title: "Tutor Hub",
    description: "This website offers flexible, online language learning with expert tutors, personalized lessons, and affordable prices, providing a seamless experience for mastering new languages anytime, anywhere. {Email:user@example.com , Password:user123 }",
    linkk: "https://tutor-hub-taupe.vercel.app/#"
  },
  {
    image: img3,
    title: "Juni Bazaar",
    description: "Junibazar offers a  dynamic e-commerce platform with free shipping, easy returns, and a wide variety of products, from fashion to electronics, prioritizing customer satisfaction.",
    linkk: "https://juni-bazaar-ecommerce-store.vercel.app/"
  },
  {
    image: chatbot,
    title: "AI Chatbot",
    description: "The AI chatbot offers interactive conversations, providing intelligent, context-aware responses. It adapts to various queries, assisting with information, tasks, and engaging discussions for users.",
    linkk: "https://ai-bot-git-main-muhammad-junaids-projects-545d53e5.vercel.app/"
  }
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCards = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" src={project.image} alt={project.title} />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          {/* Render the link as an anchor tag */}
          <div className="flex flex-wrap gap-5">
            <a
              href={project.linkk}
              className="rounded-lg bg-black p-3 text-white hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCards key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
