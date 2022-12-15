import axios from "axios";
export const getData = axios.create({
    baseURL:"https://challenge-2-alpha.vercel.app/api"
})