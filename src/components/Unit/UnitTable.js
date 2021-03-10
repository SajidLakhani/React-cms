import {  Card, makeStyles, TextField } from '@material-ui/core';
import React, {useState} from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Buttons from '../../ResuableComponents/Buttons/Buttons';
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
    padding:'10px 60px',
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
    margin:'auto'
  },
  field: {
    width:'100%',
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

const UnitTable = () => {
  const[data , setData] = useState(null)
  const[print , setPrint] = useState(false)
  const handleValue = (event) =>{
    setData(event.target.value)
    setPrint(false)
  }
  const Arraydata = [
    {
      name:`${data}`
    }
  ]
  const classes = useStyles();
  const handleSubmit = () => {
    setPrint(true)
}
  const handleEdit = () => {
    alert("Successfully Edited")
  }
  const handleDelete = () => {
    setPrint(false)
    alert("Successfully Deleted")
  }
  return (
    <div style ={{padding:'40px 20px', fontFamily:'MyFirstFont'}}>
      <h1 style ={{margin:'5px 0'}}>Unit</h1>
      <Card style ={{padding:'20px 20px', margin:'30px 0'}}>
        <h2 style ={{margin:'10px 0'}}>Add Unit</h2>
        <div>
        <TextField  className={classes.field} id="outlined-basic" placeholder = "Unit Name" type = "text" variant="outlined" onChange = {handleValue} />
        <Buttons handleSubmit = {handleSubmit} />
        </div>
        
      </Card>
      {!print ? null :   <Card className = {classes.forCard}>
        <h2 style ={{margin:'10px 0'}}>Unit List</h2>
      <div className = {classes.Tablemain}>
       <div className = {classes.innerDiv}>
         <div className = {classes.forHeadings}>
         <h3 className={classes.forText}>Unit Name</h3>
         <h3  className={classes.forText}>Actions</h3>
         </div>
         {Arraydata.map((item)=>(
         
            <div className = {classes.forAll}>
            <p className={classes.forText} >{item.name}</p>
            <div className={classes.forText} style ={{display:'flex'}}>
              <EditOutlinedIcon onClick = {handleEdit} style ={{cursor:'pointer'}}/>
              <DeleteOutlineOutlinedIcon onClick = {handleDelete}  style ={{cursor:'pointer'}}/>
            </div>
            </div>
          ))} 
        
        </div>        
    </div>
      </Card>}
    
      
    </div>
   
  );
};

export default UnitTable;