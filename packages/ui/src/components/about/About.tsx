import { Typography } from "@material-ui/core";
import { ReactElement } from "react";

import "./About.css";

const ABOUT =
  "I have over 10 years of industry experience in developing commercial applications and have been a part of exceptional " +
  "design and development projects. In previous roles, I worked on cutting edge technologies like blockchain, implemented " +
  "scalable solutions, built mobile as well as web applications and executed innovative ideas. I have experiance in application " +
  "deployment using cloud technologies such as AWS, containerization using docker and their orchestration using kubernetes as well. " +
  "I have always been a quick learner, jumping right into technology stacks as and when required while delivering high " +
  "quality software.";

export function About(): ReactElement {
  return (
    <div className="about-container">
      <Typography variant="body1">{ABOUT}</Typography>
    </div>
  );
}
