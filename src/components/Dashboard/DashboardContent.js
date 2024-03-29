import { Card, makeStyles } from '@material-ui/core'
import React from 'react'
import AddUser from '../../assets/icons/adduser.png'
import Invoice from '../../assets/icons/invoice.png'
import Stock from '../../assets/icons/stock.png'
import List from '../../assets/icons/box.png'
import Cmanagement from '../../assets/icons/stockist.png'
import Payment from '../../assets/icons/wallet.png'
import Employee from '../../assets/icons/check.png'
import Orders from '../../assets/icons/orders.png'
import Track from '../../assets/icons/track.png'
import Message from '../../assets/icons/sms.png'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    Main:{
        padding:'30px',
        [theme.breakpoints.down('lg')]: {
            width:'70%'
          },
          [theme.breakpoints.down('sm')]: {
            width:'100%'
          },
        width:'40%',
        margin:'auto 0',
        fontFamily:'MyFirstFont'
    },

    firstRowCard:{
        [theme.breakpoints.down('sm')]: {
            width:'70% !important',
            margin:'30px auto !important',
          },
        width:'32%',
        margin:'30px 0',
        cursor:'pointer',
        background:'#f8f9fa',
        transition: 'transform .2s', 
        "&:hover": {
            transform: 'scale(1.1)',
       },
        padding:'50px 20px',
        textAlign:'center',
        boxShadow:'0px 5px 8px 2px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(7 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    },

    forImg:{
        [theme.breakpoints.down('sm')]: {
            width:'25% !important'
          },
        width:'35%',
        margin:'10px auto'
    },

    midDiv:{
        [theme.breakpoints.down('sm')]: {
            display:'block'
          },
        display:'flex',
        justifyContent:'space-between'
    }

}))

function DashboardContent() {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <h1>Dashboard</h1>
            <div className = {classes.midDiv}>
               
            <Card className = {classes.firstRowCard}>
                <img className = {classes.forImg} src = {AddUser}/>
                <p style ={{margin:'auto'}}>Create New Account</p>
            </Card>
            
            <Card className = {classes.firstRowCard}>
            <img className = {classes.forImg} src = {Invoice}/>
                <p style ={{margin:'auto'}}>Generate New Invoice</p>
            </Card>
            <Card className = {classes.firstRowCard}>
            <img className = {classes.forImg} src = {Stock}/>
                <p style ={{margin:'auto'}}>Stock Management</p>
            </Card>
            </div>
            <div className = {classes.midDiv}>
            <Card className = {classes.firstRowCard}>
            <img className = {classes.forImg} src = {List}/>
                <p style ={{margin:'auto'}}>Stockist Mangement</p>
            </Card>
            <Card className = {classes.firstRowCard}>
            <img className = {classes.forImg} src = {Cmanagement}/>
                <p style ={{margin:'auto'}}>CNF Management</p>
            </Card>
            <Card className = {classes.firstRowCard}>
            <img className = {classes.forImg} src = {Payment}/>
                <p style ={{margin:'auto'}}>Payment Settings</p>
            </Card>
            </div>
            <div className = {classes.midDiv}>
            <Card className = {classes.firstRowCard} style ={{width:'65%'}}>
            <img className = {classes.forImg} src = {Employee} style ={{width:'20%'}} />
                <p style ={{margin:'auto'}}>Employee Reports</p>
            </Card>
            <Card className = {classes.firstRowCard}>
            <img className = {classes.forImg} src = {Orders}/>
                <p style ={{margin:'auto'}}>Orders</p>
            </Card>
            </div>
            <div className = {classes.midDiv}>
            <Card className = {classes.firstRowCard} style ={{width:'48%'}}>
            <img className = {classes.forImg} src = {Track} style ={{width:'20%'}}/>
                <p style ={{margin:'auto'}}>Track Location</p>
            </Card>
            <Card className = {classes.firstRowCard} style ={{width:'48%'}}>
            <img className = {classes.forImg} src = {Message} style ={{width:'20%'}}/>
                <p style ={{margin:'auto'}}>Send Message</p>
            </Card>
            </div>
            
        </div>
    )
}

export default DashboardContent
