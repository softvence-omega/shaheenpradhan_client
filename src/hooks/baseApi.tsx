// baseApi.ts
import axios from "axios";

const url = import.meta.env.VITE_API_URL as string;

const baseApi = axios.create({
  baseURL: url,
});

baseApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // or use cookie
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default baseApi;

// import axios from "axios";
// const url = import.meta.env.VITE_API_URL as string;
// // const token = useUser((state) => state.token);
// const baseApi = axios.create({
//   baseURL: url,
//   headers: {
//     // "Content-Type": `Authorization Bearer${token}`,
//   },
// });

// export default baseApi;
