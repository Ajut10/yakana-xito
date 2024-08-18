import React, { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  //render method
  // array of elements
  // return [<h1>hello world</h1>,
  //    <p>this is new </p>];
  
  // div
    //  return (
    //   <div>
    //     <h1>hello</h1>
    //     <p>Lorem ipsum dolor sit.</p>
    //   </div>
    //  )
    
    //  return (
    //   <React.Fragment>
    //     <h1>hello</h1>
    //     <p>Lorem ipsum dolor sit.</p>
    //   </React.Fragment>
    //  )

    // 
    const styling ={
      color: "Green",
      font:"4rem",
    }
     return (
      <>
        {/* inline css */}
        <h1 style={{color:"green",font:"2rem"}}>hello</h1>
        {/* variable */}
        <p style={styling}>Lorem ipsum dolor sit.</p>
        <span className="text-red-500">Lorem ipsum dolor sit amet.</span>
      </>
     );

    
  
}

export default App
