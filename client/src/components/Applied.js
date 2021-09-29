
import React, {useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import AppliedItem from './AppliedItem';

function Applied() {

    const dispatch = useDispatch();

    const apply = useSelector((state)=>state.apply);
    const {applyItems} = apply;

    useEffect(()=>{},[]);

    return (
        <div className="applied">
            <h1>Job List</h1>
            {applyItems.length === 0 ? (
                <div>Your Applied Items is Empty <Link to="/">Go Back</Link></div>
            ):(applyItems.map((item)=>(
                <AppliedItem key={item._id}
                company={item.company}
                img={item.img}
                jobType={item.jobType}
                role={item.role}
                source={item.source}
                deadline={item.deadline}
                itemId={item._id}
            />
            ))
            )}
        </div>

    )
}

export default Applied;
