import React from "react";

// Conditional rendering with if/else statement
class BeOrNotToBe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controller: true,
        }
        this.clickHere = this.clickHere.bind(this);
    }

    clickHere() {
        this.setState(
            this.state = {
                controller: !this.state.controller
            }
        )

    }

    render() {
        // you can put JavaScript without curly braces, outside of the JSX code in the return statement
        if (this.state.controller) {
            return(
                <div>
                    <button onClick={this.clickHere}>Click here</button>
                    <h3>BE</h3>
                </div>
            )
        } else {
            return(
                <div>
                    <button onClick={this.clickHere}>Click here</button>
                    <h3>NOT TO BE</h3>
                </div>
            )
        }
        
    }
}
// Conditional rendering with {condition && <p>Markup</p>} statement
class HannieUndNannie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controller: true,
        }
        this.clickHere = this.clickHere.bind(this);
    }

    clickHere() {
        this.setState(
            this.state = {
                controller: !this.state.controller
            }
        )

    }

    render() {
        // you can put JavaScript without curly braces, outside of the JSX code in the return statement
        return(
            <div>
                <button onClick={this.clickHere}>Click here</button>
                {this.state.controller && <h3>Hannie</h3>}
                {!this.state.controller && <h3>Nannie</h3>}
            </div>
        )    
    }
}


//inline CSS through definition of a style object
const inputStyle = {
    width: 100,
    height: 30,
    margin: 5
}

// conditional rendering based on a previous input
class OneTwoThree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            conditionAge: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState(
            this.state = {
                inputValue: event.target.value,
                conditionAge: ''
            }
        )
    }

    handleSubmit() {
        this.setState(
            this.state = {
                conditionAge: this.state.inputValue
            }
        )
    }

    render() {
        // you can put javascript here without curly braces
        const buttonOne = <button onClick={this.handleSubmit}>Submit</button>;
        const buttonTwo = <button>You may Enter</button>;
        const buttonThree = <button>You shall Not Pass</button>;

        return(
            <div>
                <input
                    style={inputStyle}
                    type="Number"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                ></input><br/>
                <h3>{this.state.inputValue}</h3>
                
                {
                this.state.conditionAge ==='' ? buttonOne 
                : this.state.conditionAge >= 18 ? buttonTwo 
                : buttonThree
                }
            </div>
        )
    }
}

export {BeOrNotToBe, HannieUndNannie, OneTwoThree};