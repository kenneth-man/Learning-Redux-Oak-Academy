import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Card from './components/Card.js';
import './App.css';

//'Switch' tag makes sure only one 'Route' is shown
//'/:user' is a dynamic route parameter
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path='/' component={Home}/>

          <Route exact path='/about' component={About}/>

          <Route exact path='/contact' component={Contact}/>

          <Route path='/:user' component={Card}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;