import { ReactElement } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import "./Projects.css";

const PROJECTS = [
  {
    title: "Rewards Program",
    description:
      "The project was an integral part of one of the products developed by Pramati. " +
      "It included features like fully user editable rules which can be written in any " +
      "language (C#, Java, Node JS, Python, PHP, Typescript, etc), a scalable data " +
      "pipeline, microservice architecture for the APIs and customizable widgets for " +
      "the frontend. My primary roles included a cache implementation for the datapipeline " +
      "and the multilingual, fully-customizable rule processor platform. The cache " +
      "implementation helped the pipeline process more than 7k requests at a time without " +
      "any errors from just 2k before. The rule processor on the other hand allowed anybody " +
      "to write complex rules using the platform while making use of OpenFaaS framework.",
  },
  {
    title: "Ethereum wallet",
    description:
      "The project was part of a single sign on product which wanted to include blockchain wallet " +
      "functionality into its fold. The project included creating both android and iOS apps for " +
      "ethereum payments using a QR code. The app leveraged the ability of the mobile platform to " +
      "hold private keys which were used to sign transactions throgh fingerprint scanning. This " +
      "allowed the user to use the mobile device as a wallet while never parting with his private " +
      "key. The wallet also had recovery options using seed words which allowed the user to restore " +
      "their wallet in case of switching between phones or a data loss.",
  },
  {
    title: "StreamX",
    description:
      "StreamX is a blockchain based streaming platform which mimics youtube in its " +
      "functionality but provides more to the user in terms of transparency and openness. " +
      "StreamX leveraged the blockchain technology provided by IBM's hyperledger to execute " +
      "automatic contracts when predetermined rules are met. These are particulary useful " +
      "during payout to the users for their content which ultimately boosted trust between " +
      "the stakeholders. My primary responsibility was to design the entire solution and " +
      "lead a team of four to build a Hyperledger + node JS backend and a React JS frontend " +
      "and deliver a proof of concept.",
  },
  {
    title: "BlockApps",
    description:
      "BlockApps was a company providing solutions to a variety of cross-domains problems " +
      "through their Ethereum based blockchain solution - Strato. The project I was part of " +
      "was an oil pipeline contract execution platform which automatically triggered a variety " +
      "of contracts when different events were triggered. The events included placement of bid, " +
      "delivery of crude oil, etc. The platform used Solidity and Node JS for backend and provided " +
      "a platform for me to grow as a full stack developer",
  },
  {
    title: "64Bits",
    description:
      "The project included developing a forked version of AOSP which allowed the user to block ads " +
      "and allow only those he wanted to (like ads in games to get points or extra lives). " +
      "This project was also integrated with Samsung's platform at one point. It included a Golang " +
      "based daemon, a CDB to store the list of ad domains, a Java service to communicate with the " +
      "daemon and an android application connected to this service which allowed fine grained " +
      "controls to the user.",
  },
  {
    title: "Saraga",
    description:
      "Saraga was a classical music visualization application developed for the Android platform. " +
      "The app included a circular player, lots of metadata displayed in a visually pleasing setup " +
      "and animations which allowed the user to access fine grained details related to each song. " +
      "The app also implemented a cache which allowed users to store songs in their devices while " +
      "listening to them. This was acheived through a clever use of proxy since Android diud not " +
      "provide a cache functionality at that time.",
  },
];

export function Projects(): ReactElement {
  const descriptions = PROJECTS.map((project, i) => (
    <Grid item className="project-item-container" key={i} xs={6}>
      <Paper className="project-item">
        <Typography variant="h5">{project.title}</Typography>
        <Typography variant="body2" className="description-body">
          {project.description}
        </Typography>
      </Paper>
    </Grid>
  ));
  return (
    <div className="component-container">
      <Typography variant="h3" className="project-title">
        Projects
      </Typography>
      <Grid
        container
        className="projects-body"
        justifyContent="space-between"
        spacing={2}
      >
        {descriptions}
      </Grid>
    </div>
  );
}
