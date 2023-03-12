import React,{useEffect, useLayoutEffect, useRef} from 'react';
import InputDataBind from '../UseState/InputDataBind';


const LayoutEffectTutorial = () => {

    const inputref = useRef<any>(null)
    

    ///Everytime call first this and after that call useEffect
    useLayoutEffect(()=>{
       // console.log("Use Layout Effect");
        console.log(inputref.current.value);
    }, []);

    useEffect(():void =>{
      //  console.log("Use Effect");
        inputref.current.value ="Nadeesha";
    }, []);

    return(<div>
        <input value="Nirmal" ref={inputref} style={{width:400, height:50}}></input>
    </div>)
}
 
export default LayoutEffectTutorial;