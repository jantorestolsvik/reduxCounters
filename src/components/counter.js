import React, {Component} from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <span>{this.state.counter}</span>
                <button onClick={() => {
                this.setState({counter: this.state.counter + 1})
                }}>+
                </button>
                <button onClick={() => {
                this.setState({counter: this.state.counter - 1})
                }}>-
                </button>
            </div>
        )
    }
}

export default Counter;