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

const ReportMEdicineWise = () => {
  const data = [
    {
     date:'12-3-2021',
     Medname:'DSr',
     Medtype:'Capsule',
     Cusname:'ANKIT',
     price:'60.00',
     amount:'1800'
    },
    {
        date:'12-3-2021',
        Medname:'DSr',
        Medtype:'Capsule',
        Cusname:'ANKIT',
        price:'60.00',
        amount:'1800'
       },
       {
        date:'12-3-2021',
        Medname:'DSr',
        Medtype:'Capsule',
        Cusname:'ANKIT',
        price:'60.00',
        amount:'1800'
       },
       {
        date:'12-3-2021',
        Medname:'DSr',
        Medtype:'Capsule',
        Cusname:'ANKIT',
        price:'60.00',
        amount:'1800'
       }, 
       {
        date:'12-3-2021',
        Medname:'DSr',
        Medtype:'Capsule',
        Cusname:'ANKIT',
        price:'60.00',
        amount:'1800'
       },
       {
        date:'12-3-2021',
        Medname:'DSr',
        Medtype:'Capsule',
        Cusname:'ANKIT',
        price:'60.00',
        amount:'1800'
       },
       {
        date:'12-3-2021',
        Medname:'DSr',
        Medtype:'Capsule',
        Cusname:'ANKIT',
        price:'60.00',
        amount:'1800'
       },
       {
        date:'12-3-2021',
        Medname:'DSr',
        Medtype:'Capsule',
        Cusname:'ANKIT',
        price:'60.00',
        amount:'1800'
       },
       {
        date:'12-3-2021',
        Medname:'DSr',
        Medtype:'Capsule',
        Cusname:'ANKIT',
        price:'60.00',
        amount:'1800'
       },
       {
        date:'12-3-2021',
        Medname:'DSr',
        Medtype:'Capsule',
        Cusname:'ANKIT',
        price:'60.00',
        amount:'1800'
       },
       {
        date:'12-3-2021',
        Medname:'DSr',
        Medtype:'Capsule',
        Cusname:'ANKIT',
        price:'60.00',
        amount:'1800'
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
      <h1 style ={{margin:'5px 0'}}>Sales Report (Medicine Wise)</h1>
      <Card className = {classes.forCard}>
        <h2 style ={{margin:'10px 0'}}> Sales Report (Medicine Wise)</h2>
      <div className = {classes.Tablemain}>
       <div className = {classes.innerDiv}>
         <div className = {classes.forHeadings}>
         <h3 className={classes.forText}>Sales Date</h3>
         <h3  className={classes.forText}>Medicine Name</h3>
         <h3  className={classes.forText}>Medicine Type</h3>
         <h3  className={classes.forText}>Customer Name</h3>
         <h3  className={classes.forText}>Sale Price</h3>
         <h3  className={classes.forText}>Total Amount</h3>
         </div>
         {data.map((item)=>(
            <div className = {classes.forAll}>
            <p className={classes.forText} >{item.date}</p>
            <p className={classes.forText} >{item.Medname}</p>
            <p className={classes.forText} >{item.Medtype}</p>
            <p className={classes.forText} >{item.Cusname}</p>
            <p className={classes.forText} >{item.price}</p>
            <p className={classes.forText} >{item.amount}</p>
            </div>
         ))}
        
        </div>        
    </div>
      </Card>
      
    </div>
   
  );
};

export default ReportMEdicineWise;