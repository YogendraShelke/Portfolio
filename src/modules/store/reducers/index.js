import { combineReducers } from 'redux'
import trending from './TrendingReducer'
import details from './DetailsReducer'

export default combineReducers({
    trending,
    details
})