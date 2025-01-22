import { useEffect, useState } from "react"
import BackGroundImage from "../components/BackGroundImage"
import { SubmitButton } from "../components/Button"
import Input from "../components/Input"
import List from "../components/List"
import { useLocation, useNavigate } from "react-router-dom"
import { UseZodForm } from "../customhooks/UseZodForm"
import { apiEndPoint, dutyDoctorPath } from "../constants/endponts"
import { registerSchema2 } from "../utils/zod-schema"
import { z } from "zod"
import { serverInstance } from "../service/api"

const initialValue: z.infer<typeof registerSchema2> = { completion: '', country: '', instituteName: '', degree: '', email: '', firstName: '', lastName: '' }
const Register2 = () => {
    const [loading, setLoading] = useState(false);
    const locationState = useLocation();
    const navigate = useNavigate();
    const { register, watch, setValue, handleSubmit, formState: { errors } } = UseZodForm(registerSchema2, initialValue)

    useEffect(() => {
        const data = locationState?.state?.data || null
        if (!data) {
            navigate(dutyDoctorPath.register, { replace: true, state: { message: 'something went wrong.please try again' } });
            return
        }
        for (let key in data) {
            setValue(key as keyof z.infer<typeof registerSchema2>, data[key])
        }
        return () => {
            if (data) {
                locationState.state = null
            }
        }
    }, [])
 
    async function registerAccount(data: z.infer<typeof registerSchema2>) {
        try {
            setLoading(true)
            const response = (await serverInstance.post(apiEndPoint.register, data)).data
            navigate(dutyDoctorPath.home, { replace: true })
        } catch (error) {

        } finally {
            setLoading(false)

        }
    }
    return (
        <>
            <BackGroundImage>
                <div className="h-full flex flex-col justify-center">
                    <div className="max-h-[500px] overflow-y-auto">
                        <p className="text-left font-bold sm:text-2xl sm:w-[300px] mb-2">
                            Enter your Educational Details
                        </p>
                        <form action="" className="flex flex-col gap-8 my-12 " onSubmit={handleSubmit(registerAccount)}>
                            <List field="degree" placeHolder="degree" {...register('degree')} error={errors.degree?.message} />
                            <List field="completion" placeHolder="completion" {...register('completion')} error={errors.completion?.message} />
                            {
                                (watch('completion') === 'No') &&
                                < List field="year" placeHolder="year" {...register('year')} error={errors.year?.message} />
                            }
                            <List field="country" placeHolder="country" {...register('country')} error={errors.country?.message} />
                            <Input field="instituteName" placeHolder="Institute name" type="text"  {...register('instituteName')} error={errors.instituteName?.message} />
                            {/* conditional fields */}

                            {(watch('degree') === 'Super Speciality' || watch('degree') === 'PG')  &&

                                <List field="speciality" placeHolder="speciality" {...register('speciality')} error={errors.speciality?.message} />
                            }

                            {
                                watch('degree') === 'Fellowship' &&
                                <List field="fellowShip" placeHolder="fellowShip" {...register('fellowShip')} error={errors.fellowShip?.message} />
                            }

                            {
                                watch('degree') && watch('completion') &&
                                !(watch('degree') === 'MBBS' && watch('completion') === 'No') &&
                                <Input field="medicalRegistrationNumber" placeHolder="medical registration number" type="text" {...register('MedicalRegistrationNumber')} error={errors.MedicalRegistrationNumber?.message} />
                            }

                            {/* conditional fields */}
                            <SubmitButton text="continue" loading={loading} />
                        </form>

                    </div>
                </div>
            </BackGroundImage>
        </>
    )
}

export default Register2