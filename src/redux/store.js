import { createStore } from 'redux'
import rootReducer from './rootReducer';

// rootReducer have both cakeReducer and iceCreamReducer, so need of this. 
// import cakeReducer from './cake/cakeReducer'

const store = createStore(rootReducer)

export default store;
