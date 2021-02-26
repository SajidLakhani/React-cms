import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => ({
main:{
    backgroundColor: '#1f9de7',
    color: 'white',
    padding:'20px 55px'
}
}))

const SideBar = () => {
    const classes = useStyles();
    return (
        <>
          <div className = {classes.main}>
            <h2 style ={{margin:'0', fontSize:'25px'}}>Dashboard</h2>
        </div>
            <List style ={{padding:'20px 20px'}}> 
            {['Dashboard', 'User/Roles', 'CNF', 'Stocklist', 'Orders', 'Reports', 'Attendance'
            , 'Stock', 'Payment', 'Finance', 'Activities'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </>
      
    );
};

export default SideBar;