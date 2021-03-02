import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, TextField, Button } from '@material-ui/core'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
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
    mobilefield:{
        width:'100%',
        margin:'15px 0px',
        background: "#ffffff",
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
            fontFamily: 'inherit',
            textAlign: "left",
            "&::placeholder": {
                color: "black",
                margin: 'auto 0',
                fontSize: "14px",
                opacity: 1,
            },
        },
    },
}))


const CreateUserMobileView = () => {
    const Teacher = [
        { title: 'ASM' },
        { title: 'RSM' },
        { title: 'MR' },
    
    ];
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
        <div>
             <h3>ASM/RSM/MR Registeration</h3>
          <TextField className={classes.mobilefield} id="outlined-basic" placeholder = "AC/ID" type = "number" variant="outlined" />
          <TextField className={classes.mobilefield}  id="outlined-basic" placeholder = "First Name" variant="outlined" />
    <TextField className={classes.mobilefield}  id="outlined-basic" placeholder = "Last Name" variant="outlined" />
    <TextField className={classes.mobilefield} id="outlined-basic" placeholder = "Address" variant="outlined" />
    <TextField className={classes.mobilefield}  id="outlined-basic" placeholder =  "Mobile No" type = "number" variant="outlined" />
    { showResults ? <div>
  
    { Teacher.map((item)=> {
        if(item.title != "MR"){
            <TextField className={classes.mobilefield} id="outlined-basic" placeholder = "Allow Total Childs" type = "number" variant="outlined"  />
        }
        else {
            <div>Sajid</div>
        }
        })}
    <TextField className={classes.mobilefield}  id="outlined-basic" placeholder = "Head Quarter HQ" variant="outlined" />
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{ border: '1px solid #CAC6D4' }}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                className={classes.mobilefield}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'Joining Date': 'change date',
                }}
            />
            </MuiPickersUtilsProvider>
    </div> : null }
    
    <Autocomplete
            id="combo-box-demo"
            options={Teacher}
            onChange={onClick}
            getOptionLabel={(option) => option.title}
            className={classes.mobilefield}
            renderInput={(params) => <TextField {...params} placeholder= "Role" variant="outlined" />}
        />
        <Autocomplete
            id="combo-box-demo"
            options={Parent}
            getOptionLabel={(option) => option.title}
            className={classes.mobilefield}
            renderInput={(params) => <TextField {...params} placeholder= "Select Parent" variant="outlined" />}
        />
        <TextField className={classes.mobilefield} id="outlined-basic" placeholder = "Email Address" variant="outlined" />
    <TextField className={classes.mobilefield}  id="outlined-basic" placeholder = "Password" type = "password" variant="outlined" />
    <div style ={{display : 'flex', justifyContent:'space-between'}}>
        <Button className={classes.button} style ={{backgroundColor:'#252525'}}>Cancel</Button>
        <Button className={classes.button} style ={{marginLeft:'10px',background:'#1f9de7'}} onClick = {handleSubmit}>Submit</Button>
        </div>
        </div>
    );
};


const Parent = [
    { title: 'Super Admin' },
    { title: 'ASM' },
    { title: 'RSM' },

];

export default CreateUserMobileView;