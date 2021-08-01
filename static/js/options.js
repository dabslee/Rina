'use strict';

class OptionsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { options_open: false };
    }

    render() {
        if (this.state.options_open) {
            return (
                <div class="options_expanded">
                    <h1>Rina</h1>
                    <div onClick={() => this.setState({ options_open: false })} className="options_button" style={{color: "white"}}>X</div>
                    <a class="options_option" href="/authentication/logout">Log Out</a>
                    <a class="options_option" href="/about">About</a>
                    <a class="options_option" href="#">Donate</a>
                </div>
            )
        }

        return (
            <div onClick={() => this.setState({ options_open: true })} className="options_button">☰</div>
        )
    }
}

ReactDOM.render(
    React.createElement(OptionsButton),
    document.querySelector('#options')
);