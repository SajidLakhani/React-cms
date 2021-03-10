import {makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';
const useStyles = makeStyles((theme) => ({
   
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
const Fields = ({number , text , date , Placeholder , width , autocomplete ,Parent }) => {
 const classes = useStyles();
 const Category = [
    { title: 'Capsules' },
    { title: 'Drops' },
    { title: 'Syrup' },
    { title: 'Tablets' },

];
 const handleDateChange = (date) => {
    setSelectedDate(date);
};
 const [selectedDate, setSelectedDate] = React.useState(null);
    return (
        <div className = {classes.Main }>
            {text ? <TextField className={classes.field} style ={{width:`${width}`}} id="outlined-basic" placeholder = {Placeholder} type = "text" variant="outlined" />
            : number ? <TextField className={classes.field} style ={{width:`${width}`}} id="outlined-basic" InputProps={{ inputProps: { min: 0 } }} placeholder = {Placeholder} type = "number" variant="outlined" />
            : date ?    <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{ border: '1px solid #CAC6D4',width:`${width}` }}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                className={classes.field}
                placeholder={Placeholder}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'Joining Date': 'change date',
                }}
            />
            </MuiPickersUtilsProvider>
            
        : autocomplete  ?
         <Autocomplete
        id="combo-box-demo"
        style ={{width:`${width}`}}
        options={Category}
        getOptionLabel={(option) => option.title}
        className={classes.field}
        renderInput={(params) => <TextField {...params} placeholder= {Placeholder} variant="outlined" />}
    /> : null  }
           

        </div>
    );
};

export default Fields;