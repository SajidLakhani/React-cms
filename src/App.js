import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from './components/Login/Login'
function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
