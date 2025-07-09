import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-10 text-gray-600 dark:text-gray-300">
          I’d love to hear from you — whether it's a project, opportunity, or just a hello!
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center gap-6 max-w-md mx-auto transform transition duration-300 hover:scale-105">
          <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300 cursor-pointer">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:kumaranikant24@gmail.com"
              className="text-lg font-medium hover:underline"
            >
              kumaranikant24@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300 cursor-pointer">
            <FaPhone className="text-xl" />
            <span className="text-lg font-medium">+91 7439907360</span>
          </div>
        </div>
      </div>
    </section>
  );
}
