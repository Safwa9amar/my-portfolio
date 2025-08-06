export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 left-0 z-50 bg-gray-900 dark:bg-[#181824] shadow transition duration-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-3">
        <span className="text-2xl font-bold text-teal-300 tracking-wide">Portfolio</span>
        <ul className="hidden md:flex gap-4">
          <li><a href="#hero" className="px-3 py-2 rounded text-teal-300 hover:bg-teal-700 hover:text-white transition">Home</a></li>
          <li><a href="#about" className="px-3 py-2 rounded text-teal-300 hover:bg-teal-700 hover:text-white transition">About</a></li>
          <li><a href="#projects" className="px-3 py-2 rounded text-teal-300 hover:bg-teal-700 hover:text-white transition">Projects</a></li>
          <li><a href="#experience" className="px-3 py-2 rounded text-teal-300 hover:bg-teal-700 hover:text-white transition">Experience</a></li>
          <li><a href="#contact" className="px-3 py-2 rounded text-teal-300 hover:bg-teal-700 hover:text-white transition">Contact</a></li>
          <li><a href="#blogs" className="px-3 py-2 rounded text-teal-300 hover:bg-teal-700 hover:text-white transition">Blogs</a></li>
        </ul>
      </div>
    </nav>
  );
}
