import React from 'react';
//import ReactDOM from 'react-dom/client';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrecment = this.decrecment.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrecment() {
        this.setState({
            count: this.state.count - 1
        })
    }
    reset() {
        this.setState({
            count: 0
        }) 
    }

    render() {
        return (
            <div>
                <button className="inc" onClick={this.increment}>Increment</button>
                    
                <button className="dec" onClick={this.decrecment}>Decrement</button>

                <button className="res" onClick={this.reset}>Reset</button>

                <h1>Current count: {this.state.count}</h1>
            </div>
        )
    }
}

export default Counter;