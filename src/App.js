import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
    

const Hats = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);


const App = () => (
   <Switch>
       <Route exact path="/" component={HomePage}></Route>
       <Route  path="/hats" component={Hats}></Route>
   </Switch>
);

export default App;
