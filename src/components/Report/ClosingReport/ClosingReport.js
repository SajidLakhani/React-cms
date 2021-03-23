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
    padding:'20px 20px', margin:'30px 0',
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

const ClosingReport = () => {
  const data = [
    {
     no:'2',
     date:'3-2021',
     cashIn:'500000',
     cashOut:'250000',
     balance:'30000'
    },
    {
        no:'2',
        date:'3-2021',
        cashIn:'500000',
        cashOut:'250000',
        balance:'30000'
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
      <h1 style ={{margin:'5px 0'}}>Closing Report</h1>
     
      <Card className = {classes.forCard}>
        <h2 style ={{margin:'10px 0'}}>Closing Report List</h2>
      <div className = {classes.Tablemain}>
       <div className = {classes.innerDiv}>
         <div className = {classes.forHeadings}>
         <h3 className={classes.forText}>S.No</h3>
         <h3 className={classes.forText}>Date</h3>
         <h3 className={classes.forText}>Cashed In</h3>
         <h3  className={classes.forText}>Cash Out</h3>
         <h3  className={classes.forText}>Balance</h3>
         </div>
         {data.map((item)=>(
            <div className = {classes.forAll}>
                <p className={classes.forText} >{item.no}</p>
           
            <p className={classes.forText} >{item.date}</p>
            <p className={classes.forText} >{item.cashIn}</p>
            <p className={classes.forText} >{item.cashOut}</p>
            <p className={classes.forText} >{item.balance}</p>
            </div>
         ))}
        
        </div>        
    </div>
      </Card>
      
    </div>
   
  );
};

export default ClosingReport;