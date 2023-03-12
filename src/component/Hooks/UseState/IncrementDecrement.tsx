import React, {  FC,useState } from 'react'

const IncrementDecrement = () => {

 const [counter, setCounter] = useState(0);
    const Increment=() =>{
        setCounter(counter+1);
    }
    const Decrement=() =>{
        setCounter(counter-1);
    }
    return (  
        <div>
            <button onClick={Increment}>Increment</button>
            {counter}
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
}
 
export default IncrementDecrement;