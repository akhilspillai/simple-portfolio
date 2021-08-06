import { ReactElement } from "react";
import {
  CardContent,
  Typography,
  Box,
  makeStyles,
  withStyles,
  createStyles,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

import "./Projects.css";

const PROJECTS = [
  {
    title: "Rewards Program",
    description:
      "The project was an integral part of one of the products developed by Pramati. It included features like fully user-editable rules which support multiple languages (C#, Java, Node JS, Python, PHP, Typescript), a scalable data pipeline, microservice architecture for the APIs, and customizable widgets for the frontend. My primary roles included a cache implementation for the data pipeline and the multilingual, fully customizable rule processor platform. The cache implementation helped the pipeline process more than 7k concurrent requests from just 2k requests before. On the other hand, the rule processor allowed anybody to write complex rules using the platform which used the OpenFaaS framework.",
  },
  {
    title: "Ethereum wallet",
    description:
      "The project was part of a single sign-on product. The objective was to add an Ethereum wallet functionality to the product. The project included creating both Android and iOS apps for Ethereum-based payments using QR codes. The app leveraged the ability of the mobile platforms to hold private keys securely and used them to sign transactions through fingerprint scanning. That allowed the user to use the mobile device as a wallet while never parting with his private key. It also enabled the user to ditch hardware wallets. The wallet also had recovery options using seed words which allowed the user to restore their keys in case of a data loss.",
  },
  {
    title: "StreamX",
    description:
      "StreamX was a blockchain-based streaming platform that mimics youtube in its functionality but provides more to the user in terms of transparency and openness. StreamX leveraged the blockchain technology provided by IBM's Hyperledger to execute automatic contracts when pre-decided rules were met. These were particularly useful during payouts to the users that ultimately boosted trust between the stakeholders. My primary responsibility was to design the entire solution and lead a team of four to build a Hyperledger + node JS backend and a React JS frontend to deliver a proof of concept.",
  },
  {
    title: "BlockApps",
    description:
      "BlockApps was a company providing solutions to a variety of cross-domain problems through their Ethereum based blockchain solution - Strato. The project I was part of was a platform built on top of the US oil pipeline events that automatically triggered various contracts when different events were triggered. The events included placement of bid, delivery of crude oil, etc. The platform used Solidity and Node JS for the backend and provided a platform for me to grow as a full-stack developer",
  },
  {
    title: "64Bits",
    description:
      "The project included developing a forked version of AOSP that allowed the user to block ads and allow only those ads he wanted to (like ads in games to get points or extra lives). The project was also integrated with Samsung's platform at one point. It included a Golang based daemon, a CDB to store the list of ad domains, a Java service to communicate with the daemon, and an android application connected to this service which allowed fine-grained controls to the user.",
  },
  {
    title: "Saraga",
    description:
      "Saraga was a classical music visualization application developed for the Android platform. The app included a circular player, lots of metadata displayed in a visually pleasing setup, and animations that allowed the user to access fine-grained details related to each song. The app also implemented a cache that allowed users to store songs on their devices while listening to them. This was achieved through the clever use of a proxy since Android did not provide cache functionality at that time.",
  },
];

const LATEST_WORK = "Latest Work";

interface Project {
  title: string;
  description: string;
}

interface ProjectDetailProps {
  project: Project;
}

const useStyles = makeStyles((theme) => ({
  image: {
    width: "33vw",
    marginRight: "6vw",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: "100%",
      marginTop: "20px",
    },
  },
  carousel: {
    paddingBottom: "60px",
  },
  carouselButtonWrapper: {
    bottom: 0,
    top: "unset",
    margin: "0px 10px",
  },
  carouselButton: {
    padding: 0,
    top: "unset",
  },
  projectItem: {
    display: "block",
    backgroundColor: "#FFFFFFCC",
  },
  navImage: {
    height: "45px",
    width: "45px",
  },
}));

const BodyBox = withStyles(() =>
  createStyles({
    root: {
      display: "flex",
      marginTop: 20,
      position: "relative",
    },
  })
)(Box);

const ProjectsBox = withStyles((theme) =>
  createStyles({
    root: {
      overflow: "hidden",
      padding: "80px 54px 0px 54px",
      [theme.breakpoints.down("xs")]: {
        padding: "80px 10px 0px 10px",
      },
    },
  })
)(Box);

const ProjectsTitle = withStyles((theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
  })
)(Typography);

function ProjectDetail({ project }: ProjectDetailProps): ReactElement {
  const classes = useStyles();
  return (
    <CardContent className={classes.projectItem}>
      <Typography variant="h5">{project.title}</Typography>
      <Typography variant="body1" className="description-body">
        {project.description}
      </Typography>
    </CardContent>
  );
}

export default function Projects(): ReactElement {
  const classes = useStyles();
  const projectItems = PROJECTS.map((project, i) => (
    <ProjectDetail project={project} key={i} />
  ));
  return (
    <ProjectsBox id="projects">
      <ProjectsTitle variant="h3">{LATEST_WORK}</ProjectsTitle>
      <BodyBox>
        <img className={classes.image} src="/projects.svg" alt="projects" />
        <Carousel
          className={classes.carousel}
          autoPlay={false}
          fullHeightHover={false}
          swipe
          navButtonsProps={{
            className: classes.carouselButton,
          }}
          animation="slide"
          navButtonsWrapperProps={{
            className: classes.carouselButtonWrapper,
          }}
          navButtonsAlwaysVisible
          indicators={false}
          NextIcon={<img src="/next.svg" className={classes.navImage} />}
          PrevIcon={<img src="/prev.svg" className={classes.navImage} />}
        >
          {projectItems}
        </Carousel>
      </BodyBox>
    </ProjectsBox>
  );
}
