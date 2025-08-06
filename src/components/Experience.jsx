export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto py-16">
      <h3 className="text-2xl font-semibold text-teal-300 mb-6">Experience</h3>
      <div className="border-l-2 border-teal-400 pl-6">
        <div className="mb-8">
          <div className="font-bold text-teal-200">Freelance Web & Mobile App Developer</div>
          <div className="text-gray-300 text-sm mb-2">2023 - Present</div>
          <ul className="list-disc ml-5 text-gray-400">
            <li>Built and deployed cross-platform mobile apps using React Native and Expo.</li>
            <li>Developed dynamic web applications using Next.js 14.</li>
            <li>Integrated Socket.io for real-time features.</li>
            <li>Designed UI/UX in Figma, converted to functional code.</li>
            <li>Integrated APIs and payment gateways like chargily, stripe.</li>
          </ul>
        </div>
        <div className="mb-8">
          <div className="font-bold text-teal-200">Web Developer Intern</div>
          <div className="text-gray-300 text-sm mb-2">2022 - 2023</div>
          <ul className="list-disc ml-5 text-gray-400">
            <li>Assisted in developing responsive websites using HTML, CSS, and JavaScript.</li>
            <li>Collaborated with designers to implement UI/UX designs.</li>
            <li>Participated in code reviews and agile development processes.</li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-teal-200">Computer Science Student</div>
          <div className="text-gray-300 text-sm mb-2">2019 - 2022</div>
          <ul className="list-disc ml-5 text-gray-400">
            <li>Studied core computer science concepts including algorithms, data structures, and software engineering.</li>
            <li>Participated in hackathons and coding competitions.</li>
            <li>Developed personal projects in web development and mobile app development.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
