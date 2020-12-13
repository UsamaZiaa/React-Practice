import './App.css'
import { useState } from 'react'

function App() {
  const lessDesc = "React is an open-source, front end, JavaScript library for building user interfaces or UI components."
  const moreDesc = "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications"
  const [showMore, updateshowMore] = useState(false)
  return (
    <div>
      <p>{showMore? moreDesc : lessDesc}<span style={{cursor: 'pointer', color: 'blue'}} onClick={()=>{updateshowMore(!showMore)}}> {showMore? "Show Less" : "Show More"}</span></p>
    </div>
  );
}

export default App;
