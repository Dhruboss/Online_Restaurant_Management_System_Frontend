import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import axios from 'axios';
import Home from './Components/Home';
//import Head from './Components/Head';
import Contact from './Components/Contact';
//import Productlist from './Components/Productlist';
//import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Profiledata from './Components/Profiledata';


const user =localStorage.getItem('userData')
console.log(user)

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>

      <Switch>

        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>

        <Route exact path="/profile">
          {console.log('user')}
        {(user)?
                    <Profiledata></Profiledata>
                    :<Login></Login>}
        </Route>
        
        {/* <Route exact path="/productlist">
          <Productlist/>
        </Route>

        <Route exact path="/productlist/:id">
          <ProductDetails/>
          </Route> */}
        <Route exact path="/login">
          <Login/>
          </Route>
        <Route exact path="/registration">
          <Registration/>
          </Route>

      </Switch>
   
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
