import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [count ,setCount]=useState(0)

  const incrementFn=()=>{
    setCount(count +1)
  }

  const decreamentFN =()=>{
    if(count>0){
      setCount(count -1)
    } else {
      setCount(0)
    }
  }



  return (
    <div>
      <button onClick={incrementFn}>+</button>
      <h1>{count}</h1>
      <button onClick={decreamentFN}>-</button>
      
    </div>
  )
}

export default App
