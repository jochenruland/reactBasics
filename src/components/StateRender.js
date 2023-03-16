import React from "react";

class StateRender extends React.Component {
    constructor(props) {
        super(props)
        // this.state
        // bind methods if any
    }

    render() {
        return(
            <div>
                <p>{this.props.inputValue}</p>
            </div>
        )
    }
}

export default StateRender;