import { makeStyles } from '@material-ui/core';
import React from 'react';
import {ReactComponent as Dashboard}from '../../assets/icons/dashboard.svg'
import {ReactComponent as CreateUser}from '../../assets/icons/group.svg'
import {ReactComponent as CNF}from '../../assets/icons/distribution.svg'
import {ReactComponent as StockList}from '../../assets/icons/boxes.svg'
import {ReactComponent as Orders}from '../../assets/icons/checklist.svg'
import {ReactComponent as Reports}from '../../assets/icons/report.svg'
import {ReactComponent as Stock}from '../../assets/icons/packages.svg'
import {ReactComponent as Payment}from '../../assets/icons/creditcard.svg'
import {ReactComponent as Finance}from '../../assets/icons/finance.svg'
import {ReactComponent as Activities}from '../../assets/icons/stackedfiles.svg'
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
main:{
    backgroundColor: '#1f9de7',
    color: 'white',
    padding:'20px 55px'
},
forUl:{
  padding: '10px 40px',
  width: '100%',
  listStyleType: 'none',
  margin: 'auto',
  
},
forImage:{
  width: '13%',
  height:'fit-content',
  fill:'#7ac1ff'
},
forLi:{
  margin: '0px 20px',
  fontSize: '17px',
},
midDiv:{
  display:'flex', 
  cursor:'pointer',
   margin:'20px 0',
   transition: 'transform .2s', 
   "&:hover": {
       color:'gray',
       cursor:'pointer',
       transform: 'scale(1.1)',
  },
}
}))

const SideBar = () => {
    const classes = useStyles();
    return (
        <>
          <div className = {classes.main}>
            <h2 style ={{margin:'0', fontSize:'25px'}}>Dashboard</h2>
        </div>
            <ul className = {classes.forUl}>
            <Link style ={{textDecoration:'none', color:'inherit', }} to = '/dashboard'>
              <div className = {classes.midDiv}>
                <Dashboard className = {classes.forImage}/>
                <li className = {classes.forLi}>Dashboard</li>
              </div>
              </Link>
              <Link style ={{textDecoration:'none', color:'inherit'}} to = '/create-user'>
              <div className = {classes.midDiv}>
                <CreateUser className = {classes.forImage}/>
                <li className = {classes.forLi}>User/Roles</li>
              </div>
              </Link>
              <div className = {classes.midDiv}>
                <CNF className = {classes.forImage}/>
                <li className = {classes.forLi}>CNF</li>
              </div>
              <div className = {classes.midDiv}>
                <StockList className = {classes.forImage}/>
                <li className = {classes.forLi}>Stocklist</li>
              </div>
              <div className = {classes.midDiv}>
                <Orders className = {classes.forImage}/>
                <li className = {classes.forLi}>Orders</li>
              </div>
              <div className = {classes.midDiv}>
                <Reports className = {classes.forImage}/>
                <li className = {classes.forLi}>Reports</li>
              </div>
              <div className = {classes.midDiv}>
                <Stock className = {classes.forImage}/>
                <li className = {classes.forLi}>Stock</li>
              </div>
              <div className = {classes.midDiv}>
                <Payment className = {classes.forImage}/>
                <li className = {classes.forLi}>Payment</li>
              </div>
              <div className = {classes.midDiv}>
                <Finance className = {classes.forImage}/>
                <li className = {classes.forLi}>Finance</li>
              </div>
              <div className = {classes.midDiv}>
                <Activities className = {classes.forImage}/>
                <li className = {classes.forLi}>Activities</li>
              </div>
          </ul>
        </>
      
    );
};

export default SideBar;