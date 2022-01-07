import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import {Box,
  Toolbar,
  AppBar,  
  Button,
  IconButton,
  List,
  ListItem,
  Drawer,
} from '@mui/material';
import{makeStyles} from "@mui/styles"
 import { Link } from "react-router-dom";
import { flexbox } from '@mui/system';
  export default function ButtonAppBar() {

    const [state, setState] = useState({
      left: false,
    });
    const [user, setUser] = useState(null);
    const toggleDrawer = (open) => (event) => {
      if (event.type === "keydown") {
        return;
      }
      setState({ ...state, left: open });
    };
  
    useEffect(() => {
      let userLocal = JSON.parse(window.localStorage.getItem("userInfo"));
      setUser(userLocal);
    }, []);
  
    const useStyles = makeStyles((theme) => ({
      navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
        alignItems: "center",
      },
      link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
          color: "white",
          borderBottom: "1px solid white",
        },
      },
      linkmobile: {
        textDecoration: "none",
        color: "blue",
        fontSize: "14px",
        marginLeft: theme.spacing(20),
        "&:hover": {
          color: "blue",
          borderBottom: "1px solid blue",
        },
      },
    }));

    const list = (text) => (
      <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      
            <List>
              {" "}
              {/* Home/Adervtisements */}
              <Link to="/">
                <ListItem button key={text}>
                  Home
                </ListItem>
              </Link>
            </List>
            <List>
              {" "}
              {/*Sign In */}
              <Link to="/Login">
                <ListItem button key={text}>
                  SignIn
                </ListItem>
              </Link>
            </List>
            <List>
              {" "}
              {/*Sign Up*/}
              <Link  to="/connect">
                <ListItem button key={text}>
                  SignUp
                </ListItem>
              </Link>
            </List>
            <List>
              {" "}
              {/*Sign Up*/}
              <Link  to="/userUpdate">
                <ListItem button key={text}>
                  MyAccount
                </ListItem>
              </Link>
              <Link
                to="/connect"
                onClick={() => localStorage.clear()}
              >
                <ListItem button key={text}>
                  LogOut
                </ListItem>
              </Link>
            </List>
            
    </Box>
  )
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
            
          <Button variant="h1" sx={{ flexGrow: 5 }} href="/">
            Epidash
          </Button>
         <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
