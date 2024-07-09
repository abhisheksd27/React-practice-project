import React from 'react'
import "./App.css"
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [data , setData] = useState([]);



  useEffect(
    ()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=> res.json())
      .then((data)=>setData(data))
    },[]
  )


  return (
    <div>
    <ul>
      {
        data.map((item,index)=>(
          <>
          <li key={index}>{item.title}</li>
          <br/>
          </>
        ))
      }
    </ul>
      
      
    </div>
  )
}

export default App
