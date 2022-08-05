import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {NotFound} from "./pages/NotFound/NotFound";
import {SignUp} from "./pages/SignUp/SignUp";
import {ResetPassword} from "./pages/ResetPassword/ResetPassword";
import {Profile} from "./pages/Profile/Profile";
import {SetPassword} from "./pages/SetPassword/SetPassword";
import {TestPage} from "./pages/TestPage/TestPage";

export enum PATHS {
    LOGIN = '/login',
    NOT_FOUND = '/404',
    SIGN_UP = '/sign-up',
    RESET_PASSWORD = '/reset-password',
    PROFILE = '/profile',
    SET_PASSWORD = '/set-password',
    TEST = '/test',
}

export const LocalRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATHS.LOGIN}/>}/>
                <Route path={PATHS.LOGIN} element={<Login/>}/>
                <Route path={PATHS.NOT_FOUND} element={<NotFound/>}/>
                <Route path={PATHS.SIGN_UP} element={<SignUp/>}/>
                <Route path={PATHS.RESET_PASSWORD} element={<ResetPassword/>}/>
                <Route path={PATHS.PROFILE} element={<Profile/>}/>
                <Route path={PATHS.SET_PASSWORD} element={<SetPassword/>}/>
                <Route path={PATHS.TEST} element={<TestPage/>}/>
            </Routes>
        </div>
    )
}