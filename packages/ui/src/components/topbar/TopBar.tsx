import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { ReactElement } from "react";
import Circle from "../common/Circle";

export default function TopBar(): ReactElement {
  return (
    <Box position="relative">
      <Circle diameter="300px" top="-140px" left="-140px"></Circle>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <div className="title-wrapper">
            <Typography variant="h1">Portfolio</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
