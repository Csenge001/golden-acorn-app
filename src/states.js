import { useState } from 'react'


const States = () => {
    const [counter, setCounter] = useState(0)
    let IncrementByOnclick = () => setCounter(counter + 1)
    let DecrementByOnclick = () => setCounter(counter - 1)
   
    if(counter <= 0) {
       DecrementByOnclick = () => setCounter(0)
    }

    const Button = (props) => <button onClick={props.onClickFunction}>{props.text}</button>
    const Display = (props) => <label>{props.message}</label>
    
    return (
        <div className="container">
            <h2>Golden Acorn application with states</h2>
            <Button text= "Buy one" onClickFunction={IncrementByOnclick}/>
            <Display message={counter}/> 
            <Button text= "Eat one" onClickFunction={DecrementByOnclick}/>
        </div>  
    )
}


export default States
