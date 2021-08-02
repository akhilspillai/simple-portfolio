import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
  LinearProgress,
  LinearProgressProps,
  withStyles,
  createStyles,
} from "@material-ui/core";
import { ReactElement } from "react";
import Container from "../common/Container";
import "./Skills.css";

const SKILLS = [
  {
    name: "Node JS",
    level: 90,
    icon: "/node.svg",
    color: "#83CD29",
  },
  {
    name: "Typescript",
    level: 80,
    icon: "/typescript.svg",
    color: "#007ACC",
  },
  {
    name: "React JS",
    level: 80,
    icon: "/react.svg",
    color: "#12B2F9",
  },
  {
    name: "Java",
    level: 70,
    icon: "/java.svg",
    color: "#EC2025",
  },
  {
    name: "Python",
    level: 50,
    icon: "/python.svg",
    color: "#FFE160",
  },
  {
    name: "Solidity",
    level: 50,
    icon: "/solidity.svg",
    color: "#1C1C1C",
  },
];

const CURRENT_SKILLS = "Current Skills";

const SkillLevel = withStyles(
  () =>
    createStyles({
      root: {
        width: "100%",
        height: 4,
        borderRadius: 2,
        marginRight: 20,
      },
      colorPrimary: {
        backgroundColor: "#DBDBDB",
      },
      barColorPrimary: {
        backgroundColor: (props: SkillLevelProps) => props.barColor,
      },
    })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
)(({ barColor, ...props }: SkillLevelProps) => <LinearProgress {...props} />);

const SkillButton = withStyles(() =>
  createStyles({
    root: {
      width: 200,
      height: 50,
      borderRadius: 50,
      padding: "20px 36px",
      textTransform: "none",
      background: "white",
      "&:hover": {
        backgroundColor: "white",
      },
    },
  })
)(Button);

const SkillTitle = withStyles(() =>
  createStyles({
    root: {
      position: "absolute",
      whiteSpace: "nowrap",
      transform: "rotate(-90deg) translateY(270%)",
      bottom: "43%",
      right: 0,
    },
  })
)(Typography);

interface SkillLevelProps extends LinearProgressProps {
  barColor: string;
}

interface SkillData {
  name: string;
  level: number;
  icon: string;
  color: string;
}

interface SkillProps {
  data: SkillData;
}

const setOpacity = (hex: string, alpha: number) =>
  `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;

function Skill({ data }: SkillProps): ReactElement {
  return (
    <ListItem>
      <SkillButton variant="contained" size="medium" color="primary">
        <img style={{ maxWidth: "80%" }} src={data.icon} alt="instagram"></img>
      </SkillButton>
      <SkillLevel
        variant="determinate"
        value={data.level}
        barColor={data.color}
      />
      <Box
        height="50px"
        width="70px"
        borderRadius="50px"
        alignItems="center"
        justifyContent="center"
        display="flex"
        bgcolor={setOpacity(data.color, 0.2)}
      >
        <Typography variant="subtitle1" className="project-title">
          {data.level}
        </Typography>
      </Box>
    </ListItem>
  );
}

export default function Skills(): ReactElement {
  const skillItems = SKILLS.map((data, key) => <Skill data={data} key={key} />);
  return (
    <Box mt="150px" width="100vw" position="relative" overflow="hidden">
      <SkillTitle variant="h3">{CURRENT_SKILLS}</SkillTitle>
      <Container>
        <List>{skillItems}</List>
      </Container>
    </Box>
  );
}
