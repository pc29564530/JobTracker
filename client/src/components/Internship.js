import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getItems as listItems} from '../redux/actions/itemsActions';


function Internship (){
    const dispatch = useDispatch();
    const getItems = useSelector((state)=>state.getItems);
    const {items,loading,error}=getItems;
    useEffect(()=>{
        dispatch(listItems());
    },[dispatch]);

    return (
        <div className="intern">
            
            {loading ? (<h2>Loading...</h2>):(error ? (<h2>{error}</h2>):(items.filter(name=>name.jobType==='Internship').map((item)=>(
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
    );
}


// function Internship() {

//     const[items,setItems]=useState([]);

//     useEffect(function(){
//         async function getItems(){
//             const res = await axios.get('/api/item');
//             setItems(res.data);
//         }
//         getItems();
//     },[]);

//     return (
        
//         <div className="intern">
          
//             {items.filter(name=>name.jobType==='internship').map(item=>{
//                 return(
                    
//                     <div className="card"  key={item._id}>
                      
                        
//                           <div className="container">
//                                 <div className="company_name">
//                            <h1>{item.company}</h1>
//                        </div>
//                        <div className="company_jobtype">
//                            <p>{item.jobType}</p>
//                        </div>
                   
//                        <div className="btn"><a href={item.source}><button>Register</button></a></div>
//                           </div>  
                    
//                 </div> 
//                 )
//             })}
//         </div>
//     )
// }

export default Internship;
