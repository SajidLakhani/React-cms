import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { InputBase} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
const useStyles = makeStyles((theme) => ({
    main:{
        width:'100%',
        padding:'9px 0',
        display:'flex',
        justifyContent:'space-between',
        ['@media (max-width:740px)']: { 
            display:'none'
          }
    },
    rootSearch: {
        padding: '2px 4px',
        height: '40px',
        margin: 'auto 40px',
        background:'#43aef1',
        color:'white',
        boxShadow: 'unset',
        display: 'flex',
        alignItems: 'center',
        width: 450,
    },
    input: {
        margin: 'auto 8px',
        color:'white',
        fontFamily: 'MyFirstFont',
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },

    forIcons:{
         height:'52px' ,
         width:'32px',
         "&:hover": {
             color:'#c1daee',
             cursor:'pointer'
        },
    }

}))

const Header = () => {
    const classes = useStyles();
    return (
        <div className = {classes.main} >
              <Paper component="form" className={classes.rootSearch}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                        <SearchIcon style ={{fill:'white'}}/>
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Search here"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Paper>
                <div style ={{margin:'auto 0'}}>
                    <div style ={{display:'flex'}}>
                        <SettingsOutlinedIcon className = {classes.forIcons} style ={{margin:'0 20px'}}/>
                        <PowerSettingsNewOutlinedIcon className = {classes.forIcons}/>
                    </div>
                </div>
        </div>
    );
};

export default Header;