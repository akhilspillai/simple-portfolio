import { Typography, CircularProgress, Grid, Box } from "@material-ui/core";
import { ReactElement } from "react";

import "./Skills.css";

const SKILLS = [
  {
    name: "Node JS",
    level: 90,
  },
  {
    name: "Typescript",
    level: 80,
  },
  {
    name: "React JS",
    level: 80,
  },
  {
    name: "Java",
    level: 70,
  },
  {
    name: "Python",
    level: 50,
  },
  {
    name: "Solidity",
    level: 50,
  },
];

export default function Skills(): ReactElement {
  const skillItems = SKILLS.map((skill, key) => (
    <Grid item key={key} xs={6} md={4} className="skill-item">
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={skill.level}
          size="5rem"
          color="primary"
          thickness={6}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="caption"
            component="div"
            color="textSecondary"
          >{`${skill.level}%`}</Typography>
        </Box>
      </Box>
      <Typography variant="caption" component="div" color="textSecondary">
        {skill.name}
      </Typography>
    </Grid>
  ));
  return (
    <div className="component-container">
      <Typography variant="h3" className="project-title">
        Skills
      </Typography>
      <Grid
        container
        spacing={5}
        alignContent="center"
        justifyContent="center"
        className="skills-body"
      >
        {skillItems}
      </Grid>
    </div>
  );
}
