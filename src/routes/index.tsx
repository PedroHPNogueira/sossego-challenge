import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { RegisterUser } from "../pages/RegisterUser"
import { UserInfo } from "../components/registerSteps/UserInfo"
import { AddressInfo } from "../components/registerSteps/AddressInfo"
import { MoreAbout } from "../components/registerSteps/MoreAbout"
import { CreatedUserCard } from "../components/CreatedUserCard"

import { AnimatePresence } from "framer-motion";

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
                    <Route path="created" element={<CreatedUserCard/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default RoutesMain