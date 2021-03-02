import { Card, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const useStyles = makeStyles((theme) => ({
    main:{
        padding:'30px 30px',
        paddingBottom:'80px',
        [theme.breakpoints.down('md')]: {
            width:'100%',
          },
        width:'70%',
        margin:'auto 0',
        fontFamily:'MyFirstFont',
    },
    middleCard:{
        padding:'5px 10px',
        margin:'20px 0',
        background:'#1f9de7',
        color:'white'
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
        background: "#ffffff",
        fontFamily:'MyFirstFont',
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
    forWidth:{
        width:'32%'
    }
}))
const StockList = () => {
 const classes = useStyles();
    return (
        <div className = {classes.main}>
            <h2>Add Stocklist</h2>
            <div className = {classes.midDiv}>
            <TextField className={`${classes.field} ${classes.forWidth}`} id="outlined-basic" placeholder = "Firm Name" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'66%'}} id="outlined-basic" placeholder = "Address" type = "text" variant="outlined" />
            </div>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Contact No" type = "number" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Drug Lic No" type = "number" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "GST No" type = "number" variant="outlined" />
            </div>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'66%'}} id="outlined-basic" placeholder = "Nature Of Firm" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "I.T Pan No" type = "number" variant="outlined" />
            </div>
            <Card className = {classes.middleCard}>
                <p style ={{margin:'auto 0'}}>Prop. / Partner</p>
            </Card>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Name Of Prop. / Partner" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'66%'}} id="outlined-basic" placeholder = "Address" type = "text" variant="outlined" />
            </div>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Name Of Prop. / Partner" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'66%'}} id="outlined-basic" placeholder = "Address" type = "text" variant="outlined" />
            </div>
            <Card className = {classes.middleCard}>
                <p style ={{margin:'auto 0'}}>Firm Details</p>
            </Card>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Person Name" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Person No" type = "number" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "No Of Years in Pharma Trade" type = "number" variant="outlined" />
            </div>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "No Of SalesMan" type = "number" variant="outlined" />
            <TextField className={classes.field} style ={{width:'66%'}} id="outlined-basic" placeholder = "Area Covered" type = "text" variant="outlined" />
            </div>
            <Card className = {classes.middleCard}>
                <p style ={{margin:'auto 0'}}>Bank Details</p>
            </Card>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Bank Name" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'66%'}} id="outlined-basic" placeholder = "Address" type = "text" variant="outlined" />
            </div>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'66%'}} id="outlined-basic" placeholder = "Account No" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "IFS Code" type = "number" variant="outlined" />
            </div>
            <TextField className={classes.field} style ={{width:'100%'}} id="outlined-basic" placeholder = "Cheque Details (Optional)" type = "text" variant="outlined" />
            <Card className = {classes.middleCard}>
                <p style ={{margin:'auto 0'}}>Preferred Transport</p>
            </Card>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Transport A" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Transport B" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Transport C" type = "text" variant="outlined" />
            </div>
            <Card className = {classes.middleCard}>
                <p style ={{margin:'auto 0'}}>Details of Stocklist Ship for Two Major Companies</p>
            </Card>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Firm Name" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Payment Terms" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Turnover / Monthly" type = "number" variant="outlined" />
            </div>
            <div className = {classes.midDiv}>
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Firm Name" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Payment Terms" type = "text" variant="outlined" />
            <TextField className={classes.field} style ={{width:'32%'}} id="outlined-basic" placeholder = "Turnover / Monthly" type = "number" variant="outlined" />
            </div>
            <Card className = {classes.middleCard}>
                <p style ={{margin:'auto 0'}}>Other Business activities, if any other than Pharmaceuticals</p>
            </Card>
            <TextareaAutosize
      rowsMax={8}
      placeholder="Details about other Business ...."
      defaultValue=""
      style ={{width:'100%', height:'200px', padding:'10px'}}
      className={classes.field}
    />
        </div>
    );
};

export default StockList;