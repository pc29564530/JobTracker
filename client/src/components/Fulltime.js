
// import "./style/Main.css";

import axios from 'axios';
import React, { useEffect } from 'react'
import './style/Main.css';
import {connect} from 'react-redux';
import {useDispatch,useSelector} from 'react-redux';
//actions
import {getItems as listItems} from '../redux/actions/itemsActions';
import { addToApply } from '../redux/actions/applyActions';
import Item from './Item';
// import { connect } from 'mongoose';


function Fulltime({history}) {
    
    const dispatch = useDispatch();

    const getItems = useSelector((state)=> state.getItems);
    const {items,loading,error}=getItems;
    // const addToApplyHandler=()=>{
    //     dispatch(addToApply(item._id));
    //     history.push(`/apply`)
    // }

    useEffect(()=>{
        dispatch(listItems());
     
    },[dispatch]);
  


    return (
     
        <div className="fulltime">
            
            {loading ? (<h2>Loading...</h2>):(error ? (<h2>{error}</h2>):(items.filter(name=>name.jobType==='fulltime').map((item)=>(
                 <div className="card"key = {item._id}>
                 <img src={item.img} alt=""/>
                 <div className="">{item.role}</div>
                 <div className="">{item.company}</div>
                 <p>{item.jobType}</p>
                 <p>{item.deadline}</p>
                 <div className="btn"><a href={item.source}><button>Register</button></a></div>
                 {/* <div className="btn"><button type="button" onClick={addToApplyHandler}>Save</button></div> */}
             </div>
         
            )))

            )}
        
        </div>
      
    )
}


export default Fulltime;


// function Fulltime() {

//     const[items,setItems]=useState([]);

//     useEffect(function(){
//         async function getItems(){
//             const res = await axios.get('/api/item');
//             setItems(res.data);
//         }
//         getItems();
//     },[]);

//     return (
        
//         <div className="fulltime">
          
//             {items.filter(name=>name.jobType==='fulltime').map(item=>{
//                 return(
                    
//                     <div className="card col-md-3"  key={item._id}>
//                     <img src={item.img}/>
//                     <h1>{item.role}</h1>
//                    <div className="company_name">
//                        <p>{item.company}</p>
//                    </div>
//                    <div className="company_jobtype">
//                        <p>{item.jobType}</p>
//                    </div>
//                    <p>Deadline: {item.deadline}</p>
//                    <div className="btn"><a href={item.source}><button>Register</button></a></div>
                  
                 
//                </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Fulltime;
