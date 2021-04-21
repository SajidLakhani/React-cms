import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    Main:{
        textAlign:'center',
        fontFamily:'MyFirstFont',
        marginBottom:'100px',
        marginTop:'30px'
    },

    headingInside:{
        margin:'10px auto',
        
    },

    table:{
       
        border:'5px solid gray',
        width:'fit-content',
        margin:'20px auto'
    },
    content:{
        padding:'15px 25px',
        
    },
    row:{
        cursor:'pointer',
        padding:'10px',
        boxShadow:'0px 3px #e2e1e1',
        "&:hover":{
            backgroundColor:'#1f9de7',
            color:'white',
            
           
        }
    },
    Headrow:{
        color:'white',
        backgroundColor:'#1f9de7'
    },
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

const OrderManagement = () => {
    const classes = useStyles();
    const data = [
        {
            day:'Monday'
        },
        {
            day:'Tuesday'
        },
        {
            day:'Wednesday'
        },
        {
            day:'Thursday'
        },
        {
            day:'Friday'
        },
        {
            day:'Saturday'
        },
    ]
    return (
        <div className = {classes.Main}>
            <h1>Order Management</h1>
            <Button className={classes.button} style ={{background:'#1f9de7'}} >Create Order</Button>
                <table className = {classes.table}>
                <thead >
                    <tr className = {classes.Headrow}>
                        <th  className = {classes.content}>Date</th>
                        <th  className = {classes.content}>Day</th>
                        <th className = {classes.content}>Production Name</th>
                        <th className = {classes.content}>Order No</th>
                        <th className = {classes.content}>Order Quantity</th>
                        <th className = {classes.content}>Amount</th>
                        <th className = {classes.content}>Location</th>
                        <th className = {classes.content}>HQ</th>
                        <th className = {classes.content}>Remarks</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {[1,2,3,4,5].map((item)=>(
                        
                        <tr className = {classes.row}>
                        <td className = {classes.content}>India</td>
                        <td className = {classes.content}>Amit</td>
                        <td className = {classes.content}>None</td>
                        <td className = {classes.content}>None</td>
                        <td className = {classes.content}>None</td>
                        <td className = {classes.content}>None</td>
                        <td className = {classes.content}>None</td>
                        <td className = {classes.content}>None</td>
                        <td className = {classes.content}>None</td>
                       
                        
                    </tr>
                    
                    ))}
                </tbody>
            </table>
        
        </div>
    );
};

export default OrderManagement;