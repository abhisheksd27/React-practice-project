import React from 'react'
import './App.css'

const App = () => {
  const items ={
    'item1': 'Item 1',
    'item2': 'Item 2',
    'item3': 'Item 3',
    'item4': 'Item 4',
    'item5': 'Item 5'
  }

  const fruits =[
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple'
  ]


  return (
    <div>
    <ul>
      {
        Object.entries(items).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))
      }
    </ul>

    <br/>
    <ul>
      {fruits.map((items,index)=>{
        return (
          <li key={index}>{items}</li>
        )
      })}
    </ul>

    <br/>
    <ul>
        {Object.values(items).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      
    </div>
  )
}

export default App
