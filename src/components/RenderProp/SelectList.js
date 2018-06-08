import React from "react";
import PropTypes from "prop-types";

export default class SelectList extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  };

  fetchData = async () => {
    const res = await fetch(this.props.url);
    const data = await res.json();

    this.setState({
      list: data,
      isLoading: false
    });
  };

  handleSelectItem = id => {
    if (id) {
      this.setState({
        selectedItem: this.state.list.filter(l => l.id === id)[0]
      });
    }
  };

  state = {
    list: [],
    selectedItem: {},
    isLoading: false
  };

  initState = this.state;

  resetState = () => this.setState(this.initState);

  // return to be exposed objects
  getStateAndHelpers() {
    return {
      ...this.state,
      handleSelectItem: this.handleSelectItem
    };
  }

  componentDidMount() {
    // eslint-disable-next-line
    this.setState({ isLoading: true }, this.fetchData);
  }

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}
