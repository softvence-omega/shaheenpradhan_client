import { useMutation } from "@tanstack/react-query";
import baseApi from "./baseApi";
import { TCreateResource } from "@/lib/hooks.type";

const useCreateResource = () => {
  return useMutation({
    mutationFn: async ({ resource, payload }: TCreateResource) => {
      const res = await baseApi.post(resource, payload);
      return res.data;
    },
    mutationKey: ["create-resource"],
  });
};

export default useCreateResource;
