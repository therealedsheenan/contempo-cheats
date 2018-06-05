import React, { Component } from "react";

class DecideGame extends Component {
  static Team1 = ({ won }) =>
    won === 1 ? (
      <div style={{ color: "green" }}>Team 1 won!</div>
    ) : (
      <div>Team 1 lost! </div>
    );
  static Team2 = ({ won }) =>
    won === 2 ? (
      <div style={{ color: "green" }}>Team 2 won!</div>
    ) : (
      <div>Team 2 lost! </div>
    );
  static Team3 = ({ won }) =>
    won === 3 ? (
      <div style={{ color: "green" }}>Team 3 won!</div>
    ) : (
      <div>Team 3 lost! </div>
    );

  state = {
    winnerTeam: ""
  };

  componentWillMount() {
    this.setState({
      winnerTeam: Math.floor(Math.random() * (4 - 1) + 1)
    });
  }

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        won: this.state.winnerTeam
      })
    );
  }
}

const Game = () => (
  <div>
    <h1>Random winner</h1>
    <div>On page refresh, it randomize the winner team.</div>
    <div>This component uses static properties as component.</div>
    <hr />
    <DecideGame>
      <DecideGame.Team1 />
      <DecideGame.Team2 />
      <DecideGame.Team3 />
    </DecideGame>
  </div>
);

export default Game;
