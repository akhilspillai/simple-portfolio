import { ReactElement } from "react";
import { Details } from "../../components/details/Details";
import About from "../../components/about/About";
// TODO: make other components export by default
import { Projects } from "../../components/projects/Projects";
import { Contact } from "../../components/contact/Contact";
import Skills from "../../components/skills/Skills";

import "./Home.css";

export function Home(): ReactElement {
  return (
    <div className="container">
      <Details />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
