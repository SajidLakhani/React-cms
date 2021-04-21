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
import ProductListing from './components/ProductListing/index'
import PaymentSetting from './components/PaymentSetting/index'
import Rsm from './components/EmployeeReport/RSM/index'
import Asm from './components/EmployeeReport/ASM/index'
import Mr from './components/EmployeeReport/MR/index'
import Orders from './components/Orders/index'
import Message from './components/Message/index'
import RSMDashBoard from './components/RSMDashboard/RSMDashBoard/index'
import TourRsmWithAsm from './components/RSMDashboard/TourRsmWithAsm/index'
import ManagerReport from "./components/RSMDashboard/ManagerReport/index";
import GiftManagement from "./components/RSMDashboard/GiftManagement/index";
import OrderManagement from "./components/RSMDashboard/OrderManagement/index";
import DailyASMReport from "./components/RSMDashboard/DailyASMReport/index";
function App() {
  return (
   
    <Router>
    <Switch>
     
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/rsm-dashboard" component={RSMDashBoard} />
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
      <Route  path="/product-listing" component={ProductListing} />
      <Route  path="/payment" component={PaymentSetting} />
      <Route  path="/rsm-report" component={Rsm} />
      <Route  path="/asm-report" component={Asm} />
      <Route  path="/mr-report" component={Mr} />
      <Route  path="/orders" component={Orders} />
      <Route  path="/message" component={Message} />
      <Route  path="/manager-report" component={ManagerReport} />
      <Route  path="/tour-of-rsm" component={TourRsmWithAsm} />
      <Route  path="/gift-management" component={GiftManagement} />
      <Route  path="/order-management" component={OrderManagement} />
      <Route  path="/daily-asm-report" component={DailyASMReport} />
      </Switch>
      </Router>
  );
}

export default App;

