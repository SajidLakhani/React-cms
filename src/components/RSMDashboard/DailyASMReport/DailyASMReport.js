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
       
        border:'5px solid gray',
        width:'fit-content',
        margin:'20px auto'
    },
    content:{
        padding:'10px 20px',
        
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
    }
}))

const DailyASMReport = () => {
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
            <h1>Daily Report Of ASM</h1>
           
         
                <table className = {classes.table}>
                <thead >
                    <tr className = {classes.Headrow}>
                        <th  className = {classes.content}>Date</th>
                        <th  className = {classes.content}>Days</th>
                        <th className = {classes.content}>HQ</th>
                        <th className = {classes.content}>Name</th>
                        <th className = {classes.content}>No Of Doctors</th>
                        <th className = {classes.content}>No Of Chemist</th>
                        <th className = {classes.content}>Amount Of Business</th>
                        <th className = {classes.content}>Expected Business</th>
                        <th className = {classes.content}>With MR Name</th>
                        <th className = {classes.content}>Location</th>
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
                        <td className = {classes.content}>None</td>
                        <td className = {classes.content}>None</td>
                    </tr>
                    
                    ))}
                </tbody>
            </table>
        
        </div>
    );
};

export default DailyASMReport;