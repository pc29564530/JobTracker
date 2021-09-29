
import React, { useEffect } from 'react'
import './style/Main.css';
import {useDispatch,useSelector} from 'react-redux';
import {getItems as listItems} from '../redux/actions/itemsActions';
import Item from './Item';




function Main() {
    
    const dispatch = useDispatch();

    const getItems = useSelector((state)=> state.getItems);
     const {items,loading,error}=getItems;
    useEffect(()=>{
        dispatch(listItems());
     
    },[dispatch]);
  


    return (
     
        <div className="main">
            
            {loading ? (<h2>Loading...</h2>):(error ? (<h2>{error}</h2>):(items.map((item)=>(
                <Item
                   key={item._id}
                    company={item.company}
                    img={item.img}
                    jobType={item.jobType}
                    role={item.role}
                    source={item.source}
                    deadline={item.deadline}
                    itemId={item._id}
                    // item={item}
                   
                />
         
            )))

            )}
        
        </div>
      
    )
}


export default Main;

