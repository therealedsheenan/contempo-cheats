import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import { Menu } from 'antd'

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
          <main className="Content">
            <Menu
              style={{ width: 256 }}
              mode="inline"
            >
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/modal">Modal</Link></Menu.Item>
            </Menu>
            <section className="Content-main">
              <Route exact path="/" component={() => (<div>Home page</div>)}/>
              <Route exact path="/modal" component={Modal}/>
            </section>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
