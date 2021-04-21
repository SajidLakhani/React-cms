import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, TextField, Button, TextareaAutosize } from '@material-ui/core'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    button: {
        fontFamily: 'myFirstFont',
        margin: '10px 0',
        color: "#ffffff",
        backgroundColor: '#f56962',
   
        textTransform: "unset",
        "&:hover": {
            backgroundColor: '#f56962',
        },
    },
    forMobileMain:{
        paddingTop:'30px',
        paddingBottom:'60px',
        width:'90%',
        textAlign:'center',
        margin:'auto',
        [theme.breakpoints.up('sm')]: {
            display:'none'
        },
    },

    main:{
        padding:'60px 30px',
        width:'70%',
        margin:'auto 0',
        fontFamily:'MyFirstFont',
        ['@media (max-width:740px)']: { 
            display:'none'
          },
          ['@media (max-width:780px)']: { 
            width:'100%'
          },
    },
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
    button: {
        width: 'fit-content',
        padding: '5px 30px',
        fontFamily: 'myFirstFont',
        margin: '10px 0',
        color: "#ffffff",
        backgroundColor: '#f56962',
        fontSize: "13px",
        textTransform: "unset",
        "&:hover": {
            backgroundColor: '#f56962',
        },
    },

    midDiv:{
        display:'flex',
         margin:'10px 0',
         justifyContent:'space-between',
       
    },

    field: {
        [theme.breakpoints.down('md')]: {
            width:'100%',
          },
        background: "#ffffff",
        fontFamily:'MyFirstFont', 
        marginTop: '10px',
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
}))



function Message() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [showResults, setShowResults] = React.useState(false)

    const onClick = () => setShowResults(true)
    const handleSubmit = () => {
             alert('Message has been sent ');
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <>
          
<div className = {classes.main}>
    <h1>Write Message</h1>
    <div className = {classes.midDiv}>
    <Autocomplete
            id="combo-box-demo"
            style ={{width:'66%'}}
            options={Teacher}
            onChange={onClick}
            getOptionLabel={(option) => option.title}
            className={classes.field}
            renderInput={(params) => <TextField {...params} placeholder= "To" variant="outlined" />}
        />
        { showResults ? null :  <Button className={classes.button} style ={{marginLeft:'10px',background:'#1f9de7', width:'33%', padding: '10px 30px',  fontSize: "14px",}}>Send To All</Button> }
       
    </div>
    
    <TextField className={classes.field}  style = {{width:'100%' , marginTop:'20px'}} id="outlined-basic" placeholder = "Subject" type = "text" variant="outlined" />

    <TextareaAutosize
      rowsMax={8}
      placeholder="Write Message ...."
      defaultValue=""
      style ={{width:'100%', height:'200px', padding:'10px', marginTop:'20px'}}
      className={classes.field}
    />
    <div style ={{display : 'flex', justifyContent:'flex-end'}}>
        <Button className={classes.button} style ={{backgroundColor:'#252525'}}>Cancel</Button>
        <Button className={classes.button} style ={{marginLeft:'10px',background:'#1f9de7'}} onClick = {handleSubmit}>Submit</Button>
        </div>
     
</div>
</>
      
    )
}
const Teacher = [
    { title: 'ASM' },
    { title: 'RSM' },
    { title: 'MR' },

];
export default Message
