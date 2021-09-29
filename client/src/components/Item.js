import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

function Item ({img,company,itemId,source,role, deadline,jobType}){

// function Item (props){
    // const {item}=props;
    // console.log(item._id);
    return(
        <div className="item">
            {/* <div className="card" key={item._id}>
                <img src={item.img} alt=""/>
                <h2>{item.role}</h2>
                <h2>{item.company}</h2>
                <p>{item.jobType}</p>
                <p>{item.deadline}</p>
                <Link to={`/items/${item._id}`}><button>View</button></Link>
              
            </div> */}
             <div className="card" key={itemId} >
                 <img src={img} alt=""/>
                 <h2>{role}</h2>
                 <h2>{company}</h2>
                 <p>{jobType}</p>
                 <p>{deadline}</p>
                 <Link to={`/items/${itemId}`}><button>View</button></Link>
            
           </div>
        </div>
    );
}
export default Item;