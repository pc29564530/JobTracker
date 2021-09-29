import * as actionTypes from '../constants/itemConstants';


export const getItemReducer = (state = {loading:true,items:{}},action)=>{
    
    switch(action.type){
        case actionTypes.GET_ITEMS_REQUEST:
            return {
                loading:true,
            };
        case actionTypes.GET_ITEMS_SUCCESS:
            return {
                
                items:action.payload,
                loading:false,
            };
        case actionTypes.GET_ITEMS_FAIL:
            return {
                
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}
// change the item:[] to item :{}
export const getItemDetailsReducer = (state = {loading:true,item:{}},action)=>{
   
    switch (action.type){
        case actionTypes.GET_ITEM_DETAILS_REQUEST:
            return {
                loading:true,
            
            };
        case actionTypes.GET_ITEM_DETAILS_SUCCESS:
            return {
                loading:false,
                item:action.payload,
            };
        case actionTypes.GET_ITEM_DETAILS_FAIL:
            return {
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
};