import Button from "@/components/Button";
import { MdOutlineArrowBack } from "react-icons/md";
export default function SpectraFind() {
  return (
    <main className="text-black dark:text-white">
       
      <header className=" text-white py-10 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-2">📱 SpectraFind – Mobile Finder App</h1>
        <p className="text-lg text-white">A full-stack app to compare, buy, and sell mobile phones</p>
      </header>
      
      <section className="max-w-3xl mx-auto mt-10 mb-10 px-4 py-8  rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2"><span>🔗</span>Live Demo</h2>
        <a href="https://spectrafind.netlify.app/" target="_blank" className="text-black dark:text-white hover:underline break-all">https://spectrafind.netlify.app/</a>
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2 mt-8"><span>💻</span>Source Code</h2>
        <a href="https://github.com/Safwa9amar/SpectraFind" target="_blank" className="text-black dark:text-white hover:underline break-all">https://github.com/Safwa9amar/SpectraFind</a>
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2 mt-8"><span>🚀</span>Tech Stack</h2>
        <ul className="list-disc ml-6 text-black dark:text-white space-y-1">
          <li><span className="font-semibold text-black dark:text-white">Frontend Web:</span> Next.js 14</li>
          <li><span className="font-semibold text-black dark:text-white">Mobile:</span> React Native (Android)</li>
          <li><span className="font-semibold text-black dark:text-white">Backend:</span> Prisma ORM, Node.js</li>
          <li><span className="font-semibold text-black dark:text-white">Real-Time:</span> Socket.io (Chat)</li>
          <li><span className="font-semibold text-black dark:text-white">Database:</span> PostgreSQL</li>
        </ul>
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2 mt-8"><span>🧠</span>Project Idea</h2>
        <p className="text-black dark:text-white">The idea was to build a platform where users can compare mobile phones by features and prices, view listings, and even buy/sell phones with real-time chat support.</p>
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2 mt-8"><span>🧩</span>Step-by-Step Breakdown</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-1">1. Project Initialization</h3>
            <p className="text-black dark:text-white">Set up the project with <span className="bg-black text-white px-2 py-1 rounded">Next.js</span> and <span className="bg-black text-white px-2 py-1 rounded">React Native CLI</span>. Installed Prisma and initialized the database schema.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-1">2. Backend API with Prisma</h3>
            <p className="text-black dark:text-white">Defined models for <span className="bg-black text-white px-2 py-1 rounded">Mobile</span>, <span className="bg-black text-white px-2 py-1 rounded">User</span>, <span className="bg-black text-white px-2 py-1 rounded">Listing</span>, and <span className="bg-black text-white px-2 py-1 rounded">Chat</span>. Generated endpoints for search, create, update, and delete operations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-1">3. Mobile Comparison Logic</h3>
            <p className="text-black dark:text-white">Implemented advanced filtering based on RAM, storage, brand, and price range with smooth UI in both web and mobile.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-1">4. Authentication</h3>
            <p className="text-black dark:text-white">Used JWT-based authentication system for secure user login and registration.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-1">5. Real-Time Chat</h3>
            <p className="text-black dark:text-white">Integrated <span className="bg-black text-white px-2 py-1 rounded">Socket.io</span> for real-time buyer-seller chat with auto-scroll, read receipts, and typing indicators.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-1">6. Responsive UI & UX</h3>
            <p className="text-black dark:text-white">Built a minimalist and clear design using Tailwind CSS for Web and custom styling for the React Native version.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-1">7. Deployment</h3>
            <p className="text-black dark:text-white">Deployed the frontend to <span className="bg-black text-white px-2 py-1 rounded">Netlify</span> and backend to <span className="bg-black text-white px-2 py-1 rounded">Railway</span> for seamless integration.</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2 mt-8"><span>🖼️</span>Logo & Branding</h2>
        <p className="text-black dark:text-white">The logo is minimal, outlined, and clean – reflecting a modern and professional tech product.</p>
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2 mt-8"><span>📌</span>Final Thoughts</h2>
        <p className="text-black dark:text-white">This was a great learning experience, especially combining real-time features, UI/UX design, and full-stack deployment. Feel free to explore, contribute, or use the project as inspiration.</p>
      </section>
      <footer className="text-center py-8 text-black dark:text-white text-sm">
        Made with <span className="text-black dark:text-white">❤️</span> by <a href="https://github.com/Safwa9amar" target="_blank" className="text-black dark:text-white hover:underline">Safwa9amar</a> · SpectraFind 2025
      </footer>
    </main>
  );
}
