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

export function Contact(): ReactElement {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [error, setError] = useState("");

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

    const response = await post({
      name,
      email,
      message,
    });
    console.log("response", response);
    if (!response.success && !!response.error) {
      setError(response.error);
    }
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
    setError("");
  }

  return (
    <div className="component-container contact-container">
      <Typography variant="h4">Want to get in touch?</Typography>
      <Typography variant="h4">Drop me a line!</Typography>
      <FormControl className="contact-form" margin="normal">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              error={!!nameError}
              label="NAME"
              variant="outlined"
              margin="normal"
              fullWidth={true}
              helperText={nameError}
              onChange={onNameChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={!!emailError}
              label="EMAIL"
              variant="outlined"
              margin="normal"
              fullWidth={true}
              helperText={emailError}
              onChange={onEmailChange}
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
      >
        SUBMIT
      </Button>
      <Snackbar open={!!error} autoHideDuration={5000} onClose={onAlertClose}>
        <Alert onClose={onAlertClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}
