import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "./types/types";
import EventsExample from "./components/EventsExample";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";

const App: FC = () => {
        return (
            <div>
                <EventsExample/>
                <UsersPage/>
                <TodosPage/>
            </div>
        );
    }
;

export default App;