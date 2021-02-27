
import { makeStyles } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    main: {
        position: 'fixed',
        left: '0',
        padding: '15px 30px',
        right: '0',
        textAlign: 'end',
        color: 'black',
        bottom: '0',
        background: '#6c6c6ca3',
        ['@media (max-width:740px)']: { 
            bottom: 'unset',
            position: 'absolute',
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