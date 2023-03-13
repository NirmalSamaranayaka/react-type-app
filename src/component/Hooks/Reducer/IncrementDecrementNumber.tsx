import React, { useReducer } from "react";
import { ActionKind } from "../../../Emum";
import { ActionType } from "../../../Interfaces";


const reducer = (state:any, action:ActionType) =>{
    switch(action.type){
        case ActionKind.INCREASE:
            return { count: state.count + 1,  showText: state.showText };
        case ActionKind.DECREASE:
            return { count: state.count - 1, showText: state.showText   };
        case ActionKind.TOGGLE:
            console.log("hello"+ state.showText)
            return { count: state.count, showText: !state.showText };
      
        default:
            return state;
    }
}


const IncrementDecrementNumber = () =>
{

    const[state, dispatch]= useReducer(reducer, {count: 0, showText:true})
    return(
    <div>
        <h1>{state.count}</h1>
        <button onClick={ ()=>{
            dispatch({type: ActionKind.INCREASE});
            dispatch({type:  ActionKind.TOGGLE});
         
        }}>  Increment</button>
        <button onClick={ ()=>{
            dispatch({type: ActionKind.DECREASE});
            dispatch({type:  ActionKind.TOGGLE});
        }}>  Decrement</button>
        {state.showText && <p> This is a text</p>}
    </div>)
}

export default IncrementDecrementNumber;
