import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ' ',
            submit: ' '
        }
        //bind this
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //method handling input
    handleInput(event) {
        this.setState({
            input: event.target.value
        })
    }

    //method handling form submission
    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            submit: this.state.input
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleInput} />
                    <button type='submit'>Gets the shit submitted</button>
                </form>
                <h3>{this.state.submit}</h3>
            </div>
        );
    }
}

export default MyForm;