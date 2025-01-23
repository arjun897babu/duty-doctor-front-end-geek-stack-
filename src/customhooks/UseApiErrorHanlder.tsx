import { handleAxiosError, isApiError } from "../utils/helper";
import { ApiError } from "../constants/types";

const UseApiErrorHandler = (setError?: (key: string, message: string) => void) => {

    function changeError(er: ApiError) {
        if (isApiError(er) && setError) {
            for (let key in er.error) {
                let err = er.error[key];
                setError(key, err)
            }
        }
    }

    function handleApiError(error: unknown) {
        const er = handleAxiosError(error);
        changeError(er);
    }

    return handleApiError;
};

export default UseApiErrorHandler;