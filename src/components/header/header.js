import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { FaApple,FaSignInAlt,FaSignOutAlt } from "react-icons/fa";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "./header.ui.js";


import Button from "../CustomButtons/Button";



import styles from "./navbarsStyle.js";

const useStyles = makeStyles(styles);

const HHeader=(props)=>{
  
  
  
  




    const classes = useStyles();
  return(

    <Header
   
    color="dark"
    fixed
    changeColorOnScroll={{
        height: 400,
        color: "white"
      }}

    rightLinks={
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
         
        
          <Button
           
            className={classes.navLink}
            
            color="transparent"
          
          >
            
            Discover
            <FaApple style={{marginLeft:5,marginBottom:2}}></FaApple>
          </Button>
        
        </ListItem>
        <ListItem className={classes.listItem}>
          {
          
          
           
          <Button
            
            className={classes.navLink}
            
            color="transparent"
          
            
          >
            Log out
            <FaSignOutAlt style={{marginLeft:5}}></FaSignOutAlt>
          </Button>
        
        }
       
        </ListItem>
        <ListItem className={classes.listItem}>
        
        </ListItem>
        <ListItem className={classes.listItem}>
         
        </ListItem>
      </List>
    }
  />

)


}






export default HHeader;