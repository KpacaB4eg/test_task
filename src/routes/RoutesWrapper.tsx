import React from "react";
import {Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import RegistrationConfirm from "../pages/RegistrationConfirm";

const RoutesWrapper: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/registration/confirm" element={<RegistrationConfirm/>}/>
            <Route path="/profile/create" element={<RegistrationPage/>}/>
        </Routes>
    )
}

export default RoutesWrapper
