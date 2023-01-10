import React,{useState} from 'react'
import './App.css';

function App() {

const [value,setValue] = useState(0)
// const backgroundColors = ['black','goldenrod','crimson','skyblue','purple']

// const changeState = () => {
//   const randomColor = Math.floor(Math.random()*backgroundColors.length)
//   const choosenColor = backgroundColors[randomColor]
//   setValue(choosenColor)

// }
const decrement = () =>{
  value !== 0 &&  setValue(value-1)
}
const increment = () =>{
  value !== 100 && setValue(value+1)
}



  return (
    <div className="App" style ={{background:value}}>
      {/* <button onClick = {changeState}>{value}</button>
      <h1>{value ? 'Hello world' : 'Good bye'}</h1> */}
      <button onClick = {decrement}></button>
      <p>{value}</p>
      <button onClick = {increment}></button>
    </div>
  );
}

export default App;
