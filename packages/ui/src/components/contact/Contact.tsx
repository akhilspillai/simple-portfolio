import React, { ReactElement, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { post } from "../../util/poster";
import "./Contact.css";

const SEND_CONTACT_URL = "/contact";

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
    <div className="component-container contact-container">
      <Typography variant="h4">Want to get in touch?</Typography>
      <Typography variant="h4">Drop me a line!</Typography>
      <FormControl className="contact-form" margin="normal">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <TextField
              error={!!nameError}
              label="NAME"
              variant="outlined"
              margin="normal"
              fullWidth={true}
              helperText={nameError}
              onChange={onNameChange}
              disabled={isLoading}
              value={name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              error={!!emailError}
              label="EMAIL"
              variant="outlined"
              margin="normal"
              type="email"
              fullWidth={true}
              helperText={emailError}
              onChange={onEmailChange}
              disabled={isLoading}
              value={email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!!messageError}
              label="MESSAGE"
              variant="outlined"
              multiline
              rows={10}
              margin="normal"
              fullWidth={true}
              helperText={messageError}
              onChange={onMessageChange}
              disabled={isLoading}
              value={message}
            />
          </Grid>
        </Grid>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className="submit-button"
        size="large"
        onClick={onSubmit}
        disabled={isLoading}
      >
        SUBMIT
      </Button>
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
    </div>
  );
}
