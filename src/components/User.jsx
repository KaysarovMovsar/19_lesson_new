import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectId} from "../redux/action";

export const User = ({user}) => {
    const dispatch = useDispatch()
    const selectUserId = () => {
        dispatch(selectId(user.id))
    }
    const selectUser = useSelector(state => state.users.UserId)
    const isSelected = selectUser === user.id



    return (
        <li onClick={selectUserId} className={ isSelected ? "selected" : ""}>
            <div>{user.email}</div>
        </li>
    );
};