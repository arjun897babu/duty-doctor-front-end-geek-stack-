import axios from "axios";
import { envVariables } from "../constants/env-variables";

export const serverInstance = axios.create({
    baseURL: envVariables.baseURL,
    timeout: 6 * 1000,
});
