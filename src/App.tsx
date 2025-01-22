import { Routes as DutyDoctorRoutes, Route } from "react-router-dom"
import { dutyDoctorPath } from "./constants/endponts"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Homet"
import OTPVerify from "./pages/OTPVerify"
import Register2 from "./pages/Regsiter2"

function App() {
  return (
    <>
      <DutyDoctorRoutes>

        <Route path={dutyDoctorPath.login} element={<Login />} />
        <Route path={dutyDoctorPath.register} element={<Register />} />
        <Route path={dutyDoctorPath.register2} element={<Register2 />} />
        <Route path={dutyDoctorPath.home} element={<Home />} />
        <Route path={dutyDoctorPath.verify} element={<OTPVerify />} />

      </DutyDoctorRoutes>


    </>
  )
}

export default App
