import {  Card, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  Tablemain:{
    [theme.breakpoints.down('sm')]: {
        width:'150%'
      },
    width:'100%',
    margin:'auto'
  },
  forCard:{
    padding:'20px 20px', margin:'50px 0',
    [theme.breakpoints.down('sm')]: {
        overflowX:'scroll'
      },
  },
  innerDiv:{
    border:'1px solid #e4e5e7',
  },
  forHeadings:{
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 45px',
    backgroundColor:'#1f9de7',
    color:'white',
    borderBottom:'1px solid #e4e5e7',
  },
  forAll:{
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 60px',
    borderBottom:'1px solid #e4e5e7',
    '&:hover':{
      backgroundColor:'#1f9de7',
      color:'white',
    }
  },
  forText:{
    margin:'auto 20px'
  },

}))

const SalesReport = () => {
  const data = [
    {
     date:'12-3-2021',
     name:'Ab Tech Pharma',
     number:'12',
     amount:'30000'
    },
    {
      date:'12-3-2021',
      name:'Ab Tech Pharma',
      number:'13',
      amount:'30000'
     },
             
  ]
  const classes = useStyles();

  const handleEdit = () => {
    alert("Successfully Edited")
  }
  const handleDelete = () => {
    alert("Successfully Deleted")
  }
  return (
    <div style ={{padding:'40px 20px', fontFamily:'MyFirstFont'}}>
      <h1 style ={{margin:'5px 0'}}>Sales Report</h1>
     
      <Card className = {classes.forCard}>
        <h2 style ={{margin:'10px 0'}}>Sales Report </h2>
      <div className = {classes.Tablemain}>
       <div className = {classes.innerDiv}>
         <div className = {classes.forHeadings}>
         <h3 className={classes.forText}>Sales Date</h3>
         <h3 className={classes.forText}>Invoice Number</h3>
         <h3  className={classes.forText}>Customer Name</h3>
         <h3  className={classes.forText}>Total Amount</h3>
         </div>
         {data.map((item)=>(
            <div className = {classes.forAll}>
            <p className={classes.forText} >{item.date}</p>
            <p className={classes.forText} >{item.number}</p>
            <p className={classes.forText} >{item.name}</p>
            <p className={classes.forText} >{item.amount}</p>
            </div>
         ))}
        
        </div>        
    </div>
      </Card>
      
    </div>
   
  );
};

export default SalesReport;