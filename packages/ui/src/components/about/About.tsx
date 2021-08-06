import {
  Button,
  Typography,
  withStyles,
  createStyles,
  Box,
} from "@material-ui/core";
import { ReactElement } from "react";
import FindMeButtons from "../common/FindMeButtons";
import { scrollTo, setOpacity } from "../../util/util";

import "./About.css";
import Circle from "../common/Circle";
import Container from "../common/Container";

export const ABOUT =
  "I have over ten years of industry experience in developing commercial applications and have been a part of exceptional design and development projects. In previous roles, I worked on cutting-edge technologies like blockchain, implemented scalable solutions, built mobile as well as web applications, and executed innovative ideas. I have experience in application deployment using cloud technologies such as AWS, containerization using docker, and their orchestration using Kubernetes. I have always been a quick learner, jumping right into technology stacks as and when required while delivering high-quality software.";
const ABOUT_TITLE = "About me";
const HIRE = "Hire Me";
const FIND_ME = "Find me on";

const AboutContainer = withStyles((theme) =>
  createStyles({
    root: {
      borderRadius: 20,
      padding: "0px 54px",
      textTransform: "none",
      marginTop: "80px",
      position: "relative",
      overflow: "hidden",
      [theme.breakpoints.down("xs")]: {
        padding: "0px 5px",
      },
    },
  })
)(Box);

const HireButton = withStyles(() =>
  createStyles({
    root: {
      borderRadius: 20,
      padding: "6px 36px",
      textTransform: "none",
    },
    label: {
      color: "#FFFFFF",
      fontSize: "0.8rem",
      fontFamily: ["Newsgoth", "sans-serif"].join(","),
      padding: 0,
    },
  })
)(Button);

const FooterBox = withStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "left",
      alignItems: "flex-end",
      marginTop: "20px",
      flexDirection: "row",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
  })
)(Box);

const FindMeBox = withStyles((theme) =>
  createStyles({
    root: {
      marginLeft: "50px",
      marginBottom: "auto",
      [theme.breakpoints.down("xs")]: {
        marginLeft: "0px",
        textAlign: "center",
        marginTop: "15px",
      },
    },
  })
)(Box);

const AboutBox = withStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      backgroundColor: setOpacity("#0e0c38", 0.8),
      borderRadius: "30px",
      padding: "50px 30px 50px 30px",
      [theme.breakpoints.down("xs")]: {
        padding: "10px 10px 15px 10px",
      },
    },
  })
)(Box);

function ButtonFooter(): ReactElement {
  return (
    <FooterBox>
      <HireButton
        variant="contained"
        size="medium"
        color="primary"
        onClick={() => scrollTo("contact")}
      >
        {HIRE}
      </HireButton>
      <FindMeBox>
        <Typography variant="body2" color="textSecondary">
          {FIND_ME}
        </Typography>
        <FindMeButtons />
      </FindMeBox>
    </FooterBox>
  );
}

export default function About(): ReactElement {
  return (
    <AboutContainer id="about">
      <Circle diameter="320px" right={-160} bottom="calc(50% - 160px)" />
      <AboutBox>
        <Typography variant="h6" color="textSecondary" align="center">
          {ABOUT_TITLE}
        </Typography>
        <div className="about-body">
          <img className="about-image" src="/about.svg" alt="image" />
          <div className="about-text">
            <Typography variant="body1" color="textSecondary">
              {ABOUT}
            </Typography>
            <ButtonFooter />
          </div>
        </div>
      </AboutBox>
    </AboutContainer>
  );
}
