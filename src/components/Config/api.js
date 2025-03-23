import axios from "axios";

// base URL for  API
export const API_URL = "http://localhost:8080";

// Axios instance with the base URL and default headers
export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    }
});
