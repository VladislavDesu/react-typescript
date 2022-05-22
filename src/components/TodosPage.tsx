import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos()
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10");
            setTodos(response.data)
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}/>
        </div>
    );
};

export default TodosPage;