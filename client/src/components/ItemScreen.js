import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getItemDetails} from '../redux/actions/itemsActions';
import { addToApply } from '../redux/actions/applyActions';
import { useParams } from 'react-router-dom';
import './style/ItemScreen.css';

const  ItemScreen=(props)=> {
    // console.log(props)
    // console.log(itemId);
    const dispatch = useDispatch();
    
    const itemId = props.match.params.id;
    // console.log(props);
    // const {itemId}=useParams();
 

   



    const ItemDetails = useSelector((state)=>state.getItemDetails);


    const {loading,error,item} = ItemDetails;

    
  
    useEffect(() => {
        // if (item && match.params.id !== item._id) {
        //   dispatch(getItemDetails(match.params.id));
        // }
        dispatch(getItemDetails(itemId));
      }, [dispatch,itemId]);
    
    // const addToApplyHandler = () =>{
    //     dispatch(addToApply(item._id));
    //     history.push(`/apply`);
    // };
    
    return (
        <div className="itemScreen">
            {/* <h1>Hello</h1> */}
             {loading ?(
                 <h2>Loading...</h2>
             ): error ? (
                 <h2>{error}</h2>
             ):(
                <div className="card" key={itemId} >
                    <h1>Hello</h1>
                <img src={item.img} alt=""/>
                <h2>{item.role}</h2>
                <h2>{item.company}</h2>
                <p>{item.jobType}</p>
                <p>{item.deadline}</p>
                <div className="btn"><a href={item.source}><button>Register</button></a></div>
                {/* <div className="btn"><button type="button" onClick={addToApplyHandler}>Save</button></div>  */}
            </div>
        
             )} 
           
            
     
        </div>

    )
}

export default ItemScreen;