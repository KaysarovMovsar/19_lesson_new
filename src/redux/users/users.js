const initialState = {
    UserId: null,
    users: [],
    usersLoading: false

}


export const users = (state = initialState, action) => {
    switch (action.type) {
        case "load/users/start":
            return {
                ...state,
                usersLoading: true
            }
        case "load/users/fulfilled":
            return {
                ...state,
                users: action.payload,
                usersLoading: false
            }
        case "select/user":
            return {
                ...state,
                UserId: action.payload
            }
        default:
            return state

    }
}