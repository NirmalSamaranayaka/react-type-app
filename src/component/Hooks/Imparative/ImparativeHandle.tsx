import React,{useRef} from 'react';
import ChildButton from './Button';

const ImparativeHandler =() => {

     const buttnRef = useRef<any>(null)
    return(<div>
        <button onClick={()=>{buttnRef.current.toggleChanges()}}>Parent Button</button>
        <ChildButton ref={buttnRef}></ChildButton>
    </div>)
}

export default ImparativeHandler;
