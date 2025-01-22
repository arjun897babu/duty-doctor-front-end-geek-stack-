export const { VITE_API_ENDPOINT, VITE_APP } = import.meta.env

export const envVariables = Object.freeze({
    baseURL: VITE_API_ENDPOINT,
    app: VITE_APP
})