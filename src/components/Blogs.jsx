export default function Blogs() {
  return (
    <section id="blogs" className="max-w-4xl mx-auto py-16">
      <h3 className="text-2xl font-semibold text-teal-300 mb-6">Blogs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transition">
          <h4 className="font-bold text-teal-200 mb-2">How to Build a Modern Portfolio with Next.js</h4>
          <p className="text-gray-300 mb-2">A step-by-step guide to creating a beautiful, responsive developer portfolio using Next.js, TailwindCSS, and Framer Motion.</p>
          <div className="text-xs text-teal-400 mb-2">Published: July 2025</div>
          <a href="#" className="text-teal-400 hover:underline">Read More</a>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transition">
          <h4 className="font-bold text-teal-200 mb-2">React Native vs Flutter: Which to Choose?</h4>
          <p className="text-gray-300 mb-2">Comparing two popular mobile frameworks for cross-platform development, with pros, cons, and real-world use cases.</p>
          <div className="text-xs text-teal-400 mb-2">Published: June 2025</div>
          <a href="#" className="text-teal-400 hover:underline">Read More</a>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-teal-600 text-white rounded shadow hover:bg-teal-500 transition">Show More Blogs</button>
      </div>
    </section>
  );
}
