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
      </Switch>
      </Router>
  );
}

export default App;
