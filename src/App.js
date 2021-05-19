import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import './App.css';
import LoginPage from "./Login/Login";
import Homepage from "./Homepage/Homepage";
import CreateSurvey from "./Client/Create Survey/CreateSurvey";
import NewSurveyList from"./User/Survey/NewSurveyList";
import completeSurvey from"./User/Survey/completeSurvey";



import RegisterPage from "./Register/Register";




function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>

          <Route path="/" component={Homepage} exact />
          <Route path="/login" component={LoginPage} exact />

          <Route path="/register" component={RegisterPage} exact />

          <Route path="/createSurvey" component={CreateSurvey} exact />
          <Route path="/NewSurveyList" component={NewSurveyList} exact />
          <Route path="/completeSurvey" component={completeSurvey} exact />




          
        </Switch>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;
