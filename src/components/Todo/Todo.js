import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  static defaultProps = {};

  static propTypes = {};

  initState = {
    newTodo: '',
    todos: []
  };

  state = this.initState;

  resetStates = () => {
    this.setState(this.initState);
  };

  todoTyping = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    this.setState(prevState => ({ newTodo: '', todos: prevState.todos.concat(this.state.newTodo) }));
  };

  removeTodo = value => {
    this.setState({ todos: this.state.todos.filter(v => v !== value) });
  };

  render() {
    return (
      <div>
        {this.props.render({
          ...this.state,
          removeTodo: this.removeTodo,
          addTodo: this.addTodo,
          todoTyping: this.todoTyping,
          resetStates: this.resetStates
        })}
      </div>
    );
  }
}

export default Todo;
