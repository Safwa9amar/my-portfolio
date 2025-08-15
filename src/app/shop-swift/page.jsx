"use client"
import Image from "next/image";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/images/shop-swift/webapp1.png",
    thumbnail: "/images/shop-swift/webapp1.png",
  },
  {
    original: "/images/shop-swift/webapp2.png",
    thumbnail: "/images/shop-swift/webapp2.png",
  },
  {
    original: "/images/shop-swift/webapp3.png",
    thumbnail: "/images/shop-swift/webapp3.png",
  },
  {
    original: "/images/shop-swift/webapp4.png",
    thumbnail: "/images/shop-swift/webapp4.png",
  },
  {
    original: "/images/shop-swift/webapp5.png",
    thumbnail: "/images/shop-swift/webapp5.png",
  },
  {
    original: "/images/shop-swift/mobileapp2.png",
    thumbnail: "/images/shop-swift/mobileapp2.png",
  },
  {
    original: "/images/shop-swift/mobileapp3.png",
    thumbnail: "/images/shop-swift/mobileapp3.png",
  },
  {
    original: "/images/shop-swift/mobileapp4.png",
    thumbnail: "/images/shop-swift/mobileapp4.png",
  },
  {
    original: "/images/shop-swift/mobileapp5.png",
    thumbnail: "/images/shop-swift/mobileapp5.png",
  },
  {
    original: "/images/shop-swift/mobileapp6.png",
    thumbnail: "/images/shop-swift/mobileapp6.png",
  },
  {
    original: "/images/shop-swift/mobileapp7.png",
    thumbnail: "/images/shop-swift/mobileapp7.png",
  },
];


export default function ShopSwift() {
  return (
    <main className="text-black dark:text-white">
      {/* Header */}
      <header className="text-white py-10 text-center shadow-lg bg-gradient-to-r from-green-500 to-emerald-600">
        <h1 className="text-3xl font-bold mb-2">🛍️ ShopSwift – Full-Stack E-commerce App</h1>
        <p className="text-lg text-white">
          A behind-the-scenes look at how I designed and built ShopSwift — a React Native + Expo mobile app with a companion Next.js web app for the storefront/admin experience.
        </p>
      </header>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto mt-10 mb-10 px-4 py-8 rounded-2xl shadow-xl bg-white dark:bg-gray-900">
          {/* Live Demo */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span>🔗</span>Live Demo
        </h2>
        <a
          href="https://shop-swift-three-sigma.vercel.app/"
          target="_blank"
          className="hover:underline break-all"
        >
          https://shop-swift-three-sigma.vercel.app/
        </a>
        <br/>
        <br/>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          Gallery
        </h2>
        <ImageGallery items={images} />

        {/* Tech Stack */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span>🚀</span>Tech Stack
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><b>Mobile:</b> React Native + Expo, Expo Router, TypeScript, NativeWind</li>
          <li><b>Web:</b> Next.js (App Router), Tailwind CSS, deployed on Vercel</li>
          <li><b>State:</b> React Context + AsyncStorage (mobile)</li>
          <li><b>AI:</b> AI-assisted product descriptions using Genkit + Google AI</li>
        </ul>

        {/* Architecture Overview */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>🏗️</span>Architecture Overview
        </h2>
        <p>
          ShopSwift is split into two main apps — a mobile shopping app and a web storefront/admin interface. 
          Both share patterns for routing, styling, and component organization while targeting their respective platforms.
        </p>
        <ul className="list-disc ml-6 space-y-1 mt-3">
          <li><b>Mobile app (Expo):</b> Optimized for phones/tablets with file-based routing and cart persistence via AsyncStorage.</li>
          <li><b>Web app (Next.js):</b> Full e-commerce site with admin dashboard, product management, and AI tools.</li>
          <li><b>Data layer:</b> Demo product data + authentication context with role-based access; backend-ready.</li>
        </ul>

        {/* Core Features */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>✨</span>Core Features
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>🛒 <b>Product Catalog</b> – Search, filter, and responsive product grid.</li>
          <li>🛍️ <b>Shopping Cart with Persistence</b> – Cart stored locally across sessions.</li>
          <li>🔐 <b>Authentication & Role-Based Access</b> – User and admin roles with protected routes.</li>
          <li>📊 <b>Admin Dashboard</b> – Add, edit, delete products; view analytics.</li>
          <li>🤖 <b>AI-Assisted Product Descriptions</b> – Enhance product details using Genkit + Google AI.</li>
        </ul>

        {/* Development Process */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>🧩</span>Development Process
        </h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Initialized Expo (mobile) and Next.js (web) apps with TypeScript.</li>
          <li>Set up NativeWind for mobile and Tailwind CSS for web styling consistency.</li>
          <li>Built core contexts for authentication and cart management.</li>
          <li>Implemented protected routes for admin features.</li>
          <li>Integrated AI description enhancement with Genkit on the web side.</li>
          <li>Deployed web app to Vercel and tested mobile on Expo Go.</li>
        </ol>

        {/* Challenges & Lessons Learned */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>⚡</span>Challenges & Lessons Learned
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>UI primitives differ between React Native and web — shared patterns instead of shared components.</li>
          <li>Different storage systems required abstraction to keep UI stable.</li>
          <li>Expo Router and Next.js App Router offered conceptual parity, easing development.</li>
          <li>AI capabilities work best when hidden behind hooks/services for flexibility.</li>
        </ul>

        {/* Future Plans */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>🚧</span>Future Plans
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>💳 Real payment integration (Stripe).</li>
          <li>🔗 Backend for products, inventory, user profiles.</li>
          <li>📦 Order history and tracking.</li>
          <li>📈 Enhanced analytics for admins.</li>
        </ul>

        {/* Branding */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>🖼️</span>Branding
        </h2>
        <p>
          The ShopSwift identity emphasizes modern design and trustworthiness, using clean typography and a fresh green color palette.
        </p>
        <Image
          className="mx-auto my-10"
          src="/images/shop-swift/ic_launcher.png"
          alt="ShopSwift Logo"
          width={200}
          height={200}
        />

        {/* Final Thoughts */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
          <span>📌</span>Final Thoughts
        </h2>
        <p>
          ShopSwift was built to showcase a complete cross-platform e-commerce experience with real features, AI integration, and clean DX. 
          It’s ready for backend integration and payment processing to become a fully-fledged product.
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
        · ShopSwift 2025
      </footer>
    </main>
  );
}
