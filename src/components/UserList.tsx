import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";
import List from "./List";

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}/>
        </div>
    );
};

export default UserList;