import axios from 'axios';
import { set } from 'mongoose';
import React,{useEffect, useState} from 'react';

function Button(id,apply) {
    const [state,setState] = useState({
    
    });

    const handleClick=()=> {
        

        
            setState({...state,apply:true})
       
    }

    // useEffect(()=>{
            
    //         // setState(true);
    //         // console.log('hkhdfhek jdfhj')
     
    // },[id])
    // const handleClick = async()=>{
    //     const data = await axios.get('/api/item/${item.apply}');
    //     setState(!data);
    // }
    
  

    return (
        <div className="button">
            
            <button onClick= {handleClick}>APPLIED</button>
            
        </div>
    )
}

export default Button;
