import React from 'react'

function AppliedItem({item}) {
    return (
        <div className="appliedItem">
            <div className="card">
                <img src={item.img} alt=""/>
                <div className="">{item.role}</div>
                <div className="">{item.company}</div>
                <p>{item.jobType}</p>
                <p>{item.deadline}</p>
                <div className="btn"><a href={item.source}><button>Register</button></a></div>
               
            </div>
        </div>
    )
}

export default AppliedItem;
