import { Button, createStyles, withStyles } from "@material-ui/core";

const AppButton = withStyles(() =>
  createStyles({
    root: {
      borderRadius: 20,
      padding: "6px 36px",
      textTransform: "none",
      marginLeft: "auto",
      marginRight: "auto",
    },
    label: {
      color: "#FFFFFF",
      fontSize: "1rem",
      fontFamily: ["Newsgoth", "sans-serif"].join(","),
      padding: 0,
    },
  })
)(Button);

export default AppButton;
