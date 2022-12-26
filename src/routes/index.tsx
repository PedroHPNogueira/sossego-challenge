import { Routes, Route, Navigate } from "react-router-dom"
import { Component } from "../components/registerSteps"
import { RegisterUser } from "../pages/RegisterUser"
import { UserInfo } from "../components/registerSteps/UserInfo"

function RoutesMain(){

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/register/identify"/>}/>
            <Route path="/register" element={<RegisterUser/>}>
                <Route path="identify" element={<UserInfo/>}/>
                <Route path="address" element={<Component/>}/>
                <Route path="identify" element={<Component/>}/>
            </Route>
        </Routes>
    )
}

export default RoutesMain