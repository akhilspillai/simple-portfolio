import { ReactElement } from "react";
import { Box, createStyles, withStyles } from "@material-ui/core";

import Details from "../../components/details/Details";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Skills from "../../components/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopBar from "../../components/topbar/TopBar";

const MainWrapper = withStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
)(Box);

export function Home(): ReactElement {
  // TODO: analytics for site visits
  return (
    <MainWrapper>
      <Box maxWidth="1000px">
        <TopBar />
        <Details />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </MainWrapper>
  );
}
