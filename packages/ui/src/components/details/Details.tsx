import { Box, Typography } from "@material-ui/core";
import { ReactElement } from "react";

import "./Details.css";

const DETAIL_PREFIX = "Hey there! I’m";
const FIRST_NAME = "Akhil S Pillai";
const DETAIL_SUFFIX =
  "Backend engineer and frontend developer based in Chennai, Tamil Nadu.";

export default function Details(): ReactElement {
  return (
    <div className="component-container details-container container">
      <div className="text-container">
        <Typography variant="subtitle1">{DETAIL_PREFIX}</Typography>
        <Box py={2}>
          <Typography variant="h2">{FIRST_NAME}</Typography>
        </Box>
        <Typography variant="subtitle1">{DETAIL_SUFFIX}</Typography>
      </div>
      <img className="details-image" src="/bearded_man.svg" alt="image" />
    </div>
  );
}
