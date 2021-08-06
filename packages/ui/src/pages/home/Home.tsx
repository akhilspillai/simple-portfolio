import { ReactElement } from "react";
import Details from "../../components/details/Details";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Skills from "../../components/skills/Skills";
import Footer from "../../components/footer/Footer";

export function Home(): ReactElement {
  // TODO: analytics for site visits
  return (
    <>
      <Details />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
