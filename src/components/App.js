import React, {useEffect} from 'react';
import { Todos } from "./Todos";
import { Users } from "./Users";
import { useDispatch } from "react-redux";
import {loadTodos, loadUsers} from "../redux/action";
import {Route, Routes} from "react-router-dom";

const App = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadTodos())
        dispatch(loadUsers())
    }, [])

    return (
        <div className="container">
            <Users/>
            <Routes>
                <Route path="/:id?" element={<Todos/>}/>
            </Routes>
        </div>
    );
};

export default App;