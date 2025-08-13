import Button from "@/components/Button";
import Image from "next/image";
import { MdOutlineArrowBack } from "react-icons/md";

export default function SpectraFind() {
  return (
    <main className="text-black dark:text-white">
      {/* Header */}
      <header className="text-white py-10 text-center shadow-lg bg-gradient-to-r from-purple-500 to-indigo-600">
        <h1 className="text-3xl font-bold mb-2">📱 SpectraFind – Mobile Finder App</h1>
        <p className="text-lg text-white">
          A full-stack platform to compare, buy, and sell mobile phones with real-time communication
        </p>
      </header>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto mt-10 mb-10 px-4 py-8 rounded-2xl shadow-xl bg-white dark:bg-gray-900">
        {/* Live Demo */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span>🔗</span>Live Demo
        </h2>
        <a
          href="https://spectrafind.netlify.app/"
          target="_blank"
          className="hover:underline break-all"
        >
          https://spectrafind.netlify.app/
        </a>

        <Image className="mx-auto my-10" src={"/images/spectrafind-screenshoot.png"} alt="SpectraFind" width={720} height={200} />
        <div className="grid grid-cols-2 gap-4">
        <Image className="mx-auto my-10" src={"/images/250813_14h08m34s_screenshot.png"} alt="SpectraFind" width={720} height={200} />
        <Image className="mx-auto my-10" src={"/images/250813_14h08m07s_screenshot.png"} alt="SpectraFind" width={720} height={200} />
        </div>

        {/* Source Code */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>💻</span>Source Code
        </h2>
        <a
          href="https://github.com/Safwa9amar/SpectraFind"
          target="_blank"
          className="hover:underline break-all"
        >
          https://github.com/Safwa9amar/SpectraFind
        </a>

        {/* Tech Stack */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>🚀</span>Tech Stack
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><b>Frontend Web:</b> Next.js 14 with Tailwind CSS</li>
          <li><b>Backend:</b> Node.js + Prisma ORM</li>
          <li><b>Real-Time:</b> Socket.io for instant messaging</li>
          <li><b>Database:</b> PostgreSQL</li>
          <li><b>Deployment:</b> Netlify (frontend) </li>
        </ul>

        {/* Features */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>✨</span>Main Features
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>📊 <b>Advanced Mobile Comparison</b> – Filter by brand, RAM, storage, and price range.</li>
          <li>🛒 <b>Listings Marketplace</b> – Users can post ads with images and descriptions.</li>
          <li>🔒 <b>Secure Authentication</b> – JWT-based login and registration.</li>
          <li>📱 <b>Cross-Platform Access</b> – Web app & Android mobile app.</li>
        </ul>

        {/* Project Idea */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>🧠</span>Project Idea
        </h2>
        <p>
          SpectraFind was designed to be a one-stop platform for mobile phone enthusiasts,
          buyers, and sellers. Users can compare specs, check the latest offers, and
          negotiate deals in real time — bridging the gap between e-commerce and social interaction.
        </p>

        {/* Step-by-Step */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>🧩</span>Development Process
        </h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li><b>Setup:</b> Initialized Next.js & React Native projects, configured Tailwind CSS, and created shared components.</li>
          <li><b>Backend:</b> Built Prisma models for <code>Mobile</code>, <code>User</code>, <code>Listing</code>, and <code>Chat</code>.</li>
          <li><b>Features:</b> Added advanced search and filter logic for mobiles.</li>
          <li><b>Authentication:</b> Implemented JWT-based secure login/signup flow.</li>
          <li><b>Real-Time:</b> Integrated Socket.io for instant messaging with chat rooms per listing.</li>
          <li><b>Deployment:</b> Pushed frontend to Netlify & backend to Railway.</li>
        </ol>

        {/* User Flow */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>🔄</span>User Flow
        </h2>
        <p>
          1️⃣ User visits homepage → 2️⃣ Searches or browses mobiles →
          3️⃣ Opens a listing → 4️⃣ Chats with the seller →
          5️⃣ Finalizes deal offline or online.
        </p>

        {/* Future Improvements */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>🚧</span>Future Plans
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>💳 In-app payments integration.</li>
          <li>🌍 Multi-language support (English & Arabic).</li>
          <li>📷 AI-based image recognition for auto-spec detection from photos.</li>
          <li>📦 Shipment tracking system.</li>
        </ul>

        {/* Branding */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>🖼️</span>Branding
        </h2>

        <p>
          The brand identity focuses on simplicity and professionalism with a clean,
          minimal logo and a color palette that reflects trust and modernity.
        </p>
        <Image className="mx-auto my-10" src="/images/spectrafind.png" alt="SpectraFind" width={200} height={200} />
        {/* Final Thoughts */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>📌</span>Final Thoughts
        </h2>
        <p>
          SpectraFind was a rewarding project that merged e-commerce and social interaction.
          It demonstrates modern full-stack development, real-time features, and clean UI/UX.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/Safwa9amar"
          target="_blank"
          className="hover:underline"
        >
          Safwa9amar
        </a>{" "}
        · SpectraFind 2025
      </footer>
    </main>
  );
}
