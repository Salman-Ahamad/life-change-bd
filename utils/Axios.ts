import axios from "axios";

export const Axios = axios.create({
  // https://life-change-bd.vercel.app/
  // http://localhost:3000/
  baseURL: "https://life-change-bd.vercel.app/api",
});
