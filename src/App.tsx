import { About } from "./components/About/about";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/header";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Services } from "./components/Services/Services";
import { Skills } from "./components/Skills/Skills";
import { Testimonial } from "./components/Testimonial/Testimonial";

export function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
