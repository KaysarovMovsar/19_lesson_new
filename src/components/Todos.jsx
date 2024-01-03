import {useDispatch, useSelector} from "react-redux";
import {Todo} from "./Todo";
import {filterInputText} from "../redux/action";

export const Todos = (props) => {
    const todos = useSelector((state) => state.todos.todos)
    const selectUserId = useSelector((state) => state.users.UserId)
    const filter = useSelector((state) => state.todos.filter)

    const dispatch = useDispatch()

    const filteredUser = todos.filter((todo) => todo.userId === selectUserId).
    filter(todo => todo.title.indexOf(filter) > -1)

    const changeFilteredText = (event) => {
        dispatch(filterInputText(event.target.value))
    }

    if(selectUserId === null) {
        return <div className="flex-child">
            <span>←</span> Выберите пользователя
        </div>
    }

    return (
        <div className="flex-child todosContainer">
            <div className="filter">
                <input
                type="text"
                placeholder="Поиск по тексту"
                value={filter}
                onChange={changeFilteredText}
                />

            </div>
            <ul>
                {
                    filteredUser.map(todo => {
                        return (
                            <Todo todo={todo} key={todo.id}/>)
                    })
                }
            </ul>
        </div>
    );
}

