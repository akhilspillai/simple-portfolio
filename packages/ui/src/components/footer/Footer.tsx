import {
  Box,
  createStyles,
  Typography,
  withStyles,
  Link,
} from "@material-ui/core";
import { ReactElement } from "react";
import { scrollTo } from "../../util/util";
import FindMeButtons from "../common/FindMeButtons";

const COPYRIGHT = "Copyright © 2019 Aerozef Creations | All rights reserved";
const LINK_DATA = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Contact",
    link: "contact",
  },
];
const CONTACT_INFO = "IN / akhilspillai@ymail.com";

const ComponentLink = withStyles(() =>
  createStyles({
    root: {
      padding: "0px 5px",
    },
  })
)(Link);

const ContactInfoText = withStyles(() =>
  createStyles({
    root: {
      marginBottom: "20px",
    },
  })
)(Link);

function FooterLinks(): ReactElement {
  const links = LINK_DATA.map((data, key) => (
    <Box display="flex" key={key}>
      {key !== 0 && (
        <Typography variant="body2" color="textSecondary">
          |
        </Typography>
      )}
      <ComponentLink
        variant="body2"
        color="textSecondary"
        href="#"
        onClick={() => scrollTo(data.link)}
      >
        {data.name}
      </ComponentLink>
    </Box>
  ));
  return (
    <Box display="flex" marginY="5px">
      {links}
    </Box>
  );
}

const FooterTitle = withStyles(() =>
  createStyles({
    root: {
      fontSize: "3rem",
      fontFamily: ["Freescript", "sans-serif"].join(","),
    },
  })
)(Typography);

const CopyRightText = withStyles(() =>
  createStyles({
    root: {
      margin: "50px 0px 30px 0px",
    },
  })
)(Typography);

export default function Footer(): ReactElement {
  return (
    <Box
      bgcolor="#040221"
      width="100vw"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Box width="1px" height="35px" bgcolor="#12B2F9" mb="5px"></Box>
      <FooterTitle color="textSecondary">Portfolio</FooterTitle>
      <FooterLinks />
      <ContactInfoText variant="body2" color="textSecondary">
        {CONTACT_INFO}
      </ContactInfoText>
      <FindMeButtons />
      <CopyRightText variant="body2" color="textSecondary">
        {COPYRIGHT}
      </CopyRightText>
    </Box>
  );
}
