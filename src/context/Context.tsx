import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { envVariables } from "../constants/env-variables";

export const DoctorInitObj = {
    isAuthed: false,
    token: '',
};

export interface DoctorContextType {
    doctorState: typeof DoctorInitObj;
    setDoctorState: React.Dispatch<React.SetStateAction<typeof DoctorInitObj>>;
}
export const DoctorContext = createContext<DoctorContextType | undefined>(undefined);

export const DoctorProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [doctorState, setDoctorState] = useState(() => {
        const storedDoctor = localStorage.getItem(envVariables.app);
        if (storedDoctor) {
            try {
                return JSON.parse(storedDoctor);
            } catch (error) {
                return DoctorInitObj;
            }
        }
        return DoctorInitObj;
    });

    useEffect(() => {
        localStorage.setItem(envVariables.app, JSON.stringify(doctorState))
    }, [doctorState]);


    return (
        <DoctorContext.Provider value={{ setDoctorState, doctorState }}>
            {children}
        </DoctorContext.Provider>
    )
}
