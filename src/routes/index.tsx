import { Routes, Route, Navigate } from "react-router-dom"
import { RegisterUser } from "../pages/RegisterUser"

function RoutesMain(){

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/register"/>}/>
            <Route path="/register" element={<RegisterUser/>}/>
        </Routes>
    )
}

export default RoutesMain