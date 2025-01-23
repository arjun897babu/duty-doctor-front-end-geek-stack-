import { DoctorDegree, ResponseStatus } from "./enum";

//entity

interface IEduCommon {
    degree: DoctorDegree,
    country: string;
    instituteName: string;
    completion: string,
}

interface IEduSpecific {
    speciality: string;
    fellowShip: string; //for degree = fellow ship
    MedicalRegistrationNumber: string,//for completed degree
    year: string;// for uncompleted degree
}

export interface IEducation extends IEduCommon, Partial<IEduSpecific> {
    _id: string
}

export interface IDoctor {
    firstName: string,
    lastName: string,
    email: string,
    education: IEducation
    uId: string
    profilePic: string | null;
    _id: string
}
export type ErrorObject = { [field: string]: string };

export interface IResponse {
    status: ResponseStatus,
    message: string
}

export interface ApiError extends IResponse {
    error: ErrorObject;
}

export interface IDoctorAuthResponse extends IResponse {
    data: {
        token: string
    }
}
export interface IGetProfileResponse extends IResponse {
    data: {
        doctor: IDoctor
    }
}


export interface ICreateOTPResponse extends IResponse {
    data: {
        otp: number
    }
}
