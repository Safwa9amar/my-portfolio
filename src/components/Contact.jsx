export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-16">
      <h3 className="text-2xl font-semibold text-teal-300 mb-6">Contact Me</h3>
      <div className="flex flex-wrap gap-6 text-teal-400 text-lg justify-center mb-8">
        <a href="mailto:hassanih97@gmail.com" className="hover:text-teal-300" title="Email"><i className="fa fa-envelope" /> Email</a>
        <a href="https://github.com/Safwa9amar" target="_blank" className="hover:text-teal-300" title="GitHub"><i className="fa fa-github" /> GitHub</a>
        <a href="#" className="hover:text-teal-300" title="LinkedIn"><i className="fa fa-linkedin" /> LinkedIn</a>
        <a href="https://wa.me/0674020244" target="_blank" className="hover:text-teal-300" title="WhatsApp"><i className="fab fa-whatsapp" /> WhatsApp</a>
        <a href="#" className="hover:text-teal-300" title="TikTok"><i className="fab fa-tiktok" /> TikTok</a>
        <a href="#" className="hover:text-teal-300" title="Facebook"><i className="fab fa-facebook" /> Facebook</a>
        <a href="#" className="hover:text-teal-300" title="Instagram"><i className="fab fa-instagram" /> Instagram</a>
      </div>
      <form className="mb-6">
        <div className="mb-4">
          <input type="text" placeholder="name" className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-teal-400" />
        </div>
        <div className="mb-4">
          <input type="email" placeholder="email" className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-teal-400" />
        </div>
        <div className="mb-4">
          <textarea placeholder="message" rows={4} className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-teal-400" />
        </div>
        <button type="submit" className="px-6 py-2 bg-teal-600 text-white rounded shadow hover:bg-teal-500 transition">Send Message</button>
      </form>
    </section>
  );
}
