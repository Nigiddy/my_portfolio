import { FaGithub, FaJs, FaNodeJs, FaReact, FaPython, FaAws, FaDatabase } from "react-icons/fa";
import Image from "next/image";

const projects = [
{
  title: "Mpesa-Based WiFi Billing System",
  description: "A billing system that integrates Mpesa for seamless WiFi payments.",
  techStack: [FaJs, FaNodeJs, FaReact, FaDatabase],
  image: "/images/mpesa-wifi.jpg",
  repoLink: "https://github.com/Nigiddy/Mpesa_Based-WiFi-Billing-System"
},
// Add more projects here
];

export default function Projects() {
return (
  <section className="w-full py-12 bg-white dark:bg-black transition-colors">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">Projects</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="w-full h-40 relative overflow-hidden rounded-md">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
            <div className="flex items-center gap-3 mt-3">
              {project.techStack.map((Icon, idx) => (
                <Icon key={idx} className="text-2xl text-gray-700 dark:text-gray-300" />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-blue-500 dark:text-blue-400 font-medium">
              <FaGithub /> <span>View on GitHub</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
}