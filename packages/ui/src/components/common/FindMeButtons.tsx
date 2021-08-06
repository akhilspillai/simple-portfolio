import { Box, createStyles, IconButton, withStyles } from "@material-ui/core";
import { ReactElement } from "react";

const FIND_ME_VALUES = [
  {
    name: "instagram",
    image: "insta.svg",
    url: "https://www.instagram.com/akhil_s_p_/",
  },
  {
    name: "linkedin",
    image: "linkedin.svg",
    url: "https://www.linkedin.com/in/akhil-pillai-0465a787/",
  },
  {
    name: "stackoverflow",
    image: "sof.svg",
    url: "https://stackoverflow.com/users/5185080/akhil",
  },
];

const FindMeButton = withStyles(() =>
  createStyles({
    root: {
      padding: "5px", // TODO: fix this for first and last element
    },
  })
)(IconButton);

function FindMeButtons(): ReactElement {
  const buttonImages = FIND_ME_VALUES.map((value, key) => (
    <FindMeButton
      key={key}
      size="small"
      onClick={() => window.open(value.url, "_blank")}
    >
      <img className="button-icon" src={value.image} alt={value.name}></img>
    </FindMeButton>
  ));
  return <Box className="icon-group">{buttonImages}</Box>;
}

export default FindMeButtons;
