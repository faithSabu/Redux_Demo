import { BUY_PASTRY } from "./pastryTypes"

const initialState = {
    numOfPastry: 30
}

const pastryReducer = (state = initialState,action) =>{
    switch(action.type){
        case BUY_PASTRY:
            return {
                ...state,
                numOfPastry: state.numOfPastry -1
            }
            default : return state
    }
}

export default pastryReducer
