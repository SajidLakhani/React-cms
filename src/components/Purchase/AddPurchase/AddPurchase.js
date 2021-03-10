import { makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import Fields from '../../../ResuableComponents/Fields/Fields';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Buttons from '../../../ResuableComponents/Buttons/Buttons';
const useStyles = makeStyles((theme) => ({
    Main:{
        padding:'30px 30px',
        [theme.breakpoints.down('md')]: {
            width:'100%',
          },
        width:'70%',
        margin:'auto 0',
        fontFamily:'MyFirstFont',
    },
    midDiv:{
        display:'flex',
        [theme.breakpoints.down('sm')]: {
            display:'block'
          },
         margin:'10px 0',
         justifyContent:'space-between',
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

const AddPurchase = () => {
    const classes = useStyles();
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
     const [selectedDate, setSelectedDate] = React.useState(null);
    const Category = [
        { title:"Ab Tech Pharma" },
        { title: 'XYZ' },
    ];
    const Payment = [
        { title:"Cash" },
        { title: 'Cheque' },
    ];
    return (
        <div className = {classes.Main}>
            <h1>Add Purchase</h1>
            <div className = {classes.midDiv}>
            <Autocomplete
        id="combo-box-demo"
        style ={{width:"32%"}}
        options={Category}
        getOptionLabel={(option) => option.title}
        className={classes.field}
        renderInput={(params) => <TextField {...params} placeholder="Manufacturer" variant="outlined" />}
    />
            <TextField className={classes.field} style ={{width:'32%'}} InputProps={{ inputProps: { min: 0 } }} id="outlined-basic" placeholder = "Invoice Number" type = "number" min = "0" variant="outlined" />
            <Autocomplete
        id="combo-box-demo"
        style ={{width:"32%"}}
        options={Payment}
        getOptionLabel={(option) => option.title}
        className={classes.field}
        renderInput={(params) => <TextField {...params} placeholder= "Payment" variant="outlined" />}
    />
            </div>
            <div className = {classes.midDiv}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{ border: '1px solid #CAC6D4',width:"32%" }}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                className={classes.field}
                placeholder="Purchase Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'Joining Date': 'change date',
                }}
            />
            </MuiPickersUtilsProvider>
            <TextField className={classes.field} style ={{width:"66%"}} id="outlined-basic" placeholder = "Details" type = "text" variant="outlined" />
            </div>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:"32%"}} id="outlined-basic" placeholder = "Medicine Name" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} InputProps={{ inputProps: { min: 0 } }} id="outlined-basic" placeholder = "Batch ID" type = "number" min = "0" variant="outlined" />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{ border: '1px solid #CAC6D4',width:"32%" }}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                className={classes.field}
                placeholder="Expiry Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'Joining Date': 'change date',
                }}
            />
            </MuiPickersUtilsProvider>
            </div>
            <div className = {classes.midDiv}>
            <TextField disabled className={classes.field} style ={{width:'66%',backgroundColor:'#dfdfdf'}} InputProps={{ inputProps: { min: 0 } }} id="outlined-basic" placeholder = "Stock Quantity" type = "number" min = "0" variant="outlined" />
            <TextField  className={classes.field} style ={{width:'32%'}} InputProps={{ inputProps: { min: 0 } }} id="outlined-basic" placeholder = "Quantity" type = "number" min = "0" variant="outlined" />
            </div>
            <div className = {classes.midDiv}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{ border: '1px solid #CAC6D4',width:"48%" }}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                className={classes.field}
                placeholder="Expiry Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'Joining Date': 'change date',
                }}
            />
            </MuiPickersUtilsProvider>
            <TextField disabled className={classes.field} style ={{width:'48%'}} InputProps={{ inputProps: { min: 0 } }} id="outlined-basic" placeholder = "Total" type = "number" min = "0" variant="outlined" />
            </div>
            <Buttons/>

        </div>
    );
};

export default AddPurchase;