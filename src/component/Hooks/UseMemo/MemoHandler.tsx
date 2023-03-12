import axios from 'axios';
import { appendFile } from 'fs';
import React,{useEffect,useState, useMemo} from 'react';



const MemoHandler =() =>{

const[apiData, setapiData] = useState(null);
const[toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setapiData(response.data);
            console.log(response.data);
        });
    },[]);

    //This function everytime call when any state change, this is perfomance issue
    const findLongName = (comments: any): string| null=>{
        if(!comments) return null;
         let longestName="";
         for(let i=0; i< comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
         }
         console.log("This was Computed")
          return longestName;
        };
        
        const getLongestName = useMemo(()=> findLongName(apiData), [apiData]);

        return(
            <div>
             
                {getLongestName}
                <br></br>
                <button onClick={()=>{
                    setToggle(!toggle);
                }}>
                    This is toggleButton
                </button>
               
                {toggle && <span>This is toggle</span> }
            </div>
        )
}



export default MemoHandler;