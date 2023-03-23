import React from "react";

class OnlyEvenNumbersRender extends React.Component {
    constructor(probs) {
        super(probs)
        this.state = {
            numVal: 0
        }
        // bind methods if any
        this.addValue = this.addValue.bind(this);
    }

    addValue() {
        this.setState(
            this.state = {
                numVal: this.state.numVal + 1 
            }
        ) 
    }

    //LifecycelMethods --> Conditional Update of a component when props are passed or state is changed
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.numVal%2==0) {
            return true;
        }
        return false;
    }

    componentDidUpdate() {
        console.log('Component re-rendered.');
    }

    render() {
        return(
            <div>
                <SetStateButton numVal={this.state.numVal} addValue={this.addValue} />
                <h3>New rendered component returns: {this.state.numVal}</h3>
            </div>
        )
    }
    
}

class SetStateButton extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {}
        //bind methods if any    
    }

    render() {
        return (
            <div>
                <button onClick={this.props.addValue}>Render yes/no</button>
            </div>
        )
    }
}

export default OnlyEvenNumbersRender;