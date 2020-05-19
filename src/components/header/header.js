import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { FaApple,FaSignInAlt,FaSignOutAlt } from "react-icons/fa";
import ListItem from "@material-ui/core/ListItem";
import {Link} from 'react-router-dom';
// core components
import Header from "./header.ui.js";


import Button from "../CustomButtons/Button";



import styles from "./navbarsStyle.js";

const useStyles = makeStyles(styles);

const HHeader=(props)=>{
  const classes = useStyles();
  return(
<Header
   
    color="white"
    fixed
    changeColorOnScroll={{
        height: 400,
        color: "white"
      }}

    rightLinks={
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link
            className={classes.navLink}
            color="transparent"
            to="/pages"
          >
            
            Pages
            <FaApple style={{marginLeft:5,marginBottom:2}}></FaApple>
          </Link>
        
        </ListItem>
        <ListItem className={classes.listItem}>
          {
          
          
           
          <Link
            
            className={classes.navLink}
            
            color="transparent"
            to="/"
            
          >
            Log out
            <FaSignOutAlt style={{marginLeft:5}}></FaSignOutAlt>
          </Link>
        
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