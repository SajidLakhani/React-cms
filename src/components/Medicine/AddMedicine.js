import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, TextField, Button } from '@material-ui/core'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({

    main:{
        padding:'60px 30px',
        width:'70%',
        margin:'auto 0',
        fontFamily:'MyFirstFont',
        [theme.breakpoints.down('md')]: {
            width:'100%',
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
        [theme.breakpoints.down('sm')]: {
            display:'block'
          },
        display:'flex',
         margin:'10px 0',
         justifyContent:'space-between',
       
    },

    field: {
        [theme.breakpoints.down('sm')]: {
            width:'100% !important',
            margin:'5px 0'
          },
          "&::hover": {
            borderColor: "white",
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



function AddMedicine() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [showResults, setShowResults] = React.useState(false)

    const onClick = () => setShowResults(true)
    const handleSubmit = () => {
             alert('Medicine Added Successfully');
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <>
<div className = {classes.main}>
    <h2>Add Medicine</h2>
    <div className = {classes.midDiv}>
    <TextField  className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Medicine Name" type = "text" variant="outlined" />
    <Autocomplete
            id="combo-box-demo"
            style ={{width:'32%'}}
            options={Unit}
            onChange={onClick}
            getOptionLabel={(option) => option.title}
            className={classes.field}
            renderInput={(params) => <TextField {...params} placeholder= "Unit" variant="outlined" />}
        />
        <Autocomplete
            id="combo-box-demo"
            style ={{width:'32%'}}
            options={Category}
            getOptionLabel={(option) => option.title}
            className={classes.field}
            renderInput={(params) => <TextField {...params} placeholder= "Category" variant="outlined" />}
        />
    </div>
    <div className = {classes.midDiv}>
    <TextField className={classes.field} style ={{width:'32%'}} InputProps={{ inputProps: { min: 0, max: 10 } }} id="outlined-basic" placeholder = "GST" type = "number" min = "0" variant="outlined" />
    <TextField className={classes.field} style ={{width:'66%'}} id="outlined-basic" placeholder =  "Batch ID" type = "number" variant="outlined" />
    </div>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{ border: '1px solid #CAC6D4',width:'100%' }}
                disableToolbar
                placeholder="Manufacture Date"
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
            <div className = {classes.midDiv}>
            <Autocomplete
            id="combo-box-demo"
            style ={{width:'32%'}}
            options={Category}
            onChange={onClick}
            getOptionLabel={(option) => option.title}
            className={classes.field}
            renderInput={(params) => <TextField {...params} placeholder= "Medicine Type" variant="outlined" />}
        />
    <TextField  className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Sell Price" type = "number" variant="outlined" />
    <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "M.R.P" variant="outlined" />
    </div>
    <div className = {classes.midDiv}>
    <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "HSN" variant="outlined" />
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{ border: '1px solid #CAC6D4',width:'66%' }}
                disableToolbar
                placeholder="Expiry Date"
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
    </div>
   
    <div style ={{display : 'flex', justifyContent:'flex-end'}}>
        <Button className={classes.button} style ={{backgroundColor:'#252525'}}>Cancel</Button>
        <Button className={classes.button} style ={{marginLeft:'10px',background:'#1f9de7'}} onClick = {handleSubmit}>Submit</Button>
        </div>
     
</div>
</>
      
    )
}
const Unit = [
    { title: 'Bottle' },
    { title: 'Box' },
    { title: 'Tab' },
    { title: 'Syrup' },
    { title: 'Cap' },
    { title: 'Injection' },

];
const Category = [
    { title: 'Capsules' },
    { title: 'Drops' },
    { title: 'Syrup' },
    { title: 'Tablets' },

];
export default AddMedicine
