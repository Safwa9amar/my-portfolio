import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {

  return (
    <div className="font-sans transition-colors duration-500 p-0 min-h-screen  relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

