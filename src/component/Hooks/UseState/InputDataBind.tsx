import React,{ChangeEvent, useState} from 'react';

const InputDataBind = () => {
    const [inputData, setInputData] = useState<string| null>("");

    let onChangeName=(event: ChangeEvent<HTMLInputElement>)=>{
        setInputData(event.target.value)
    }
    return (  
        <div>
            <input placeholder="Please enter your name" onChange={onChangeName}></input>
            {inputData}
        </div>
    );
}
 
export default InputDataBind;