import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [text , setText] = useState("")

  


  return (
    <div>
    <h1>Enter the text you want to Display</h1>
    <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
    <h1>{text}</h1>
      
    </div>
  )
}

export default App
