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
    margin:'auto 0'
  },

}))

const MedicineCategory = () => {
  const data = [
    {
     no:'2',
     invNo:'12',
     id:'124215',
     name:'Abmec Pharma',
     date:'2-12-2020',
     amount:'200'
    },
    {
        no:'3',
        invNo:'13',
        id:'124215',
        name:'Abmec Pharma',
        date:'2-12-2020',
        amount:'200'
       },
       {
        no:'4',
        invNo:'14',
        id:'124215',
        name:'Abmec Pharma',
        date:'2-12-2020',
        amount:'200'
       },
       {
        no:'5',
        invNo:'15',
        id:'124215',
        name:'Abmec Pharma',
        date:'2-12-2020',
        amount:'200'
       },
       {
        no:'2',
        invNo:'12',
        id:'124215',
        name:'Abmec Pharma',
        date:'2-12-2020',
        amount:'200'
       },
       {
           no:'3',
           invNo:'13',
           id:'124215',
           name:'Abmec Pharma',
           date:'2-12-2020',
           amount:'200'
          },
          {
           no:'4',
           invNo:'14',
           id:'124215',
           name:'Abmec Pharma',
           date:'2-12-2020',
           amount:'200'
          },
          {
           no:'5',
           invNo:'15',
           id:'124215',
           name:'Abmec Pharma',
           date:'2-12-2020',
           amount:'200'
          },
          {
            no:'2',
            invNo:'12',
            id:'124215',
            name:'Abmec Pharma',
            date:'2-12-2020',
            amount:'200'
           },
           {
               no:'3',
               invNo:'13',
               id:'124215',
               name:'Abmec Pharma',
               date:'2-12-2020',
               amount:'200'
              },
              {
               no:'4',
               invNo:'14',
               id:'124215',
               name:'Abmec Pharma',
               date:'2-12-2020',
               amount:'200'
              },
              {
               no:'5',
               invNo:'15',
               id:'124215',
               name:'Abmec Pharma',
               date:'2-12-2020',
               amount:'200'
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
      <h1 style ={{margin:'5px 0'}}>Purchase</h1>
     
      <Card className = {classes.forCard}>
        <h2 style ={{margin:'10px 0'}}>Purchase List</h2>
      <div className = {classes.Tablemain}>
       <div className = {classes.innerDiv}>
         <div className = {classes.forHeadings}>
         <h3 className={classes.forText}>S.No</h3>
         <h3 className={classes.forText}>Invoice No</h3>
         <h3 className={classes.forText}>Purchase ID</h3>
         <h3 className={classes.forText}>Manufaturer Name</h3>
         <h3 className={classes.forText}>Purchase Date</h3>
         <h3 className={classes.forText}>Total Amount</h3>
         <h3  className={classes.forText}>Actions</h3>
         </div>
         {data.map((item)=>(
            <div className = {classes.forAll}>
                <p className={classes.forText} >{item.no}</p>
            <p className={classes.forText} >{item.invNo}</p>
            <p className={classes.forText} >{item.id}</p>
            <p className={classes.forText} >{item.name}</p>
            <p className={classes.forText} >{item.date}</p>
            <p className={classes.forText} >{item.amount}</p>
            <div className={classes.forText} style ={{display:'flex'}}>
              <EditOutlinedIcon onClick = {handleEdit} style ={{cursor:'pointer'}}/>
              <DeleteOutlineOutlinedIcon onClick = {handleDelete}  style ={{cursor:'pointer'}}/>
            </div>
            </div>
         ))}
        
        </div>        
    </div>
      </Card>
      
    </div>
   
  );
};

export default MedicineCategory;