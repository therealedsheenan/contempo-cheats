import React from "react";
import {
  BrowserRouter as Router,
  Link as Rlink,
  Route
} from "react-router-dom";
import { Menu } from "antd";

import Modal from "./components/Modal";
import RenderProp from "./components/RenderProp";
import Home from "./components/Home";
import Theme from "./components/Theme";
import Todo from "./components/Todo";
import GameLeaderSelect from "./components/GameLeaderSelect";

import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Contempo Cheats!</h1>
    </header>
    <Router>
      <main className="Content">
        <Menu style={{ width: 256 }} mode="inline">
          <Menu.Item key="1">
            <Rlink to="/">Home</Rlink>
          </Menu.Item>
          <Menu.Item key="2">
            <Rlink to="/modal">Modal</Rlink>
          </Menu.Item>
          <Menu.Item key="3">
            <Rlink to="/render-prop">RenderProp</Rlink>
          </Menu.Item>
          <Menu.Item key="4">
            <Rlink to="/todo">To-do</Rlink>
          </Menu.Item>
          <Menu.Item key="5">
            <Rlink to="/theme">Theme</Rlink>
          </Menu.Item>
          <Menu.Item key="6">
            <Rlink to="/game-leader-select">Game Leader Selection</Rlink>
          </Menu.Item>
        </Menu>
        <section className="Content-main">
          <Route exact path="/" component={Home} />
          <Route exact path="/modal" component={Modal} />
          <Route exact path="/render-prop" component={RenderProp} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/theme" component={Theme} />
          <Route
            exact
            path="/game-leader-select"
            component={GameLeaderSelect}
          />
        </section>
      </main>
    </Router>
  </div>
);

export default App;
