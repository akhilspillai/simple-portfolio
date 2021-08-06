import { Box, BoxProps, createStyles, withStyles } from "@material-ui/core";
import { ReactElement } from "react";

const CustomBox = withStyles((theme) =>
  createStyles({
    root: {
      borderRadius: 20,
      padding: "0px 54px",
      textTransform: "none",
      marginTop: "80px",
      [theme.breakpoints.down("xs")]: {
        padding: "0px 5px",
      },
    },
  })
)(Box);

export default function Container(props: BoxProps): ReactElement {
  return <CustomBox position="relative" overflow="hidden" {...props} />;
}
