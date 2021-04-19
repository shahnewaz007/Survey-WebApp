import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import './App.css';
import LoginPage from "./Login/Login";
import Homepage from "./Homepage/Homepage";

import RegisterPage from "./Register/Register";




function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>

          <Route path="/" component={Homepage} exact />
          <Route path="/login" component={LoginPage} exact />

          <Route path="/register" component={RegisterPage} exact />

          
        </Switch>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;
