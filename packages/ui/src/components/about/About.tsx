import {
  Box,
  Button,
  IconButton,
  Typography,
  withStyles,
  createStyles,
} from "@material-ui/core";
import { ReactElement } from "react";

import "./About.css";

export const ABOUT =
  "I have over ten years of industry experience in developing commercial applications and have been a part of exceptional design and development projects. In previous roles, I worked on cutting-edge technologies like blockchain, implemented scalable solutions, built mobile as well as web applications, and executed innovative ideas. I have experience in application deployment using cloud technologies such as AWS, containerization using docker, and their orchestration using Kubernetes. I have always been a quick learner, jumping right into technology stacks as and when required while delivering high-quality software.";
const ABOUT_TITLE = "About me";
const HIRE = "Hire Me";
const FIND_ME = "Find me on";

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

const FindMeButton = withStyles(() =>
  createStyles({
    root: {
      padding: "5px 10px 5px 0px",
    },
  })
)(IconButton);

function ButtonFooter(): ReactElement {
  return (
    <div className="button-footer">
      <HireButton variant="contained" size="medium" color="primary">
        {HIRE}
      </HireButton>
      <div className="icon-container">
        <Typography variant="body2" color="textSecondary">
          {FIND_ME}
        </Typography>
        <Box className="icon-group">
          <FindMeButton size="small" aria-label="delete">
            <img className="button-icon" src="/insta.svg" alt="instagram"></img>
          </FindMeButton>
          <FindMeButton aria-label="delete">
            <img
              className="button-icon"
              src="/linkedin.svg"
              alt="linked in"
            ></img>
          </FindMeButton>
        </Box>
      </div>
    </div>
  );
}

export default function About(): ReactElement {
  return (
    <div className="container component-container about-container">
      <Typography variant="h6" color="textPrimary" align="center">
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
    </div>
  );
}
