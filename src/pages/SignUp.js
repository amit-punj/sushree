import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack, Alert } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
export default function SignUp() {
  const [firstname, setFirstname] = React.useState();
  const [lastname, setLastname] = React.useState();
  const [email, setEmail] = React.useState();
  const [pass, setPass] = React.useState();
  // Input Errors
  const [firstnameError, setFirstnameError] = React.useState(false);
  const [lastnameError, setLastnameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passError, setPassError] = React.useState(false);

  // state for form validation
  const [formvalid, setFormvalid] = React.useState();

  // state for sucessfull submission of form
  const [success, setSuccess] = React.useState();
  //email check function
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  //Validation for onBlur Username
  const handlefirstname = () => {
    console.log(firstname);
    if (!firstname) {
      setFirstnameError(true);
      return;
    }
    setFirstnameError(false);
  };

  //validation for onBlur lastname
  const handlelastname = () => {
    console.log(lastname);
    if (!lastname) {
      setLastnameError(true);
      return;
    }
    setLastnameError(false);
  };

  //validation for onBlur email
  const handleEmail = () => {
    console.log(isEmail(email));
    if (!isEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  //validate for onBlur password
  const handlePassword = () => {
    if (!pass || pass.length < 5 || pass.length > 20) {
      setPassError(true);
      return;
    }
    setPassError(false);
  };

  // submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(null);

    if (firstnameError || !firstname) {
      setFormvalid("Enter First Name");
      return;
    }
    if (lastnameError || !lastname) {
      setFormvalid("Enter Last Name");
      return;
    }
    if (emailError || !email) {
      setFormvalid("Enter Valid Email Id");
      return;
    }
    if (passError || !pass) {
      setFormvalid(
        "Password is set btw 5 - 20 characters long. Please Re-Enter"
      );
      return;
    }
    setFormvalid(null);

    // Proceed to use the information passed
    console.log("First Name : " + firstname);
    console.log("Last Name : " + lastname);
    console.log("Email : " + email);
    console.log("Password : " + pass);

    //Show Successfull Submittion
    setSuccess("Form Submitted Successfully");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{ marginRight: 10 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  error={firstnameError}
                  onBlur={handlefirstname}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  error={lastnameError}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  onBlur={handlelastname}
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={emailError}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleEmail}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={passError}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  onBlur={handlePassword}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {formvalid && (
              <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                <Alert severity="error" size="small">
                  {formvalid}
                </Alert>
              </Stack>
            )}
            {success && (
              <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                <Alert severity="success" size="small">
                  {success}
                </Alert>
              </Stack>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
