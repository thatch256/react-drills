import React, {Component} from 'react'

class Todo extends Component {
    render() {
        return(
            <p>{this.props.input}</p>
        )
    }
}

export default Todo