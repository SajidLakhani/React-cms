import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from './components/Login/Login'
import Dashboard from "./components/Dashboard/Dashboard";
import CreateUser from './components/CreateUser/index'
import StockList from "./components/StockList/index";
import Medicine from "./components/Medicine/index";
import Unit from './components/Unit/index'
import MedicineCategory from './components/Medicine/MedicineCategory/index'
import ManageMedicine from './components/Medicine/ManageMedicine/index'
import AddPurchase from './components/Purchase/AddPurchase/index'
import ManagePurchase from './components/Purchase/ManagePurchase/index'
import Return from "./components/Return/Return/index";
import StockReturn from "./components/Return/StockReturn/index";
import ManufacturerReturn from "./components/Return/ManufacturerReturn/index";
import WastegaReturn from "./components/Return/WastageReturn/index";
import ClosingReport from './components/Report/ClosingReport/index'
import TodaysReport from './components/Report/TodaysReport/index'
import SalesReport from './components/Report/SalesReport/index'
import PurchaseReport from './components/Report/PurchaseReport/index'
import ReportMedicineWise from './components/Report/ReportMedicineWise/index'
function App() {
  return (
   
    <Router>
    <Switch>
     
      <Route  path="/dashboard" component={Dashboard} />
      <Route  path="/create-user" component={CreateUser} />
      <Route  path="/stocklist" component={StockList} />
      <Route  path="/add-medicine" component={Medicine} />
      <Route  path="/unit" component={Unit} />
      <Route  path="/med-category" component={MedicineCategory} />
      <Route  path="/manage-med" component={ManageMedicine} />
      <Route  path="/add-purchase" component={AddPurchase} />
      <Route  path="/manage-purchase" component={ManagePurchase} />
      <Route  path="/return" component={Return} />
      <Route  path="/stock-return" component={StockReturn} />
      <Route  path="/manufacturer-return" component={ManufacturerReturn} />
      <Route  path="/waste-return" component={WastegaReturn} />
      <Route  path="/closing-report" component={ClosingReport} />
      <Route  path="/today-report" component={TodaysReport} />
      <Route  path="/sales-report" component={SalesReport} />
      <Route  path="/purchase-report" component={PurchaseReport} />
      <Route  path="/medicine-wise-report" component={ReportMedicineWise} />
      </Switch>
      </Router>
  );
}

export default App;

