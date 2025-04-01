import { useState } from 'react'
import './App.css'

function App() {
  let [value, setValue] = useState(0);

  let update =() =>{
    setValue(value+1);
  } 

  return (
    <>
      <h1>tis is counter {value}</h1>
      <button onClick={update}>add</button>

    </>
  )
}

export default App
