import {  Card, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles((theme) => ({
    Tablemain:{
        [theme.breakpoints.down('sm')]: {
            width:'150%'
          },
        width:'100%',
        margin:'auto'
      },
      forCard:{
        padding:'20px 20px', margin:'30px 0',
        [theme.breakpoints.down('sm')]: {
            overflowX:'scroll'
          },
      },
  innerDiv:{
    border:'1px solid #e4e5e7',
  },
  forHeadings:{
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 45px',
    backgroundColor:'#1f9de7',
    color:'white',
    borderBottom:'1px solid #e4e5e7',
  },
  forAll:{
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 60px',
    borderBottom:'1px solid #e4e5e7',
    '&:hover':{
      backgroundColor:'#1f9de7',
      color:'white',
    }
  },
  forText:{
    margin:'auto 0'
  },

}))

const ManageMedicine = () => {
  const data = [
    {
      name:'Bottles',
      id:'1',
      category:'Syrup',
      manufacturer:'Pharma',
      sellprice:'60',
      purchasePrice:'50'
    },
    {
      name:'Tablets',
      id:'2',
      category:'Syrup',
      manufacturer:'Pharma',
      sellprice:'60',
      purchasePrice:'50'
    },

    {
      name:'Capsul',
      id:'3',
      category:'Syrup',
      manufacturer:'Pharma',
      sellprice:'60',
      purchasePrice:'50'
    },

    {
      name:'Stripes',
      id:'4',
      category:'Syrup',
      manufacturer:'Pharma',
      sellprice:'60',
      purchasePrice:'50'
    },
    {
      name:'Syrups',
      id:'5',
      category:'Syrup',
      manufacturer:'Pharma',
      sellprice:'60',
      purchasePrice:'50'
    },
  ]
  const classes = useStyles();

  const handleEdit = () => {
    alert("Successfully Edited")
  }
  const handleDelete = () => {
    alert("Successfully Deleted")
  }
  return (
    <div style ={{padding:'40px 20px', fontFamily:'MyFirstFont'}}>
      <h1 style ={{margin:'5px 0'}}>Manage Medicine</h1>
     
      <Card className = {classes.forCard}>
        <h2 style ={{margin:'10px 0'}}>Manage Medicine List</h2>
      <div className = {classes.Tablemain}>
       <div className = {classes.innerDiv}>
         <div className = {classes.forHeadings}>
         <h3 className={classes.forText}>S.No</h3>
         <h3 className={classes.forText}>Medicine Name</h3>
         <h3  className={classes.forText}>Category</h3>
         <h3  className={classes.forText}>Manufacturer</h3>
         <h3  className={classes.forText}>Sell Price</h3>
         <h3  className={classes.forText}>Purchase Price</h3>
         <h3  className={classes.forText}>Actions</h3>
         </div>
         {data.map((item)=>(
            <div className = {classes.forAll}>
                <p className={classes.forText} >{item.id}</p>
            <p className={classes.forText} >{item.name}</p>
            <p className={classes.forText} >{item.category}</p>
            <p className={classes.forText} >{item.manufacturer}</p>
            <p className={classes.forText} >{item.sellprice}</p>
            <p className={classes.forText} >{item.purchasePrice}</p>
            <div className={classes.forText} style ={{display:'flex'}}>
              <EditOutlinedIcon onClick = {handleEdit} style ={{cursor:'pointer'}}/>
              <DeleteOutlineOutlinedIcon onClick = {handleDelete}  style ={{cursor:'pointer'}}/>
            </div>
            </div>
         ))}
        
        </div>        
    </div>
      </Card>
      
    </div>
   
  );
};

export default ManageMedicine;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
// import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
// import { Card } from '@material-ui/core';

// const useStyles = makeStyles({
//   table: {
//    width:'100%',
//    fontFamily:'MyFirstFont'
//   },
//   forTable:{
//       "&:hover":{
//         backgroundColor:'#1f9de7',
//         color:'white'
//       }
//   }
// });

// function createData(no, name, genericName, category, manufacturer,shelf,sellPrice,PurchasePrice,Strength) {
//   return { no, name, genericName, category, manufacturer ,shelf,sellPrice,PurchasePrice,Strength};
// }

// const rows = [
//   createData(1, 'ABMECZYME 200 ML()', '', 'Syrup', 'Abmec Pharma'),
//   createData(2, 'ABRAZOL-DSR ()', '', 'Capsule', 'Abmec Pharma'),
//   createData(3, 'ALITOS- DX()', '', 'Syrup', 'Abmec Pharma'),
//   createData(4, 'SWIPNAC P()', '', 'Tablet', 'Abmec Pharma'),
//   createData(5, 'SWIPNAC SP()', '', 'Syrup', 'Abmec Pharma'),
// ];

// export default function ManageMedicine() {
//   const classes = useStyles();
//   const handleEdit = () => {
//     alert("Successfully Edited")
//   }
//   const handleDelete = () => {
//     alert("Successfully Deleted")
//   }

//   return (
//     <div style ={{padding:'40px 20px', fontFamily:'MyFirstFont'}}>
//     <h1 style ={{margin:'5px 0'}}>Manage Medicine</h1>
//     <Card style ={{padding:'20px 20px', margin:'30px 0'}}>
//         <h2 style ={{margin:'10px 0'}}>Manage Medicine</h2>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead style ={{fontWeight:'bold'}}>
//           <TableRow>
//             <TableCell>S.No</TableCell>
//             <TableCell align="center">Medicine Name</TableCell>
//             <TableCell align="center">Generic Name</TableCell>
//             <TableCell align="center">Category</TableCell>
//             <TableCell align="center">Manufacturer</TableCell>
//             <TableCell align="center">Shelf</TableCell>
//             <TableCell align="center">Sell Price</TableCell>
//             <TableCell align="center">Purchase price</TableCell>
//             <TableCell align="center">Strength</TableCell>
//             <TableCell align="center">Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow className = {classes.forTable}  key={row.no}>
//               <TableCell component="th" scope="row">
//                 {row.no}
//               </TableCell>
//               <TableCell align="center">{row.name}</TableCell>
//               <TableCell align="center">{row.genericName}</TableCell>
//               <TableCell align="center">{row.category}</TableCell>
//               <TableCell align="center">{row.manufacturer}</TableCell>
//               <TableCell align="center">{row.shelf}</TableCell>
//               <TableCell align="center">{row.sellPrice}</TableCell>
//               <TableCell align="center">{row.PurchasePrice}</TableCell>
//               <TableCell align="center">{row.Strength}</TableCell>
//               <TableCell align="center" style ={{display:'flex', margin:'auto'}}><EditOutlinedIcon onClick = {handleEdit} style ={{cursor:'pointer'}}/>
//               <DeleteOutlineOutlinedIcon onClick = {handleDelete}  style ={{cursor:'pointer'}}/></TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//   </Card>
//   </div>
//   );
// }