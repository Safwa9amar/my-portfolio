import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-16">
      <h3 className="text-2xl font-semibold text-teal-300 mb-6">Projects</h3>
      <div className="flex flex-wrap gap-3 mb-8">
        {['All','Web','Android','iOS','Design','Other'].map(tag => (
          <button key={tag} className="cursor-pointer px-4 py-1 rounded bg-gray-800 text-teal-300 font-semibold" type="button">{tag}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transition">
          <Image src="https://placehold.co/400x200/222/fff?text=Mobile+Finder+App" width={400} height={200} className="rounded mb-4" alt="Mobile Finder App" />
          <h4 className="font-bold text-teal-200 mb-2">Mobile Finder App <span className="text-xs text-gray-400">(In Progress)</span></h4>
          <div className="flex gap-2 mb-2">
            <span className="px-2 py-0.5 rounded bg-teal-700 text-xs text-white">Web</span>
            <span className="px-2 py-0.5 rounded bg-teal-700 text-xs text-white">Android</span>
          </div>
          <p className="text-gray-300 mb-2">Compare mobile phones by price and features. Auth, listings, buy/sell platform.</p>
          <div className="text-xs text-teal-400 mb-2">Tech: Next.js 14, React Native, Prisma ORM, Socket.io</div>
          <Link href="/spectrafind" className="text-teal-400 hover:underline">Preview</Link>
        </div>
        {/* ...repeat for other projects... */}
      </div>
    </section>
  );
}
