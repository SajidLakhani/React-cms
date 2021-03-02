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
function App() {
  return (
   
    <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route  path="/dashboard" component={Dashboard} />
      <Route  path="/create-user" component={CreateUser} />
      <Route  path="/stocklist" component={StockList} />
      </Switch>
      </Router>
  );
}

export default App;
