import { AxiosError } from "axios";
import { ResponseStatus } from "../constants/enum";
import { ApiError, ErrorObject } from "../constants/types";

export const generateIsRequired = (field: string): string => `${field} is required`;
export const generateInvalid = (field: string): string => `Invalid ${field}`;

export function createApiError(
    message: string = "unknown error",
    status: ResponseStatus = ResponseStatus.ERROR,
    error: ErrorObject = { common: message }
): ApiError {
    return {
        status,
        message,
        error,
    };
}

export function handleAxiosError(error: unknown): ApiError {
    if (error instanceof AxiosError) {
        const { response = undefined } = error;
        console.log(response?.data)
        return createApiError(
            response?.data.message,
            response?.data.status,
            response?.data.err,
        );
    }
    return createApiError();
}

export function isApiError(error: unknown): error is ApiError {
    return (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        "message" in error &&
        "error" in error &&
        typeof error.error === "object"
    );
}