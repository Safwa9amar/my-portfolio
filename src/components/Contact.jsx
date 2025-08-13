import { Mail, Github, Linkedin, MessageCircle, Music2, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-16">
      <h3 className="text-2xl font-semibold text-teal-300 mb-6">Contact Me</h3>
      <div className="flex flex-wrap gap-6 text-teal-400 text-lg justify-center mb-8">
        <a href="mailto:hassanih97@gmail.com" className="hover:text-teal-300 flex items-center gap-2" title="Email"><Mail size={20} /> Email</a>
        <a href="https://github.com/Safwa9amar" target="_blank" className="hover:text-teal-300 flex items-center gap-2" title="GitHub"><Github size={20} /> GitHub</a>
        <a href="#" className="hover:text-teal-300 flex items-center gap-2" title="LinkedIn"><Linkedin size={20} /> LinkedIn</a>
        <a href="https://wa.me/0674020244" target="_blank" className="hover:text-teal-300 flex items-center gap-2" title="WhatsApp"><MessageCircle size={20} /> WhatsApp</a>
        <a href="#" className="hover:text-teal-300 flex items-center gap-2" title="TikTok"><Music2 size={20} /> TikTok</a>
        <a href="#" className="hover:text-teal-300 flex items-center gap-2" title="Facebook"><Facebook size={20} /> Facebook</a>
        <a href="#" className="hover:text-teal-300 flex items-center gap-2" title="Instagram"><Instagram size={20} /> Instagram</a>
      </div>
      <form className="mb-6" netlify name="contact" method="post">
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
