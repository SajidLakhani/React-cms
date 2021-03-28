import {  Card, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Buttons from '../../ResuableComponents/Buttons/Buttons';

const useStyles = makeStyles((theme) => ({
    textfields:{
        [theme.breakpoints.down('sm')]: {
            display:'block'
        },
        display:'flex',
         justifyContent:'space-between'
    },
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
  field: {
    width:'47%',
    [theme.breakpoints.down('sm')]: {
        width:'100% !important',
        margin:'5px 0'
      },
     
      "&::hover": {
        borderColor: "white",
    },
    background: "#ffffff",
    fontFamily:'MyFirstFont',
    margin: '10px 0',
    borderRadius: "5px",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline" :{
        borderColor: '#1f9de7'
    },
    "& .MuiAutocomplete-clearIndicator ":{
        display:'none'
    },

    "& .MuiAutocomplete-inputRoot":{
        padding:'unset'
    },
    "& .MuiInput-underline:before":{
        borderBottom:'unset'
    },
    "& .MuiInput-underline:after":{
        borderBottom:'unset'
    },
    "& input": {
        height: "25px",
        padding: '10px 0',
        margin: 'auto 10px',
        fontSize: "14px",
        fontFamily:'MyFirstFont',
        textAlign: "left",
        "&::placeholder": {
            color: "black",
            fontFamily:'MyFirstFont',
            margin: 'auto 0',
            fontSize: "14px",
            opacity: 1,
        },
    },
},

}))

const ProductListing = () => {
  const data = [
    {
      name:'Bottles',
      id:'1',
      pack:'200 Ml'
    },
    {
      name:'Tablets',
      id:'2',
      pack:'200 Ml'
    },

    {
      name:'Capsul',
      id:'3',
      pack:'200 Ml'
    },

    {
      name:'Stripes',
      id:'4',
      pack:'200 Ml'
    },
    {
      name:'Syrups',
      id:'5',
      pack:'200 Ml'
    },
    {
        name:'Bottles',
        id:'1',
        pack:'200 Ml'
      },
      {
        name:'Tablets',
        id:'2',
        pack:'200 Ml'
      },
  
      {
        name:'Capsul',
        id:'3',
        pack:'200 Ml'
      },
  
      {
        name:'Stripes',
        id:'4',
        pack:'200 Ml'
      },
      {
        name:'Syrups',
        id:'5',
        pack:'200 Ml'
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
      <h1 style ={{margin:'5px 0'}}>Product</h1>

      <Card style ={{padding:'20px 20px', margin:'30px 0'}}>
        <h2 style ={{margin:'10px 0'}}>Add Product</h2>
        <div >
            <div className = {classes.textfields}>
        <TextField  className={classes.field} id="outlined-basic" placeholder = "Product Name" type = "text" variant="outlined"  />
        <TextField  className={classes.field} id="outlined-basic" placeholder = "Pack" type = "text" variant="outlined"  />
        </div>
        <Buttons />
        </div>
        
      </Card>
     
      <Card className = {classes.forCard}>
        <h2 style ={{margin:'10px 0'}}>Product Listing</h2>
      <div className = {classes.Tablemain}>
       <div className = {classes.innerDiv}>
         <div className = {classes.forHeadings}>
         <h3 className={classes.forText}>S.No</h3>
         <h3 className={classes.forText}>Product Name</h3>
         <h3 className={classes.forText} >Pack</h3>
         <h3  className={classes.forText}>Actions</h3>
         </div>
         {data.map((item)=>(
            <div className = {classes.forAll}>
                <p className={classes.forText} >{item.id}</p>
            <p className={classes.forText} style ={{marginLeft:'40px'}}>{item.name}</p>
            <p className={classes.forText} style ={{marginLeft:'40px'}}>{item.pack}</p>
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

export default ProductListing;