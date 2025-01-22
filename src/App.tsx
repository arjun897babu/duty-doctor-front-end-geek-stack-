import { Routes as DutyDoctorRoutes, Route } from "react-router-dom"
import { dutyDoctorPath } from "./constants/endponts"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/homet"
import OTPVerify from "./pages/OTPVerify"

function App() {
  return (
    <>
      <DutyDoctorRoutes>

        <Route path={dutyDoctorPath.login} element={<Login />} />
        <Route path={dutyDoctorPath.register} element={<Register />} />
        <Route path={dutyDoctorPath.home} element={<Home />} />
        <Route path={dutyDoctorPath.verify} element={<OTPVerify />} />

      </DutyDoctorRoutes>


    </>
  )
}

export default App
