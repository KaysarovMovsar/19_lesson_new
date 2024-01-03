export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: "load/todos/start"})
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response)=> response.json())
            .then(data => {
                dispatch({
                    type: "load/todos/fulfilled",
                    payload: data
                })
            })

    }
}

export const loadUsers = () => {
    return (dispatch) => {
        dispatch({type: "load/users/start"})
        fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
            .then((response)=> response.json())
            .then(data => {
                dispatch({
                    type: "load/users/fulfilled",
                    payload: data
                })
            })

    }
}

export const selectId = (userId) => {
    return {
        type: "select/user", payload: userId
    }
}

export const filterInputText = (value) => {
    return {
        type: "filter/todo", payload: value
    }
}