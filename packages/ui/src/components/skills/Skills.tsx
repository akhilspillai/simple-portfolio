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
import { setOpacity } from "../../util/util";
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
  (theme) =>
    createStyles({
      root: {
        flex: 1,
        height: 4,
        borderRadius: 2,
        marginRight: 20,
        [theme.breakpoints.down("xs")]: {
          height: 2,
          marginRight: 10,
        },
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

const SkillButton = withStyles((theme) =>
  createStyles({
    root: {
      width: 150,
      height: 50,
      borderRadius: 50,
      paddingLeft: "30px",
      paddingRight: "30px",
      textTransform: "none",
      background: "white",
      "&:hover": {
        backgroundColor: "white",
      },
      [theme.breakpoints.down("xs")]: {
        width: 80,
        height: 40,
        paddingLeft: "10px",
        paddingRight: "10px",
      },
    },
  })
)(Button);

const SkillListItem = withStyles(() =>
  createStyles({
    root: {
      paddingTop: 20,
      paddingRight: "10vw",
    },
  })
)((props) => <ListItem {...props} />);

const SkillTitle = withStyles(() =>
  createStyles({
    root: {
      position: "absolute",
      whiteSpace: "nowrap",
      transform: "rotate(-90deg) translateY(260%)",
      bottom: "43%",
      right: 0,
    },
  })
)(Typography);

const SkillBox = withStyles(() =>
  createStyles({
    root: {
      width: "100%",
      position: "relative",
    },
  })
)(Box);

const CircleBox = withStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      borderRadius: "50px",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 14px",
      [theme.breakpoints.down("xs")]: {
        padding: "10px 12px",
      },
    },
  })
)(Box);

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

function Skill({ data }: SkillProps): ReactElement {
  return (
    <SkillListItem>
      <SkillButton variant="contained" size="medium" color="primary">
        <img style={{ maxWidth: "80%" }} src={data.icon} alt="instagram"></img>
      </SkillButton>
      <SkillLevel
        variant="determinate"
        value={data.level}
        barColor={data.color}
      />
      <CircleBox bgcolor={setOpacity(data.color, 0.2)}>
        <Typography variant="subtitle1" className="project-title">
          {data.level}
        </Typography>
      </CircleBox>
    </SkillListItem>
  );
}

export default function Skills(): ReactElement {
  const skillItems = SKILLS.map((data, key) => <Skill data={data} key={key} />);
  return (
    <SkillBox>
      <SkillTitle variant="h3">{CURRENT_SKILLS}</SkillTitle>
      <Container>
        <List>{skillItems}</List>
      </Container>
    </SkillBox>
  );
}
