import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Counter }from './mycomponents/counter';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';
import { About } from './mycomponents/About';
import Gallery from './mycomponents/Gallery';

function App() {
  return (

    /*<div className="m-3">
      <Counter title="cat" value={1} image="images/profile.jpg"/>
      <Counter title="dog" value={2} image="images/dog.jpeg"/>
    </div>*/
    <Router>
      <nav className="navbar navbar-expand navbar-brand">
        <ul className="navbar-nav">
          <li>
          <Link className="nav-link"  to="/home">Home</Link>
          </li>
          <li>
          <Link className="nav-link" to="/counter">Counter</Link>
          </li>
          <li>
          <Link className="nav-link" to="/about">About</Link>
          </li>
        <li>
        <Link  className="nav-link" to="/gallery">Gallery</Link>
        </li>
        
          
        </ul>
        
      </nav>
      <div className="m-4">
       <Switch>
       <Route path="/home" ></Route>
         <Route path="/counter" component={Counter}></Route>
         <Route path="/about" component={About}></Route>

         <Route path="/gallery" component={Gallery}></Route>

       </Switch>
      </div>
    </Router>
   
   
  );
}

export default App;
