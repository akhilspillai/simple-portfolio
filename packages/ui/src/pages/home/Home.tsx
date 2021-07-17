import { ReactElement } from "react";
import { Details } from "../../components/details/Details";
import About from "../../components/about/About";
import { Projects } from "../../components/projects/Projects";
import { Contact } from "../../components/contact/Contact";

import "./Home.css";

export function Home(): ReactElement {
  return (
    <div className="container">
      <Details />
      <About />
      <Projects />
      <Contact />
      {/* TODO: Add tech experience progressbar */}
    </div>
  );
}
