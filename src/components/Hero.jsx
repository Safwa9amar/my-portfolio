import Image from "next/image";
export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center py-20 h-screen" style={{ marginTop: "64px" }}>
      <Image src="/images/profile.png" alt="Hamza Hassani" width={400} height={400} className="aspect-square rounded-full mb-6 border-4 border-teal-400 shadow-lg" />
      <h1 className="text-4xl font-bold text-teal-300 mb-2">Hassani Hamza</h1>
      <h2 className="text-xl text-gray-300 mb-6">Web, App & React Native Developer</h2>
      <div className="flex gap-4 justify-center mb-8">
        <a href="#contact" className="px-6 py-2 bg-teal-600 text-white rounded shadow hover:bg-teal-500 transition">Contact Me</a>
        <a href="/cv.pdf" download className="px-6 py-2 bg-gray-800 text-teal-300 rounded shadow hover:bg-gray-700 transition flex items-center gap-2">
          <i className="fa fa-download" /> Download CV
        </a>
      </div>
      <p className="max-w-xl text-gray-400 mx-auto">Building beautiful, scalable web and mobile experiences. Passionate about design, code, and cosmic creativity.</p>
    </section>
  );
}
