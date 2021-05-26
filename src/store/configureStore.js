import movieReducer from '../reducers/movieReducer'
import {createStore, combineReducers} from 'redux'

const configureStore = () => {

    const store = createStore(combineReducers({
        movies: movieReducer        
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}

export default configureStore