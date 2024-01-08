import {useDispatch, useSelector} from "react-redux";
import {Todo} from "./Todo";
import {filterInputText} from "../redux/action";
import {useParams} from "react-router-dom";

export const Todos = (props) => {
    const todos = useSelector((state) => state.todos.todos)
    const filter = useSelector((state) => state.todos.filter)

    const dispatch = useDispatch()
    const id = parseInt(useParams().id)

    const filteredUser = todos.filter((todo) => todo.userId === id).
    filter(todo => todo.title.indexOf(filter) > -1)

    const changeFilteredText = (event) => {
        dispatch(filterInputText(event.target.value))
    }

    if(isNaN(id)) {
        return <div className="flex-child">
            <span>←</span> Выберите пользователя
        </div>
    }

    console.log(isNaN(id))

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

