import axios from "axios";

export const Axios = axios.create({
  // https://life-change-bd.vercel.app/
  // http://localhost:3000/
  // ${process.env.BASE_URL}/
  baseURL: `${process.env.BASE_URL}/api`,
});
