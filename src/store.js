
import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import productReducer from './productSlice'
import { save, load } from "redux-localstorage-simple"

const reducer = combineReducers({
    counter: counterReducer,
    product: productReducer
})

const createStoreWithMiddleware = applyMiddleware(
        save({ productReducer})
    )(configureStore)

const store = createStoreWithMiddleware(
    { reducer }, load())

export default store