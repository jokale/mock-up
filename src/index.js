import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import App from './App';
// import * as serviceWorker from './serviceWorker';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Location from './Components/Location'
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    
    <Router>
      <App />
 
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/location" component={Location} />

  
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
