import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-16">
      <h3 className="text-2xl font-semibold text-teal-300 mb-6">About Me</h3>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <p className="text-gray-300 mb-4">Versatile developer with <strong>2+ years</strong> of experience in building responsive and dynamic <strong>web and mobile applications</strong>. Skilled in both frontend and backend development, with a focus on <strong>React Native, Next.js 14, Prisma ORM</strong>, and scalable UI/UX. Passionate about intuitive design and contributing to innovative projects.</p>
          <div className="flex gap-4 mb-4">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={32} height={32} alt="React" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width={32} height={32} alt="Next.js" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width={32} height={32} alt="Node.js" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width={32} height={32} alt="MySQL" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width={32} height={32} alt="Figma" />
          </div>
          <div>
            <div className="mb-2 text-gray-400 flex justify-between">React Native <span>90%</span></div>
            <div className="w-full h-2 bg-gray-700 rounded-full mb-2"><div className="h-2 bg-teal-400 rounded-full" style={{ width: "90%" }} /></div>
            <div className="mb-2 text-gray-400 flex justify-between">Next.js <span>85%</span></div>
            <div className="w-full h-2 bg-gray-700 rounded-full mb-2"><div className="h-2 bg-teal-400 rounded-full" style={{ width: "85%" }} /></div>
            <div className="mb-2 text-gray-400 flex justify-between">Node.js <span>80%</span></div>
            <div className="w-full h-2 bg-gray-700 rounded-full mb-2"><div className="h-2 bg-teal-400 rounded-full" style={{ width: "80%" }} /></div>
            <div className="mb-2 text-gray-400 flex justify-between">UI/UX Design <span>75%</span></div>
            <div className="w-full h-2 bg-gray-700 rounded-full mb-2"><div className="h-2 bg-teal-400 rounded-full" style={{ width: "75%" }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
