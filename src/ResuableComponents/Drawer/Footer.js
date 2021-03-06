
import { makeStyles } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    main: {
        position: 'fixed',
        left: '0',
        padding: '15px 30px',
        fontFamily:'MyFirstFont',
        right: '0',
        textAlign: 'end',
        color: 'white',
        bottom: '0',
        background: '#000000cf',
        ['@media (max-width:740px)']: { 
            bottom: '0',
            position: 'fixed',
          },
    },

    iconWidth:{
        width:'1%',
        ['@media (max-width:740px)']: { 
            width:'5%'
          },
    },

}))


const Footer = () => {
    const classes = useStyles();
    return ( 
        <div className = {classes.main}>
            Copyright <CopyrightIcon className= {classes.iconWidth}/> by Audit Creatives
        </div>
    );
};

export default Footer;