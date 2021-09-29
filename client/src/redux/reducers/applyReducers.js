import * as actionTypes from '../constants/applyConstants';


const APPLY_INITIAL_STATE = {
    applyItems:[],
};

export const applyReducer = (state = APPLY_INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_APPLY:
            const item = action.payload;

            // const existItem = state.applyItems.find((x) => x.items === item.items);

                return {
                    ...state,
                    applyItems:[...state.applyItems,item],
                };
            
        default:
                return state;

    }
}