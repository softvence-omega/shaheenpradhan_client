import axios from "axios";
const url = import.meta.env.VITE_API_URL as string;
// const token = useUser((state) => state.token);
const baseApi = axios.create({
  baseURL: url,
  headers: {
    // "Content-Type": `Authorization Bearer${token}`,
  },
});

export default baseApi;