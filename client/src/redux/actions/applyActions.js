import * as actionTypes from "../constants/applyConstants";
import axios from "axios";

export const addToApply = (id) => async (dispatch,getState)=> {
    const {data} = await axios.get(`/api/item/${id}`);

    dispatch({
        type:actionTypes.ADD_TO_APPLY,
        payload:{
            id:data._id,
            img:data.img,
            company:data.company,
            jobType:data.jobType,
            role:data.role,
            deadline:data.deadline,
            source:data.source
            
        }
    })
    localStorage.setItem("apply",JSON.stringify(getState().apply.applyItems));
};

