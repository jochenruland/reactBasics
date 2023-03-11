import React from 'react';
//import ReactDOM from 'react-dom/client';

class ControlledInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ' '
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange}></input>
                <h4>Controlled input: {this.state.input}</h4>
            </div>
        )
    }
}

export default ControlledInput;