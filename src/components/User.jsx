import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectId} from "../redux/action";
import {Link} from "react-router-dom";

export const User = ({user}) => {
    const selectUser = useSelector(state => state.users.UserId)
    const isSelected = selectUser === user.id

    return (
        <li className={ isSelected ? "selected" : ""}>
            <Link to={`/${user.id}`}>
                <div>{user.email}</div>
            </Link>
        </li>
    );
};