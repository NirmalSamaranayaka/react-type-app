import React,{forwardRef, useState,useImperativeHandle} from 'react';

const ChildButton = forwardRef((props, ref) => {

   const [toggle, setToggle] = useState(false);

   useImperativeHandle(ref ,() => ({
       toggleChanges(){
        setToggle(!toggle);
       }
     }));

    return(<div>
          {toggle && <p>Toggle Msg</p>}
        <button>Child Button</button>
      
    </div>)
});

export default ChildButton;