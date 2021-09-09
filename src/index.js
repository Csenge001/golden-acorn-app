import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Button(props) {
   return (
     <button onClick={props.onClickFunction} onKeyDown={props.keyDownFunction}>{props.text}</button>
   )
}


function Display(props) {
  return (
    <label>{props.message}</label>
  )
}


function App() {
  const [counter, setCounter] = useState(0)
  let incrementByOnclick = () => setCounter(counter + 1)
  let decrementByOnclick = () => setCounter(counter - 1)
  let incrementByArrow = (e) => (e.keyCode === 38) ? setCounter(counter + 1) : setCounter(counter)
  let decrementByArrow = (e) => (e.keyCode === 40) ? setCounter(counter - 1) : setCounter(counter)

  if(counter <= 0) {
    decrementByOnclick = () => setCounter(0)
    decrementByArrow = () => setCounter(0)
  }
  
  return (
    <div> 
      <Button text= "Buy one" keyDownFunction={incrementByArrow} onClickFunction={incrementByOnclick}/>
      <Display message={counter}/> 
      <Button text= "Eat one" keyDownFunction={decrementByArrow} onClickFunction={decrementByOnclick}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))