import React, { ReactElement, useState } from "react";
import {
  Box,
  Grid,
  Snackbar,
  TextField,
  Typography,
  withStyles,
  createStyles,
  makeStyles,
  TextFieldProps,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { post } from "../../util/poster";
import "./Contact.css";
import AppButton from "../common/AppButton";
import Circle from "../common/Circle";

const SEND_CONTACT_URL = "/contact";
const SUBMIT = "Send Message";

const useStyles = makeStyles(() => ({
  label: {
    color: "#B8AEAE",
  },
}));

const ContactBox = withStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      padding: "80px 54px 140px 54px",
      [theme.breakpoints.down("xs")]: {
        padding: "80px 10px",
        alignItems: "center",
      },
    },
  })
)(Box);

const ContactTitle = withStyles((theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
  })
)(Typography);

const TextGridBox = withStyles((theme) =>
  createStyles({
    root: {
      paddingLeft: "40px",
      paddingRight: "40px",
      marginTop: "100px",
      marginBottom: "60px",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
  })
)(Box);

function TextInput(props: TextFieldProps) {
  const classes = useStyles();
  return (
    <TextField
      margin="normal"
      fullWidth={true}
      InputLabelProps={{
        className: classes.label,
      }}
      {...props}
    />
  );
}

export default function Contact(): ReactElement {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [alert, setAlert] = useState({ isError: false, message: "" });
  const [isLoading, setLoading] = useState(false);

  function isValidEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  async function onSubmit() {
    if (name === "") {
      setNameError("Cannot be empty");
      return;
    }
    if (email === "") {
      setEmailError("Cannot be empty");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("Not valid");
      return;
    }
    if (message === "") {
      setMessageError("Cannot be empty");
      return;
    }
    setLoading(true);

    const contactRequest = {
      name,
      email,
      message,
    };
    const response = await post(SEND_CONTACT_URL, contactRequest);

    setLoading(false);
    if (response.error) {
      setAlert({ isError: true, message: response.error });
      return;
    }

    setName("");
    setEmail("");
    setMessage("");

    setAlert({
      isError: false,
      message: "Thank you for contacting me. I will get back to you soon.",
    });
  }

  function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameError("");
    setName(e.target.value);
  }

  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailError("");
    setEmail(e.target.value);
  }

  function onMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessageError("");
    setMessage(e.target.value);
  }

  function onAlertClose() {
    setAlert({ isError: false, message: "" });
  }

  return (
    <ContactBox id="contact">
      <Circle diameter="320px" right={-160} bottom={-160} transparency={0.3} />
      <ContactTitle variant="h3">Want to get in touch?</ContactTitle>
      <TextGridBox>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <TextInput
              error={!!nameError}
              label="NAME"
              helperText={nameError}
              onChange={onNameChange}
              value={name}
              disabled={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              error={!!emailError}
              label="EMAIL"
              type="email"
              helperText={emailError}
              onChange={onEmailChange}
              value={email}
              disabled={isLoading}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              error={!!messageError}
              label="MESSAGE"
              multiline
              maxRows={10}
              helperText={messageError}
              onChange={onMessageChange}
              value={message}
              disabled={isLoading}
            />
          </Grid>
        </Grid>
      </TextGridBox>
      <AppButton
        variant="contained"
        color="primary"
        className="submit-button"
        size="large"
        onClick={onSubmit}
        disabled={isLoading}
      >
        {SUBMIT}
      </AppButton>
      <Snackbar
        open={!!alert.message}
        autoHideDuration={5000}
        onClose={onAlertClose}
      >
        <Alert
          onClose={onAlertClose}
          severity={alert.isError ? "error" : "success"}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </ContactBox>
  );
}
