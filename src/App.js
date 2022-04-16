import React, {Component} from 'react';
import './App.css';
import { Typography, AppBar, Card, CssBaseline, createTheme, Grid, Toolbar, IconButton, Icon, MenuIcon, SearchIcon, Box, ThemeProvider } from '@material-ui/core'
import '@fontsource/poppins'
import '@fontsource/roboto'
import '@fontsource/cinzel'
import Dashboard from "./Pages/Dashboard"
import { Palette } from '@material-ui/icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./Pages/Login"
const theme = createTheme({
  typography: {
    h5:{
      fontFamily: "Cinzel",
      fontWeight: "bolder",
      color: "#00c853"

    },
    h6:{
      fontFamily: "poppins",
      color: "#00c853"
    },
    button:{
      fontFamily: "poppins",
      
    },
    tab:{
      color: "#000000"
    },
  
  },
  palette:{
    text:{
      primary: '#546e7a',
      secondary : '#78909c'
    },
    primary:{
      main: '#fefefe'
    },
    secondary:{
      main: '#00c853'
    },
    
   
  }
}) 

export default class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/">
             <Dashboard/>
            </Route>
            <Route path="/login">
               <Login/>
            </Route>
          </Switch>
            
        </ThemeProvider>
      </Router>
   
    )
  }

}

