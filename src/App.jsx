import {  useState } from 'react'

import './App.css'
import Show from './Show'
const setResult = Math.floor(Math.random() * 10) + 1;
function App() {
  
  const [input, setInput] = useState("")
 const handleChange=(e)=>{ 
    setInput( e.target.value)
    console.log('state', input);
 }
  return (
    <>
      <div className="container">
        <div className="head">
          <label htmlFor="input-box"><h2>Guess The Number between 1 to 10 </h2></label> <br />
          <input type="text" id='input-box' name='input-box' onChange={handleChange}/>
        </div>
        <Show setResult={setResult} input={input}/>
      </div>
        
    </>
  )
}

export default App
