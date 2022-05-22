import React from 'react';
import {Route, Routes} from "react-router-dom";
import UsersPage from "./UsersPage";

const AppRouters = () => {
    return (
        <div>
            <Routes>
                <Route path="/users">
                    <UsersPage/>
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouters;