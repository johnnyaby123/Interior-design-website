import React, {useEffect, useState} from 'react'
import { Typography, AppBar, Avatar, CssBaseline, Grid, Toolbar,Tab,Tabs, IconButton, Icon,Item, MenuIcon, Box, color, Button, Paper, ButtonGroup, Slide, Collapse } from '@material-ui/core'
import {Home, Search} from '@material-ui/icons'
import '@fontsource/poppins'
import '@fontsource/roboto'
import '@fontsource/catamaran'
import '@fontsource/cinzel'
import '@fontsource/pacifico'
import "./Dashboard.css";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import  Carousel from 'react-elastic-carousel'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import {makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import logo4 from "../images/logo4.png"
import avatar from "../images/avatar.jpg"
import { display, textAlign } from '@mui/material/node_modules/@mui/system'

const useStyles = makeStyles({
    tabs:{
        marginLeft: "auto"
    },
    btn1:{
        marginLeft: "auto"
    },
    btn2:{
        marginLeft: "10px"
    },
    mainbody:{
        background: "#ffffff",
        height: window.innerHeight,
        maxHeight: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
    },
    maintext1:{
        fontFamily: "catamaran",
        color: "#65657E",
        fontSize: "80px",
        fontWeight: "bold",
        marginTop: "90px"
    },
    subtext:{
        fontFamily: "catamaran",
        fontSize: "15px",
        color: '#65657E',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
       // alignContent: "center",
        alignItems: "center",
        marginBottom: "50px"
    },
    Trust:{
        textAlign: "center",
        background: "no-background",
        display: "flex",
        flexDirection: "column",
         justifyContent: "center",
        alignItems: "center",
        height: "400px",
    },
    trustText: {
        fontFamily: "poppins",
        fontSize: "20px",
        fontWeight: "Bold",
        marginTop: "40px"

    },
    trustLogo1: {
        height: "200px",
        width: "377px"
    },
    trustLogo2: {
        height: "200px",
        width: "482px",
    },
    logoContainer:{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    backImage:{
      backgroundImage: `url(${img2})`,
      height: "600px",
      maxWidth: "100%",
      width: window.innerWidth,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ffffff",
    },
    testimonialSub:{
       

    },
    testimonialsCard:{
        
        

    }
})
export function Header() {
    const classes = useStyles()
    return(
        
        <React.Fragment>
            <CssBaseline/>
        <AppBar 
        sx={{
            backgroundColor: "primary",
        }} 
        position="fixed"
        >           
                <Toolbar>
                    <Typography variant="h5" color='#000000' sx={{fontFamily:"poppins"}}>
                        Dudu's Design
                    </Typography>
                    <Tabs
                        className={classes.tabs}
                        variant='h6' 
                        sx={{ marginLeft: "auto", color: "primary"}} 
                        >
                        <Tab className={classes.active} label="Home" />   
                        <Tab label="Products" />
                        <Tab label="Services" />
                        <Tab label="Contact" />
                        <Tab label="About us" />
                        
                    </Tabs>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <Search/>
                    </IconButton>
                    
                        <Button className={classes.btn1} color="secondary"  sx={{marginLeft: "auto"}} variant="outlined" size="medium">
                        <Link to={"/login"} underline={"none"}>
                              Register
                            </Link>
                        </Button>
                        <Button className={classes.btn2} color="secondary"  sx={{marginLeft: "10px"}} variant="contained" size="medium">
                            <Link to={"/login"} underline={"none"}>
                            
                              Sign in
                            </Link>
                            
                        </Button>
                </Toolbar>
        </AppBar>
        </React.Fragment>
    );
}
const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
export function Body(){
    const classes = useStyles(); 
    const [checked,setChecked] = useState(false);
    
    useEffect(() =>{
        setChecked(true);
    },[])
    return(
        <React.Fragment>
             <CssBaseline/>
             <Collapse
             orientation= "vertical"
             in={checked}
             { ... (checked ? {timeout: 1000} : {})}
             collapsedHeight={50}>
             
             </Collapse>
            <Box className={classes.mainbody}>
                <Box >
                          <Typography 
                          className={classes.maintext1}>
                           Make room for better living.
                           </Typography> 
                         
                           <Typography 
                           align='center'
                           className={classes.subtext}
                           > Bring your dream home to life with one-on-one design help and hand-picked <br/> product tailoredto your style, space, and budget. 
                           </Typography> 
                </Box>

        <Box className={classes.backImage}>
            
        </Box>
        </Box>
        <Box className={classes.Trust}>
           <Typography className={classes.trustText}>
               TRUSTED BY OVER 100 COMPANIES
           </Typography>
           <Box className={classes.logoContainer}>
               <Box>
               <img className={classes.trustLogo1} src={logo1}/>
               </Box>
               <Box>
               <img className={classes.trustLogo2} src={logo2}/>
               </Box>
               <Box>
               <img className={classes.trustLogo4} src={logo4}/>
               </Box>  
           </Box>
        </Box>
        <div className="testimonials"
        style={{
            background: "#ffffff",
        width: window.innerWidth,
        height: "500px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
       // alignItems: "center",
        }}>
            <div style={{
                width: "50%"
            }}>
                <Typography style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    color: "lightgray",
                    textAlign: "center",
                    marginTop: "50px"
                }}>
                    TESTIMONIALS
                </Typography>
                <h2 style={{
                    fontFamily: "poppins",
                    fontSize: "25px",
                    color: "gray",
                    textAlign: "center",
                    marginTop: "20px"
                }}
                >
                    What our client say about us.
                </h2>
            <Slider
            // prevArrow={<PreviousBtn />}
            // nextArrow={<NextBtn />}
            dots
            autoplay
            autoplaySpeed={2500}
            style={{
                marginTop: "50px"
            }}
            >
                <Card className={classes.testimonialsCard} img={avatar}/>
                <Card className={classes.testimonialsCard} img={avatar}/>
                <Card className={classes.testimonialsCard} img={avatar}/>
            </Slider>
            </div>
            
        </div>
        <div className='aboutUs'
        style={{
            width: window.innerWidth,
            height: "800px",
            background: "#ffffff",
            marginTop: "2px",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            

        }}>
                
                <Box
                style={{
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center", 
                    backgroundImage: `url(${img2})`,
                    backgroundPosition: "center",
                    width: "500px",
                    height: "600px",
                    align: "center",
                    backgroundSize: "cover",
                    marginLeft: "700px"
                }}>
                <Box>
                    <Paper
                    style={{
                        background: "#ffffff",
                        width: "700px",
                        height: "400px",
                        borderRadius: "0px",
                        marginLeft: "-400px",
                        marginTop: "100px",
                        opacity: "0.95",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                       // alignItems: "center"

                    }}
                    >
                        <h3
                        style={{
                            fontFamily: "catamaran",
                            fontWeight: "bold",
                            color: "#000000",
                            
                            fontSize: "40px",
                            marginTop: "40px",
                            marginLeft: "60px"
                        }}>
                            About Us
                        </h3>
                        <p style={{
                            marginLeft: "60px",
                            fontFamily: "poppins",
                            fontSize: "11px",
                            
                        }}>
                        Sí quale sí uomini la il alli. Uomini fosse essaudisce etterno <br/> noi ora come temporali. Grazia esperienza noi sua al e giudice, <br/> non mortali alle facitore intendo cospetto mortali verso. <br/> Cose di non prestasse del esperienza quella le, tale delle piaceri <br/> son sono esso che parte, in essilio sí una.
                         </p>
                         <p style={{
                             color: "#00c853",
                             fontFamily: "poppins",
                             fontSize: "11px",
                             fontWeight: "bold",
                             marginLeft: "60px",
                             marginTop: "40px"

                         }}>Read more</p>

                    </Paper>
                
                
                </Box> 
                </Box>
            

            </div>
       
        

        </React.Fragment>
       
        
    );
}
function Card({img}) {
    return (
        <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "column",
        textAlign: "center"
        }}>
            <Avatar 
            imgProps={{style: {borderRadius: '50%'}}}
            src={img}
            style={{
                width: 120, 
                height: 120,
                border: '3px solid #00c853',
                }}/>
            <p style={{fontFamily: "roboto"}}>
                Tempor dolor vero voluptua ut dolores sadipscing clita ea elitr. Et sadipscing ea stet et, eirmod takimata duo voluptua invidunt accusam accusam ipsum, elitr ipsum lorem justo vero vero accusam et dolores eirmod. Duo lorem dolor sadipscing eirmod ipsum accusam.
            </p>
            <p style={{fontStyle: "italic", marginTop:"10px"}}> <span style={{ fontFamily: "poppins" ,fontWeight: "700px",color: "#00c853"}}> YOHANNES ABAYNEH</span>, Media Analyst</p>
            
        </div>
        
    )
}


export default function Dashboard() {
    return(
       <>
       <Header/>
       <Body/>
       </>       
    );
  
}

