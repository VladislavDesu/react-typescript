import React, {FC, useState} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const [status, setStatus] = useState<boolean>(todo.completed);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.checked;
        setStatus(target);
    };

    return (
        <div>
            <input type="checkbox" onChange={changeHandler} checked={status}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;