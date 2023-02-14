const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

const buyIcecream = () => {
    return {
        type: BUY_ICECREAM
    }
}

const initialCakeState = {
    numOfCakes: 10
}

const initialIcecramState = {
    numOfIcecram: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const icecreamReducer = (state = initialIcecramState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            numOfIcecram: state.numOfIcecram - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: icecreamReducer
})

const store = createStore(rootReducer,applyMiddleware())

console.log('initial State', store.getState());
store.subscribe(()=>console.log('updated State',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

