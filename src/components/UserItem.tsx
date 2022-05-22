import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser,
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div>
            <div style={{padding: 15, marginBottom: 15, border: "2px solid teal"}}>
                {user.id}. {user.name}
                <div>{user.address.city}, {user.address.street}, {user.address.zipcode}</div>
            </div>
        </div>
    );
};

export default UserItem;