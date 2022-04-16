import React from 'react'
import { Paper, Box, Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   paper:{
     
     display: "flex",
     justifyContent: "center"
   },
   leftBox:{
     background: "#ffffff",
     width: "800px",
     height: window.innerHeight,
    
     
   },
   rightBox:{
    background: "#00c853",
    width: "800px",
    height: window.innerHeight
  },
  text1:{
    fontFamily: "poppins",
    fontSize: "30px",
    height: "10px",
    color: "black", 
    marginTop: "50px",
    marginBottom: "50px",
    marginLeft: "100px"
    
  },
  leftContainer:{
    paddingLeft: "100px",
    
    
     
  },
  ContainerPaper:{
    height: "600px",
    width: "600px",
   
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignContent: "center",
    alignItems: "center",  
  },
  tf1:{
   
    marginTop: "20px",
    marginBottom: "20px",
    width: "500px",
    maxWidth: "100%",
    color: "#843101",
   
  },
  RegisterButton:{
   marginTop: "20px"
  }
})
function Login() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.paper}>
        <Box className={classes.leftBox}>
          <Typography className={classes.text1}>
            Sign up
          </Typography>

          <Box className={classes.leftContainer}>
            <Paper className={classes.ContainerPaper}>            
            <Box>
            <TextField className={classes.tf1}
            required  
            fullWidth
            label="Full Name"
            variant="outlined" 
            color='secondary'
            />
            </Box>
            <Box>
            <TextField className={classes.tf1} 
            required
            fullWidth
             label="Email"
            variant="outlined"
            color='secondary' 
            />
            </Box>
            <Box>
            <TextField className={classes.tf1} 
            required 
            fullWidth
            label="Password" 
            variant="outlined" 
            color='secondary'
            />
            </Box>
            <Box>
            <TextField className={classes.tf1}
            required
            fullWidth  
            label="Confirm Password" 
            variant="outlined" 
            color='secondary'
            />
            </Box>
            <Box>
              <Button className={classes.RegisterButton}
              variant="contained"
              type='submit'
              color='secondary'>
                  Register
              </Button>
            </Box>
            </Paper>
          </Box>
        </Box>

        <Box className={classes.rightBox}>
          
        </Box>
      </Box>
    </div>
  )
}

export default Login