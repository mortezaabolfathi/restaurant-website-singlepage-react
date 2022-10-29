const initialState = {
    popular : [],
    newGames: [],
    upcoming: []
}


const gamesReducer = (state=initialState, action) => {
    switch (action.type){
        case "FETCH_GAME":
            return {...state}
        default:
            return {...state}
    }
}

export default gamesReducer;