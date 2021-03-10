import { makeStyles, Button } from '@material-ui/core';

import React from 'react';

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

}))



const Buttons = ({handleSubmit}) => {
    const classes = useStyles();
 
    return (
        <div style ={{display : 'flex', justifyContent:'flex-end'}}>
        <Button className={classes.button} style ={{backgroundColor:'#252525'}}>Cancel</Button>
        <Button className={classes.button} style ={{marginLeft:'10px',background:'#1f9de7'}} onClick = {handleSubmit}>Submit</Button>
        </div>
     
    );
};

export default Buttons;