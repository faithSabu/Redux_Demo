import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import pastryReducer from './pastry/pastryReducer'
import vanillaReducer from './vanilla/vanillaReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pastry: pastryReducer,
    vanilla: vanillaReducer
})

export default rootReducer
