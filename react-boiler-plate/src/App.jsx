import './App.css'
import { useState, Component } from 'react'

// Counter in Function Component
// function App() {
//   const [count, updateCount] = useState(0)
//   return (
//     <div className="App">
//       <h1>Counter App</h1>
//       <h1 style={{fontSize: 70}}>{count}</h1>
//       <button onClick={()=>{updateCount(count + 1)}}>Add Count</button>
//       <button onClick={()=>{updateCount(0)}}>Clear Count</button>
//     </div>
//   );
// }

// Counter in Class Component
class App extends Component{
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  render(){
    return(
    <div className="App">
      <h1>Counter App</h1>
      <h1 style={{fontSize: 70}}>{this.state.count}</h1>
      <button onClick={()=>{this.setState({count: this.state.count + 1})}}>Add Count</button>
      <button onClick={()=>{this.setState({count: 0})}}>Clear Count</button>
    </div>
    )
  }
}

export default App;
