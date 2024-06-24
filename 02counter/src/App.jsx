import React ,{ useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // let counter = 5
  const addValue =() =>{
    console.log("clicked",counter)
    if(counter <20){

      setCounter(counter + 1)
    }
  }
  const removeValue =() =>{
    console.log("clicked",counter)
    if(counter){

      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value:{counter}</h2>
      <button
        onClick={addValue}
      >
        Add value
      </button>
      <br />
      <button
        onClick={removeValue}
      >
        Decrease value
      </button>
    </>
  )
}

export default App
