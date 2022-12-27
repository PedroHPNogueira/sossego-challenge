import { Routes, Route, Navigate } from "react-router-dom"
import { RegisterUser } from "../pages/RegisterUser"
import { UserInfo } from "../components/registerSteps/UserInfo"
import { AddressInfo } from "../components/registerSteps/AddressInfo"
import { MoreAbout } from "../components/registerSteps/MoreAbout"
import { CreatedUserCard } from "../components/UserCreatedModal"

function RoutesMain(){

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/register/identify"/>}/>
            <Route path="/register" element={<RegisterUser/>}>
                <Route path="identify" element={<UserInfo/>}/>
                <Route path="address" element={<AddressInfo/>}/>
                <Route path="about" element={<MoreAbout/>}/>
                <Route path="created" element={<CreatedUserCard/>}/>
            </Route>
        </Routes>
    )
}

export default RoutesMain