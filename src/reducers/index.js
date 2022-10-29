import { combineReducers } from 'redux'
import gamesReducer from './gamesReducers';


const rootReducer = combineReducers({
    game : gamesReducer
})

export default rootReducer;