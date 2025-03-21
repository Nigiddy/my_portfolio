import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Hero />
      <Services />
      <Projects />
      <Contact />  
      <Footer />
    </div>
  );
}
