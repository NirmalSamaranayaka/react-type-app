import axios from 'axios';
import React,{useEffect,useState} from 'react';



const EffectHookDataLoading =() =>{

const[data, setData] = useState("");
const[count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            //console.log(response.data);
            setData(response.data[0].email);
            console.log("API was called");
        });
    },[]);


    return(<div>
Hello Effect  
<h2>{data}</h2>
<h3>{count}</h3>
<button onClick={()=>{
    setCount(count+1);
}}>
    Click
</button>
    </div>)
}

export default EffectHookDataLoading;