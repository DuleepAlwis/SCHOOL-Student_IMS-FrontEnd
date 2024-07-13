//const apiUrl = process.env.REACT_APP_API_BASE_URL;
const restAPIUrl = import.meta.env.VITE_API_BASE_URL;

export const restEndPoints = {
    "LOGIN":restAPIUrl+"/api/v1/auth/login",
    "CREATE_USER":restAPIUrl+"/api/v1/auth/create",
    "CREATE_ORG":restAPIUrl+"/api/v1/org/create"
}