import { connect } from "react-redux";
import React from 'react';
import Counter from "./components/Counter";

class App extends React.Component {

  onIncrement = () => {
    this.props.dispatch({
      type: "increment",
      count: 100
    })
  }

  onDecrement = () => {
    this.props.dispatch({
      type: "decrement",
      count: 100
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Counter App</h1>
        <h2>Count: {this.props.counter}</h2>
        <Counter />
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    )
  }
}

// convert redux state in current component props;
function mapStateToProps(state) {
  console.log(state)
  return {
    counter: state.count
  }
}

const myConnect = connect(mapStateToProps)

export default myConnect(App);