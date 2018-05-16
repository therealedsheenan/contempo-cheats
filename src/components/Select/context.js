import React, { Component, createContext } from 'react';

const SelectContext = createContext({

});

export class SelectProvider extends Component {
  state = {};
  render () {
    return (
      <SelectContext vale={this.state}>
        {this.props.children}
      </SelectContext>
    )
  }
}

export const SelectConsumer = SelectContext.Consumer;
