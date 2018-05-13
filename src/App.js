import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Modal from './components/Modal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contempo Cheats!</h1>
        </header>
        <Router>
          <div>
            <Fragment>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/modal">Modal</Link></li>
            </Fragment>
            <hr/>
            <Route exact path="/" component={() => (<div>Home page</div>)}/>
            <Route exact path="/modal" component={Modal}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
