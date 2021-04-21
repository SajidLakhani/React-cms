import { makeStyles } from '@material-ui/core';
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
        padding:'10px 0',
        border:'5px solid gray',
        width:'800px',
        margin:'20px auto'
    },
    content:{
        padding:'15px 25px',
        
    },
    row:{
        cursor:'pointer',
        
        boxShadow:'0px 3px #e2e1e1',
        "&:hover":{
            backgroundColor:'#1f9de7',
            color:'white',
            
           
        }
    },
    Headrow:{
        color:'white',
        backgroundColor:'#1f9de7'
    }
}))

const ManagerReport = () => {
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
            <h1>ABMEC PHARMACEUTICALS</h1>
            <p>Weekly Call Report Of Manager</p>
           {data.map((item)=>(
                <table className = {classes.table}>
                <thead >
                <h3 className = {classes.headingInside}>{item.day}</h3>
                    <tr className = {classes.Headrow}>
                        <th  className = {classes.content}>Placed Worked</th>
                        <th  className = {classes.content}>Core Dr's Name</th>
                        <th className = {classes.content}>Degree</th>
                        <th className = {classes.content}>Observation</th>
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
                        
                    </tr>
                    
                    ))}
                </tbody>
            </table>
           ))}
        </div>
    );
};

export default ManagerReport;