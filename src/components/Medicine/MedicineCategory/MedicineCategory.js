import {  Card, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  Tablemain:{
    width:'100%',
    margin:'auto'
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
      name:'Bottles',
      id:'1'
    },
    {
      name:'Tablets',
      id:'2'
    },

    {
      name:'Capsul',
      id:'3'
    },

    {
      name:'Stripes',
      id:'4'
    },
    {
      name:'Syrups',
      id:'5'
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
      <h1 style ={{margin:'5px 0'}}>Category</h1>
     
      <Card style ={{padding:'20px 20px', margin:'30px 0'}}>
        <h2 style ={{margin:'10px 0'}}>Category List</h2>
      <div className = {classes.Tablemain}>
       <div className = {classes.innerDiv}>
         <div className = {classes.forHeadings}>
         <h3 className={classes.forText}>Category ID</h3>
         <h3 className={classes.forText}>Category Name</h3>
         <h3  className={classes.forText}>Actions</h3>
         </div>
         {data.map((item)=>(
            <div className = {classes.forAll}>
                <p className={classes.forText} >{item.id}</p>
            <p className={classes.forText} >{item.name}</p>
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