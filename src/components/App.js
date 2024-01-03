import React, {useEffect} from 'react';
import { Todos } from "./Todos";
import { Users } from "./Users";
import { useDispatch } from "react-redux";
import {loadTodos, loadUsers} from "../redux/action";

const App = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadTodos())
        dispatch(loadUsers())
    }, [])

    return (
        <div className="container">
            <Users/>
            <Todos/>
        </div>
    );
};

export default App;