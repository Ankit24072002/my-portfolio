import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const projects = [
  {
    title: "Spotify Clone",
    tech: [<FaHtml5 />, <FaCss3Alt />],
    description: "A visually rich Spotify homepage clone using HTML & CSS.",
    link: "#",
  },
  {
    title: "Amazon Clone",
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    description: "Simulates Amazon product listing and layout using JS.",
    link: "#",
  },
  {
    title: "Netflix Clone",
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    description: "A clone of Netflix UI featuring grid layouts and modals.",
    link: "#",
  },
  {
    title: "Scientific Calculator",
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    description: "Fully functional calculator using vanilla JavaScript.",
    link: "#",
  },
  {
    title: "Portfolio + Chatbot",
    tech: [<FaReact />],
    description: "Personal portfolio integrated with a simple chatbot using React.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex gap-2 text-xl text-blue-600 dark:text-blue-400 mb-3">
                {project.tech.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block mt-auto text-blue-600 dark:text-blue-400 underline text-sm hover:text-blue-800"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
