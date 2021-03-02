import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import CreateUserMobileView from './CreateUserMobileView'
import { makeStyles, TextField, Button } from '@material-ui/core'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
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



function CreateUser() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [showResults, setShowResults] = React.useState(false)

    const onClick = () => setShowResults(true)
    const handleSubmit = () => {
             alert('Registered Successfully');
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <>
          <div className = {classes.forMobileMain}>
              <CreateUserMobileView/>
          </div>
<div className = {classes.main}>
    <h2>ASM/RSM/MR Registeration</h2>
    <div className = {classes.midDiv}>
    <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "AC/ID" type = "number" variant="outlined" />
    <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "First Name" variant="outlined" />
    <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Last Name" variant="outlined" />
    </div>
    <div className = {classes.midDiv}>
    <TextField className={classes.field} style ={{width:'66%'}} id="outlined-basic" placeholder = "Address" variant="outlined" />
    <TextField className={classes.field} style ={{width:'32%'}}  id="outlined-basic" placeholder =  "Mobile No" type = "number" variant="outlined" />
    </div>
    <div className = {classes.midDiv}>
    <Autocomplete
            id="combo-box-demo"
            style ={{width:'47%'}}
            options={Teacher}
            onChange={onClick}
            getOptionLabel={(option) => option.title}
            className={classes.field}
            renderInput={(params) => <TextField {...params} placeholder= "Role" variant="outlined" />}
        />
        <Autocomplete
            id="combo-box-demo"
            style ={{width:'47%'}}
            options={Parent}
            getOptionLabel={(option) => option.title}
            className={classes.field}
            renderInput={(params) => <TextField {...params} placeholder= "Select Parent" variant="outlined" />}
        />
    </div>
    { showResults ? <div className = {classes.midDiv}>
    <TextField className={classes.field} style = {{width:'32%'}} id="outlined-basic" placeholder = "Allow Total Childs" type = "number" variant="outlined" />
    <TextField className={classes.field}  style = {{width:'32%'}} id="outlined-basic" placeholder = "Head Quarter HQ" variant="outlined" />
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{ border: '1px solid #CAC6D4',width:'32%' }}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                className={classes.field}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'Joining Date': 'change date',
                }}
            />
            </MuiPickersUtilsProvider>
    </div> : null }
    
    <div className = {classes.midDiv}>
    <TextField className={classes.field} style = {{width:'32%'}} id="outlined-basic" placeholder = "Email Address" variant="outlined" />
    <TextField className={classes.field}  style = {{width:'66%'}} id="outlined-basic" placeholder = "Password" type = "password" variant="outlined" />
    </div>
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
const Parent = [
    { title: 'Super Admin' },
    { title: 'ASM' },
    { title: 'RSM' },

];
export default CreateUser
