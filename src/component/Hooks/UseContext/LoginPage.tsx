import React,{useContext} from 'react';
import { LoginContext } from './ContextHandler';

// const Login =(props:{setUsername: any})=>{

//     const {setUsername} = props;
//     return(
//         <div>
//         <input onChange={(event)=>{
//             setUsername(event.target.value);
//         }} placeholder="Please enter username here.." />
//         </div>
//         );
// }


const Login =()=>{

    const {setUsername} = useContext(LoginContext);
    return(
        <div>
        <input onChange={(event)=>{
            setUsername(event.target.value);
        }} placeholder="Please enter username here.." />
        </div>
        );
}


export default Login;