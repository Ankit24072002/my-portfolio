const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "MAKAUT University",
    date: "2022 – 2026"
  },
  {
    degree: "Higher Secondary (12th)",
    school: "Rishra Vidyapith School",
    date: "2020 – 2022"
  },
  {
    degree: "Secondary (10th)",
    school: "Rishra St.Thomas Academy",
    date: "2018 – 2020"
  }
];

export default function Education() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 pl-4 border-blue-600 dark:border-blue-400">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-sm">{edu.school} | {edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
