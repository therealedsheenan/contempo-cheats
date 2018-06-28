import React from "react";
import PropTypes from "prop-types";

class Linkify extends React.Component {
  state = {
    translatedText: ""
  };

  static defaultProps = {
    className: ""
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  componentDidMount() {
    if (this.props.text) {
      this.autoLink(this.props.text);
    }
  }

  autoLink = text => {
    const pattern = /(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi;
    const newText = text.replace(pattern, (match, space, url) => {
      const link = `<a class='${
        this.props.className
      }' href='${url}'>${url}</a>`;
      return `${space}${link}`;
    });

    this.setState({
      translatedText: newText
    });
  };

  render() {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: this.state.translatedText
        }}
      />
    );
  }
}

export default Linkify;
