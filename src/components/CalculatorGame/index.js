import React from "react";

class CalculatorGame extends React.Component {
  randomTargetvalue = () => Math.floor(10 * Math.random());
  getNumbers = () =>
    Array.from({ length: 10 }).map(() => 1 + Math.floor(10 * Math.random()));

  initialState = {
    targetValue: this.randomTargetvalue(),
    randomNumbers: this.getNumbers(),
    selectedNumbers: [],
    gameStatus: ""
  };

  state = this.initialState;

  handleButtonSelect = val => {
    // calculate game status

    this.setState(
      ({ selectedNumbers }) => ({
        selectedNumbers: selectedNumbers.concat(val)
      }),
      () => this.calculate()
    );
  };

  resetGame = () =>
    this.setState({
      ...this.initialState,
      targetValue: this.randomTargetvalue(),
      randomNumbers: this.getNumbers()
    });

  calculate() {
    if (this.state.selectedNumbers.length > 1) {
      const total = this.state.selectedNumbers.reduce(
        (acc, curr) => acc + curr,
        0
      );

      if (total === this.state.targetValue) {
        this.setState({
          gameStatus: "WON"
        });
      } else {
        this.setState({
          gameStatus: "LOST"
        });
      }
    }
  }

  render() {
    console.log(this.state.selectedNumbers);
    const { state } = this;
    return (
      <div>
        <h1>Calculate this: {state.targetValue}</h1>
        {this.state.randomNumbers.map((val, key) => (
          <button
            disabled={state.gameStatus}
            onClick={() => this.handleButtonSelect(val)}
            key={`${val}-${key}`}
          >
            {val}
          </button>
        ))}
        {state.gameStatus && (
          <h1 style={{ color: "green" }}>{state.gameStatus}</h1>
        )}
        {state.selectedNumbers &&
          state.selectedNumbers.length > 1 && (
            <div>
              {state.selectedNumbers.map((val, key) => (
                <span key={key}>{val}</span>
              ))}
            </div>
          )}
        {state.gameStatus && (
          <button onClick={this.resetGame}>Reset game</button>
        )}
      </div>
    );
  }
}

export default CalculatorGame;
