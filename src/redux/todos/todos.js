const initialState = {
    todos: [],
    TodosLoading: false,
    filter: "",
}

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case "load/todos/start":
            return {
                ...state,
                TodosLoading: true
            }
        case "load/todos/fulfilled":
            return {
                ...state,
                todos: action.payload,
                TodosLoading: false
            }
        case "filter/todo":
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state

    }
}