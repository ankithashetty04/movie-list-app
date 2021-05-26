export const addMovies = (userInput) => {
    return{
        type : 'ADD_MOVIE',
        payload: userInput
    }
}

export const removeMovie = (id) => {
    return{
        type: 'REMOVE_MOVIE',
        payload: id
    }
}
