import { ReactElement } from "react";
import Details from "../../components/details/Details";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Skills from "../../components/skills/Skills";

import "./Home.css";

export function Home(): ReactElement {
  // TODO: log site visits
  return (
    <>
      <Details />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
