// import {useEffect} from 'react';
// import { useSelector,useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

// import Applied from './Applied';

// import {addToCart} from '../redux/actions/applyActions';

// const ApplyScreen = () =>{
//     const dispatch = useDispatch();
//     const apply = useSelector((state)=>state.apply);
//     const {applied} = apply;

//     useEffect(()=> {},[]);

//     // const quantityChange = (id,quantity) =>{
//     //     dispatch(addToCart(id,quantity));
//     // };
//     const getApplyCount = () =>{
//         return applied.reduce((quantity,item)=> Number(item.quantity)+quantity,0);
//     }
//     return (
//         <>
//             <div className="applyScreen">
//                 {applied.length==0?(
//                     <div>
//                         Your Applied Job is Empty
//                     </div>
//                 ):(
//                     applied.map((name)=>(
//                         <Applied
//                             key={name.item}
//                             i
//                         />
//                     ))
//                 )}
//             </div>
//         </>
//     )
// }