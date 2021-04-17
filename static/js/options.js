'use strict';

class OptionsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
        return React.createElement(
            'div',
            {className: "options_expanded"},
            React.createElement('h1', {}, "Rina"),
            React.createElement('div', {onClick: () => this.setState({ liked: false }), className: "options_button", style: {color: "white"}}, "X"),
            React.createElement('a', {className: "options_option", href: "/authentication/logout"}, "Log Out"),
            React.createElement('a', {className: "options_option", href: "/about"}, "About"),
            React.createElement('a', {className: "options_option", href: "#"}, "Donate"),
        );
    }

    return React.createElement(
      'div',
      { onClick: () => this.setState({ liked: true }), className: "options_button"},
      '☰'
    );
  }
}

const domContainer = document.querySelector('#options');
ReactDOM.render(React.createElement(OptionsButton), domContainer);