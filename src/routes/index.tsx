import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { RegisterUser } from "../pages/RegisterUser"
import { UserInfo } from "../components/registerSteps/UserInfo"
import { AddressInfo } from "../components/registerSteps/AddressInfo"
import { MoreAbout } from "../components/registerSteps/MoreAbout"
import { CreatedUserPage } from "../pages/CreatedUserPage"

import { AnimatePresence } from "framer-motion"

function RoutesMain(){
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="*" element={<Navigate to="/register/identify"/>}/>
                <Route path="/register" element={<RegisterUser/>}>
                    <Route path="identify" element={<UserInfo/>}/>
                    <Route path="address" element={<AddressInfo/>}/>
                    <Route path="about" element={<MoreAbout/>}/>
                </Route>
                <Route path="created" element={<CreatedUserPage/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default RoutesMain