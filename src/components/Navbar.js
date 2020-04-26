import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
AppBar,
Toolbar,
ListItem,
ListItemIcon,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box,    
} from "@material-ui/core";
import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail    
} from "@material-ui/icons";
//import avatar from "../avatar.png";

//CSS Styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}));

//Icons
const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
    }
]

const Navbar = () => {
    //State
    const [state, setState] = useState({
        right: false
    })

    //toggle method
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open });
    }

    const classes = useStyles();

    //Sidebar
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
        <Avatar className={classes.avatar} src="" alt="" />
        <Divider />
        <List>
            {menuItems.map((lsItem, key)=>(
              <ListItem button>
              <ListItemIcon className={classes.listItem}>
                  {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText primary={lsItem.listText}/>
              </ListItem>
            ))}
        </List>
    </Box>
    )
    return (
        <>
      <Box component="nav">
          <AppBar position="static" style={{background: "#222"}}>
              <Toolbar>
                  <IconButton onClick={toggleSlider("right", true)}>
                    <ArrowBack style={{color: "tomato"}} />   
                  </IconButton>  
                  <Typography variant="h5" style={{color: "tan" }}>
                      Portfolio      
                </Typography>
                <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                    {sideList("right")}
                </MobilRightMenuSlider>  
              </Toolbar>
          </AppBar>
      </Box>
      </>
    )
}

export default Navbar;