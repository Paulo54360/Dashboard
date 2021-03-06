import * as React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import {GoogleLogin, useGoogleLogin} from "react-google-login";
import MuiAlert from "@mui/material/Alert"; // import pour la snackbar //
import {
  Mail,
  Visibility,
  VisibilityOff,
  Telegram,
} from "@mui/icons-material/";
import {
  TextField,
  Box,
  Button,
  IconButton,
  Input,
  InputLabel,
  FormControl,
  Stack, // import pour la snackbar //
  Snackbar, // import pour la snackbar //
} from "@mui/material";

export default function LoginPage() {
  const clientId = "296827698360-5gnsjctmsgk95nim57a3hlnrlsqi6f4k.apps.googleusercontent.com";
  const [inputs, setInputs] = useState({});
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState(false);

  const [open, setOpen] = React.useState(false); // import pour la snackbar début //

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }; // import pour la snackbar //
  
  // GOOGLE LOGIN //
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
  };
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };
  const {signIn} = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType:'offline',
  });
  // GOOGLE LOGIN //

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

 // MONTRER / CACHER PSSWD //
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
 // MONTRER / CACHER PSSWD //

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(inputs),
    };
    fetch(`http://localhost:3000/api/login`, requestOptions)
      .then((response) => {
        if (response.status === 401) {
          setError(true);
        }
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setTimeout(() => {
          setLogged(true);
        }, 1000);
        setUser(data);
      })
      .catch((error) => {
        console.log("an error occured when fetching put data", error);
      }); 
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Box>
      {logged &&
        user &&
        user.role === 2 &&
        JSON.parse(localStorage.getItem("userInfo")) && <Navigate to="/" />}
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Mail sx={{ color: "action.active", mr: 1, my: 3 }} />{" "}
            <TextField //mail//
              required
              value={TextField.name}
              onChange={handleChange}
              type="email"
              id="outlined-required"
              name="email"
              label="email"
              variant="standard"
              margin={"dense"}
            />
          </Box>
          <IconButton sx={{ mr: 1, my: 4.5 }} onClick={handleClickShowPassword}>
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
          <FormControl sx={{ m: 1, my: 3, width: "25ch" }}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input //password
              required
              value={TextField.name}
              onChange={handleChange}
              type={values.showPassword ? "text" : "password"}
              id="standard-adornment-password"
              name="password"
              label="Password"
              variant="standard"
            />
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
            {" "}
            {/* debut code snackbar */}
            <Stack spacing={2} sx={{ width: "15 ch" }}>
              <Button onClick={handleClick} type="submit" variant="contained">
                <Telegram sx={{ color: "inharite", mr: 2 }} />
                Log in
              </Button>
              {error && (
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    Error login
                  </Alert>
                </Snackbar>
              )}
              {/* fin code snackbar */}
            </Stack>
          </Box>
          <GoogleLogin
            clientId={clientId}
            buttonText="LOG IN"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            style={{marginTop: '100px'}}
            isSignedIn={true}
            />
        </form>
      </Box>
    </Box>
  );
}