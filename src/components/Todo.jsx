import React from 'react';

export const Todo = ({todo}) => {
    return (
            <li>
                <div>{todo.title}</div>
            </li>
    );
};

