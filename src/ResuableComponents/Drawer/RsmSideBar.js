import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as Dashboard}from '../../assets/icons/dashboard.svg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    
  root: {
    width: '100%',
  },
  options:{
      margin:'5px auto',
      marginLeft:'30px',
      fontSize:'13px',
      cursor:'pointer',
       
      "&:hover": {
         
          cursor:'pointer',
         
     },
  },
  forLi:{
    margin:'auto 0',
    marginLeft:'5px',
    fontSize: '16px',
    
  },

  Main:{
      boxShadow:'unset',
     padding:'10px 15px',
     fontSize:'14px',
    borderBottom:'none',
      backgroundColor:'transparent',
      color:'gray',
      borderRadius:'none', 
      "&.MuiAccordion-root.Mui-expanded":{
          background:'transparent',
          color:'gray'
      }
  },
  icon:{
      fill:'gray',
      margin:'auto'
  },
  forImage:{
    width: '13%',
    margin:'auto 0',
    marginRight:'5px',
    height:'fit-content',
    fill:'#7ac1ff'
  },
  list:{
    listStyleType: 'none',
    margin:'0',
    padding:'0',
    width:'100%'
  },
  midDiv:{
    display:'flex', 
    cursor:'pointer',

     "&:hover": {
         color:'gray',
         cursor:'pointer',
         
    }
},

link:{
    textDecoration:'none',
    color:'inherit'
}
}));

export default function RsmSideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className = {classes.Main}>
        <AccordionSummary className = {classes.midDiv}
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Dashboard className = {classes.forImage}/>
          <h3 className={classes.forLi}>Manager Report</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <Link  className = {classes.link} to = "/manager-report"><li className = {classes.options}>Show Report</li></Link>
              
          </ul>
     
      </Accordion>
      <Accordion className = {classes.Main}>
        <AccordionSummary className = {classes.midDiv}
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Dashboard className = {classes.forImage}/>
          <h3 className={classes.forLi}>Tour Program</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <Link  className = {classes.link} to = "/tour-of-rsm"><li className = {classes.options}>Tp Of RSM With ASM</li></Link>
              
          </ul>
     
      </Accordion>
      <Accordion className = {classes.Main}>
        <AccordionSummary className = {classes.midDiv}
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Dashboard className = {classes.forImage}/>
          <h3 className={classes.forLi}>Gift</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <Link  className = {classes.link} to = "/gift-management"><li className = {classes.options}>Gift Management</li></Link>  
          </ul>
      </Accordion>
      <Accordion className = {classes.Main}>
        <AccordionSummary className = {classes.midDiv}
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Dashboard className = {classes.forImage}/>
          <h3 className={classes.forLi}>Order</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <Link  className = {classes.link} to = "/order-management"><li className = {classes.options}>Order Management</li></Link>
          </ul>
      </Accordion>
      <Accordion className = {classes.Main}>
        <AccordionSummary className = {classes.midDiv}
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Dashboard className = {classes.forImage}/>
          <h3 className={classes.forLi}>ASM Report</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <Link  className = {classes.link} to = "/daily-asm-report"><li className = {classes.options}>Daily Report OF ASM</li></Link>  
          </ul>
      </Accordion>
    </div>
  );
}