import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3001/kinalCast/v2",
    timeout: 5000,
    httpsAgent: false,
})

export const register = async (data) => {
    try{
        return await apiClient.post("/auth/register", data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}