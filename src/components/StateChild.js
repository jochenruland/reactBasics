import React from 'react';

class StateChild extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {}
        // bind methods if any
    }

    render() {
        return(
            <div>
                <input value={this.props.inputValue} onChange={this.props.handleChange}></input>
            </div>
        )
    }
}

export default StateChild;