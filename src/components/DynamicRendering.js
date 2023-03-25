import React from "react";

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            toDos: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState(
            this.state = {
                inputValue: e.target.value
            }
        )
    }

    handleSubmit() {
        //create array first and then assign to empty array in state
        const toDoList = this.state.inputValue.split(','); 
        this.setState(
            this.state = {
                toDos: toDoList
            }
        )
    }

    render() {
        const items = this.state.toDos.map((e,i) => <li key={e+i}>{e}</li>);

        return (
            <div>
                <textarea
                    value={this.state.inputValue}
                    placeholder='Put comma separeted ToDo List' 
                    onChange={this.handleChange} />
                <p>Check inputValue: {this.state.inputValue}</p><br/>
                <button onClick={this.handleSubmit}>Create ToDo List</button>
                <ul>{items}</ul>
            </div>
        )
    }
}

export default MyToDoList;