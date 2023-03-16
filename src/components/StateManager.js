import React from 'react';
import StateChild from './StateChild';
import StateRender from './StateRender';

class StateManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imputValue: " "
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState(
            this.state={
                inputValue: event.target.value
            }
        )
    }

    //render method
    render() {
        return(
            <div>
                <StateChild inputValue={this.state.inputValue} handleChange={this.handleChange} />
                <StateRender inputValue={this.state.inputValue} />
            </div>
        )
    }
}

export default StateManager;