import { BUY_VANILLA } from "./vanillaTypes";

const initialVanillaState = {
    numOfVanilla:15
}

const vanillaReducer = (state= initialVanillaState,action)=>{
    switch(action.type){
        case BUY_VANILLA: return {
            ...state,
            numOfVanilla: state.numOfVanilla -1
        }
        default: return state
    }
}

export default vanillaReducer