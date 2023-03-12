import React, { useState,createContext } from 'react';
import User from './UserPage';
import Login from './LoginPage';


export const LoginContext = createContext<any>(null);

 const ContextHandler = ()=>{

    const  [username, setUsername] = useState<string>("");
    return(
    <LoginContext.Provider value={{username, setUsername}}>
        <Login />
        <User />
        {/* <Login setUsername={setUsername}/>
        <User username={username}/> */}
    </LoginContext.Provider>)
 }

 export default ContextHandler;