import * as  actionTypes from '../constants/itemConstants';
import axios from 'axios';


export const getItems = () => async (dispatch) =>{
    try{
        dispatch({type:actionTypes.GET_ITEMS_REQUEST});

        const {data} = await axios.get('/routes/items');
        // console.log(data);
        dispatch({
            type:actionTypes.GET_ITEMS_SUCCESS,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type:actionTypes.GET_ITEMS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    :error.message,
        });
    }
}

export const getItemDetails = (itemId) => async (dispatch) =>{
    // console.log("jhsdlfhls")
    
    try{
       
        dispatch({type:actionTypes.GET_ITEM_DETAILS_REQUEST,payload:itemId});
        axios.defaults.baseURL="http://localhost:5000/"
        // const {data} = await axios.get('/routes/items',{params:{id:itemId}});
        // console.log(data);
        // console.log("hello")
        const {data} = await axios.get('routes/items/'+itemId);
        // const {data} = await axios.get(`/routes/items/${id}`);
        dispatch({
            type:actionTypes.GET_ITEM_DETAILS_SUCCESS,
            payload:data,
        });
    } catch(error) {
        dispatch({
            type:actionTypes.GET_ITEM_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
                ?error.response.data.message

                :error.message,
        });
    }
}