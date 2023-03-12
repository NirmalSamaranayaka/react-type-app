import React,{useContext} from 'react';
import { LoginContext } from './ContextHandler';


// const User= (props:{username: any})=>{

//     const {username} = props;
// return(<div>
//     <h1>User : {username}</h1>
// </div>)
// }


const User= ()=>{

    const {username} = useContext(LoginContext);
return(<div>
    <h1>User : {username}</h1>
</div>)
}


export default User;