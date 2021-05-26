const movieListInitialState = []

const movieReducer = (state = movieListInitialState,action) => {
    switch(action.type){
        case 'ADD_MOVIE' : {
            return [{...action.payload}, ...state ]
        }
        
        case 'REMOVE_MOVIE' : {
            return state.filter((ele) => {
                return ele.id !== action.payload
            })
        }
        
        default : {
            return [...state]
        }
    }
}

export default movieReducer