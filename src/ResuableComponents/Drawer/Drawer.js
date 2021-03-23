import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '@material-ui/core/Drawer';
import SideBar from './SideBar'
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Header from './Header';
import DashboardContent from '../../components/Dashboard/DashboardContent';
import CreateUser from '../../components/CreateUser/CreateUser';
import Footer from './Footer';
import StockList from '../../components/StockList/StockList';
import AddMedicine from '../../components/Medicine/AddMedicine';
import UnitTable from '../../components/Unit/UnitTable';
import MedicineCategory from '../../components/Medicine/MedicineCategory/MedicineCategory';
import ManageMedicine from '../../components/Medicine/ManageMedicine/ManageMedicine';
import AddPurchase from '../../components/Purchase/AddPurchase/AddPurchase';
import ManagePurchase from '../../components/Purchase/ManagePurchase/ManagePurchase';
import Return from '../../components/Return/Return/Return';
import StockReturn from '../../components/Return/StockReturn/StockReturn';
import ManufacturerReturn from '../../components/Return/ManufacturerReturn/ManufacturerReturn';
import WastageReturn from '../../components/Return/WastageReturn/WastageReturn';
import ClosingReport from '../../components/Report/ClosingReport/ClosingReport';
import TodaysReport from '../../components/Report/TodaysReport/TodaysReport';
import SalesReport from '../../components/Report/SalesReport/SalesReport';
import PurchaseReport from '../../components/Report/PurchaseReport/PurchaseReport';
import ReportMedicineWise from '../../components/Report/ReportMedicineWise/ReportMedicineWise';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#1f9de7',
        color: 'white',
        boxShadow:'unset',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    borderRight:'unset',
    background: '#ebebeb',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function SideDrawer({dashboard , stocklist , Addmedicine, unit, medCategory, manageMed , managePurchase , addPurchase,
 normalReturn , manufacturerReturn , stockReturn , wastageReturn, closingReport, todaysReport, salesReport,purchaseReport,
 medicineWise

}) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <SideBar/>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Header/>
          
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
    
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {dashboard ? <DashboardContent/> : stocklist ? <StockList/> : Addmedicine ? <AddMedicine/> : unit ? <UnitTable/> : medCategory ? <MedicineCategory/> : manageMed ? <ManageMedicine/>
         : addPurchase ? <AddPurchase/> : managePurchase ? <ManagePurchase/> 
         : normalReturn ? <Return/> : stockReturn ? <StockReturn/> : manufacturerReturn ? <ManufacturerReturn/> : wastageReturn ? <WastageReturn/>
         : closingReport ? <ClosingReport/> : todaysReport ? <TodaysReport/> : salesReport ? <SalesReport/> : purchaseReport ? <PurchaseReport/>
         : medicineWise ? <ReportMedicineWise/>
         : <CreateUser/>}
        <Footer/>
        
      </main>
   
    </div>
  );
}

export default SideDrawer;