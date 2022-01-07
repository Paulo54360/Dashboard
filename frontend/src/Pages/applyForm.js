import React from "react";
import {GoogleLogin, useGoogleLogin} from "react-google-login";
import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  IconButton,
  Input,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";

import {
  AccountCircle,
  Female,
  Male,
  Cake,
  Telegram,
  Mail,
  Visibility,
  VisibilityOff,
  Phone,
} from "@mui/icons-material/";

export default function SignupField(props) {
  const clientId = "296827698360-5gnsjctmsgk95nim57a3hlnrlsqi6f4k.apps.googleusercontent.com";
  const [inputs, setInputs] = useState({});
  const [isRecruiter, setisRecruiter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false); // import pour la snackbar début //

  useEffect(() => {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    fetch("http://localhost:3000/api/google", {
      headers: myHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  const recruiter = () => {
    console.log("recruiter function", isRecruiter);
    setisRecruiter(!isRecruiter);
  };

  //début icon password  //
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));


  }; // fin icon password  // 

  const handleSubmit = (event) => {
    event.preventDefault();
    //const mail = event.target.email;
    //let mail = TextField.email;
    // var mail = document.getElementById('email').value
    // const mdp = event.target.password;
    // const nom = event.target.name;
    // const prenom = event.target.firsname;
    // const telephone = event.target.phone;
    // const age = event.target.age;
    // const genre = event.target.sexe;


    //const value = event.target.value;
    // inputs ["mail"] = inputs("email");
    // inputs ["mdp"] = inputs("password");
    // inputs ["nom"] = inputs("name");
    // inputs ["prenom"] = inputs("firstname");
    // inputs ["telephone"] = inputs("phone");
    // inputs ["age"] = inputs("age");
    // inputs ["genre"] = inputs("sexe");

    inputs["sexe"] = parseInt(inputs["sexe"]);
    inputs["created_at"] = "2021-10-04T13:52:23+00:00";
    console.log("inputs", inputs);

    console.log(inputs);
  /*   const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(inputs),
    };*/

      // fetch("http://localhost:8080/utilisateur/ajout?mail=" + mail + "&mdp=" + mdp + "&nom" + nom + "&prenom"+ prenom + "&telephone"+ telephone + "&age"+ age + "&genre"+ genre)
      // .then((response) => {
      //   if (response.status === 401) {
      //     setError(true);
      //   }
      //   return response.json();
      // })
      // .then((data) => {
      //   console.log("data", data);
      // })
      // .catch((error) => {
      //   console.log("an error occured when fetching put data", error);
      // }); 
  };
    
 

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 3 }} />{" "}
          <TextField //name//
            required
            value={TextField.name}
            onChange={handleChange}
            type="text"
            id="standard-size-normal"
            name="name"
            label="Name"
            variant="standard"
            margin={"dense"}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 3 }} />
          <TextField //nom//
            required
            value={TextField.name}
            onChange={handleChange}
            type="text"
            id="outlined-required"
            label="First Name"
            name="firstname"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Mail sx={{ color: "action.active", mr: 1, my: 3 }} />
          <TextField //mail//
            required
            value={TextField.name}
            onChange={handleChange}
            type="email"
            id="outlined-required"
            label="email"
            name="email"
            variant="standard"
          />
        </Box>
        <IconButton sx={{ pt: 2 }} onClick={handleClickShowPassword}>
          {values.showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
        <FormControl sx={{ mx: 2, width: "25ch" }}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input //password
            required
            value={TextField.name}
            onChange={handleChange}
            type={values.showPassword ? "text" : "password"}
            id="standard-size-normal"
            label="Password"
            name="password"
            variant="standard"
          />
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Phone sx={{ color: "action.active", mr: 1, my: 3 }} />
          <TextField // numéro téléphone //
            required
            value={TextField.name}
            onChange={handleChange}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            minlength="10"
            maxLength="10"
            id="outlined-required"
            label=" Phone "
            name="phone"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Cake sx={{ color: "action.active", mr: 1, my: 3 }} />
          <TextField //age//
            required
            onChange={handleChange}
            value={TextField.name}
            type="number"
            id="standard-size-normal"
            label=" Age "
            name="age"
            variant="standard"
          />
        </Box>
        <Box>
          <FormControl component="fieldset">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel component="legend">Gender</FormLabel>
            </Box>
            <RadioGroup //SEXE//
              row
              value={TextField.name}
              onChange={handleChange}
              aria-label="gender"
              name="sexe"
            >
              <Female sx={{ color: "action.active", mr: 1, my: 3 }} />
              <FormControlLabel value={2} control={<Radio />} label="woman" />
              <Male sx={{ color: "action.active", mr: 1, my: 3 }} />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="man"
                margin={"dense"}
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", my: 2, mr: 3 }}>
          <Button type="submit" variant="contained">
            <Telegram sx={{ color: "inharite", mr: 2 }} />
            Sign in
          </Button>
          {error && (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Error register
              </Alert>
            </Snackbar>
          )}
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
  );
}
