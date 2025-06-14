// hooks/useAuth.ts
import { useMutation } from "@tanstack/react-query";
import baseApi from "./baseApi";

type TAuthPayload = {
  name?: string;
  email: string;
  password: string;
};

export const useSignup = () => {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: async (payload: TAuthPayload) => {
      const res = await baseApi.post("/auth/signup", payload);
      return res.data;
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (payload: TAuthPayload) => {
      const res = await baseApi.post("/auth/login", payload);
      return res.data;
    },
  });
};
