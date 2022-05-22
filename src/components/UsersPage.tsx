import React, {FC, useEffect, useState} from 'react';
import List from "./List";
import {ITodo, IUser} from "../types/types";
import UserItem from "./UserItem";
import axios from "axios";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers()
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data)
        } catch (e) {
            console.log(e);
        }
    };
    
    return (
        <div>
            <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}/>
        </div>
    );
};

export default UsersPage;