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
    padding:'14px 55px',
    /* width */

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
        <div style = {{ fontFamily:'MyFirstFont'}}>
          <div className = {classes.main}>
            <Link style ={{textDecoration:'none', color:'inherit', }} to = "/dashboard"><h2 style ={{margin:'0', fontSize:'25px'}}>Dashboard</h2></Link>
            
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
              <Link style ={{textDecoration:'none', color:'inherit'}} to = '/stocklist'>
              <div className = {classes.midDiv}>
                <StockList className = {classes.forImage}/>
                <li className = {classes.forLi}>Stocklist</li>
              </div>
              </Link>
              <Link style ={{textDecoration:'none', color:'inherit'}} to = '/product-listing'>
              <div className = {classes.midDiv}>
                <StockList className = {classes.forImage}/>
                <li className = {classes.forLi}>Product Listing</li>
              </div>
              </Link>
              
              <div className = {classes.midDiv}>
                <Dashboard className = {classes.forImage}/>
                <li className = {classes.forLi}>Medicine</li>
                </div> <ul style ={{ listStyleType: 'none', fontFamily:'inherit'}}>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/med-category'> <li style={{padding:'5px 0',fontSize:'12px'}} >Category</li> </Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/add-medicine'> <li style={{padding:'5px 0',fontSize:'12px'}} >Add Medicine</li> </Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/manage-med'> <li style={{padding:'5px 0',fontSize:'12px'}} >Manage Medicine</li></Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/unit'><li style={{padding:'5px 0',fontSize:'12px'}} >Unit</li></Link>
                </ul>
                <div className = {classes.midDiv}>
                <Dashboard className = {classes.forImage}/>
                <li className = {classes.forLi}>Purchase</li>
                </div> <ul style ={{ listStyleType: 'none', fontFamily:'inherit'}}>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/add-purchase'> <li style={{padding:'5px 0',fontSize:'12px'}} >Add Purchase</li> </Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/manage-purchase'> <li style={{padding:'5px 0',fontSize:'12px'}} >Manage Purchase</li> </Link>
                </ul>
                <div className = {classes.midDiv}>
                <Dashboard className = {classes.forImage}/>
                <li className = {classes.forLi}>Return</li>
                </div> <ul style ={{ listStyleType: 'none', fontFamily:'inherit'}}>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/return'> <li style={{padding:'5px 0',fontSize:'12px'}} >Return</li> </Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/stock-return'> <li style={{padding:'5px 0',fontSize:'12px'}} >Stock Return List</li> </Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/manufacturer-return'> <li style={{padding:'5px 0',fontSize:'12px'}} >Manufacturer Return List</li></Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/waste-return'><li style={{padding:'5px 0',fontSize:'12px'}} >Wastage Return List</li></Link>
                </ul>
                <div className = {classes.midDiv}>
                <Reports className = {classes.forImage}/>
                <li className = {classes.forLi}>Reports</li>
              </div><ul style ={{ listStyleType: 'none', fontFamily:'inherit'}}>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/closing'> <li style={{padding:'5px 0',fontSize:'12px'}} >Closing</li> </Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/closing-report'> <li style={{padding:'5px 0',fontSize:'12px'}} >Closing Report</li> </Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/today-report'> <li style={{padding:'5px 0',fontSize:'12px'}} >Todays Report</li></Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/sales-report'><li style={{padding:'5px 0',fontSize:'12px'}} >Sales Report</li></Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/purchase-report'> <li style={{padding:'5px 0',fontSize:'12px'}} >Purchase Report</li></Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/medicine-wise-report'><li style={{padding:'5px 0',fontSize:'12px'}} >Sales Report (Medicine Wise)</li></Link>
                <Link style ={{textDecoration:'none', color:'inherit', }} to = '/profit-loss'><li style={{padding:'5px 0',fontSize:'12px'}} >Profit/Loss</li></Link>
                </ul>
              <div className = {classes.midDiv}>
                <Orders className = {classes.forImage}/>
                <li className = {classes.forLi}>Orders</li>
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
        </div>
      
    );
};

export default SideBar;