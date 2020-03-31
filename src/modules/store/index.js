import { createStore, applyMiddleware } from 'redux'
import { default as thunk } from 'redux-thunk'
import reducers from './reducers'

const middleware = [thunk]

const store = createStore(reducers, {}, applyMiddleware(...middleware))

export default store
