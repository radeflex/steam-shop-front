// api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:443",
  withCredentials: true
});

export default api;
