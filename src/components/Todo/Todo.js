import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  static defaultProps = {};

  static propTypes = {
    children: PropTypes.func.isRequired
  };

  initState = {
    newTodo: "",
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
    if (this.state.newTodo) {
      this.setState(prevState => ({
        newTodo: "",
        todos: prevState.todos.concat(this.state.newTodo)
      }));
    }
  };

  removeTodo = value => {
    this.setState({ todos: this.state.todos.filter(v => v !== value) });
  };

  render() {
    return this.props.children({
      ...this.state,
      removeTodo: this.removeTodo,
      addTodo: this.addTodo,
      todoTyping: this.todoTyping,
      resetStates: this.resetStates
    });
  }
}

export default Todo;
