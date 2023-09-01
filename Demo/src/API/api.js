import axios from "axios"
const baseUrl = "http://localhost:5000/api/";

// signUp api
export const SignupApi = async (data) => {
    return await axios.post(`${baseUrl}auth/signup`,data);
}

// signIn api
export const SignInApi = async (data) => {
    return await axios.post(`${baseUrl}auth/login`,data)
}

// get all user
export const getUserApi = async () => {
    return await axios.get(`${baseUrl}user/get-users`);
}

// get fineOne user
export const findOneApi = async (id) => {
    return await axios.get(`${baseUrl}user/findone-user/${id}`);
}

// update user
export const updateUserApi = async (id,data) => {
    return await axios.put(`${baseUrl}user/update-user/${id}`,data);
}

// delete user
export const deleteUserApi = async (id) => {
    return await axios.delete(`${baseUrl}user/delete-user/${id}`);
}