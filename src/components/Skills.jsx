const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Angular",
  "Git", "Linux", "MongoDB", "MySQL", "C", "Java", "Python"
];

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-700 rounded-full text-sm font-medium shadow">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
