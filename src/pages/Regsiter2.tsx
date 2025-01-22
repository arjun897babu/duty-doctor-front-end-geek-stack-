import BackGroundImage from "../components/BackGroundImage"
import { SubmitButton } from "../components/Button"
import Input from "../components/Input"
import List from "../components/List"

const Register2 = () => {
    return (
        <>
            <BackGroundImage>
                <div className="max-h-[500px] overflow-y-auto">
                    <p className="text-left font-bold sm:text-2xl sm:w-[300px] mb-2">
                        Enter your Educational Details
                    </p>
                    <form action="" className="flex flex-col gap-8 my-12 ">
                        <List field="degree" placeHolder="degree" />
                        <List field="completion" placeHolder="completion" />
                        <List field="country" placeHolder="country" />
                        <List field="instituteName" placeHolder="Institute name" />
                        <List field="year" placeHolder="year" />
                        <List field="year" placeHolder="year" />
                        <List field="speciality" placeHolder="speciality" />
                        <List field="fellowShip" placeHolder="fellowShip" />
                        <Input field="medicalRegistrationNumber" placeHolder="medical registration number" type="text" />
                        <SubmitButton text="continue" />
                    </form>

                </div>
            </BackGroundImage>
        </>
    )
}

export default Register2