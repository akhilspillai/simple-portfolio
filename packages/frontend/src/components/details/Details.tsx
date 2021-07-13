import { Typography } from "@material-ui/core";
import { ReactElement } from "react";

import "./Details.css";

const DETAILS =
  "Hey there! I’m a backend engineer and a UI developer based in Chennai, Tamil Nadu.";

export function Details(): ReactElement {
  return (
    <div className="details">
      <Typography variant="subtitle1">Akhil S Pillai</Typography>
      <Typography variant="subtitle2" className="designation">
        Software Engineer
      </Typography>
      <Typography variant="h2" className="welcome">
        {DETAILS}
      </Typography>
    </div>
  );
}
