import React from "react";

class LifecycleMethods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: 1000,
            message: " "
        }
        // bind methods, if any
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    //Lifecycle methods
    componentWillMount() {
        //executed before first rendering
        console.log('executed before first rendering')
    }

    componentDidMount() {
        //executed after the component is mounted to the DOM, means after first render
        //place to put  API calls and updating the state, which will initialize a rerendering
        setTimeout(()=>{
            this.setState(
                this.state = {
                    activeUsers: this.state.activeUsers + 5
                }
            );
        }, 3000)

        //place to put event listeners, f.ex.
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        //place to clean up before component unmounts
        document.removeEventListener("keydown", this.handleKeyPress);
    }
    //shouldComponentUpdate()
    //componentDidUpdate()

    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.setState(
                this.state = {
                    message: this.state.message + "You pressed Enter"
                }
            )
        }    
    }
    

    render() {
        return (
            <div>
                <h3>Render component</h3>
                <h3>activeUsers: {this.state.activeUsers}</h3>
                <h4>{this.state.message}</h4>
            </div>
        )
    }
}

export default LifecycleMethods;