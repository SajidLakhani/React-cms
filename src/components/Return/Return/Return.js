import { Card, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import Buttons from '../../../ResuableComponents/Buttons/Buttons';


const useStyles = makeStyles((theme) => ({
    Main:{
        padding:'30px 30px',
        width:'90%',
        margin:'auto 0',
        textAlign:'center',
        fontFamily:'MyFirstFont',
        [theme.breakpoints.down('md')]: {
            width:'100%',
            textAlign:'center',
          },
    },
    field: {
        [theme.breakpoints.down('sm')]: {
            width:'100% !important',
            margin:'5px 0'
          },
          "&:before": {
            borderColor: '#1f9de7'
        },
        background: "#ffffff",
        fontFamily:'MyFirstFont',
        margin: '10px 0',
        borderRadius: "5px",
        "& :-webkit-autofill": {
            WebkitBoxShadow: '0 0 0 1000px white inset',
           
        },
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

    card:{
        padding:'5px 30px', margin:'30px 0',
        [theme.breakpoints.down('md')]: {
            width:'100% !important',
        }
        
    },
    midDiv:{
        display:'flex' , justifyContent:'space-between',
        [theme.breakpoints.down('md')]: {
            width:'100%',
            
            display:'block'
          },

    }
}))

const Return = () => {
    const classes = useStyles();

    return (
        <div className = {classes.Main}>
            <h1>Add Return</h1>
            <div className = {classes.midDiv}>
            <Card className = {classes.card}style ={{width:'48%'}}>
        <h2 style ={{margin:'10px 0'}}>Customer Return</h2>
        <div>
        <TextField className={classes.field} style ={{width:'100%'}} id="outlined-basic" InputProps={{ inputProps: { min: 0 } }} placeholder = "Invoice No" type = "number" variant="outlined" />
        <Buttons />
        </div>
        
      </Card>
      <Card className = {classes.card} style ={{width:'48%'}}>
        <h2 style ={{margin:'10px 0'}}>Manufacturer Return</h2>
        <div>
        <TextField className={classes.field} style ={{width:'100%'}} id="outlined-basic" InputProps={{ inputProps: { min: 0 } }} placeholder = "Invoice No" type = "number" variant="outlined" />
        <Buttons />
        </div>
        
      </Card>
            </div>
        </div>
    );
};

export default Return;