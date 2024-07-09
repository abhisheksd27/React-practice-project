import React from 'react'
import './App.css'

const App = () => {

  const [state, setState] = React.useState(false)
  const handleToggle=()=>{
    setState(!state)
    
  }


  return (
    <div>
      <label>
        <input type='checkbox' value={state} onChange={handleToggle}/>
      </label>
      <p>{
        state?"On":"Off"
      }</p>
      
      
    </div>
  )
}

export default App
