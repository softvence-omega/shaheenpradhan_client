import { TUpdateResource } from "@/lib/hooks.type";
import { useMutation } from "@tanstack/react-query";
import baseApi from "./baseApi";

const useUpdateResource = () => {
  return useMutation({
    mutationKey: ["update-key"],
    mutationFn: async ({
      resource,
      id,
      payload,
      mutationKey,
    }: TUpdateResource) => {
      const res = await baseApi.patch(`${resource}/${id}`, payload);
    },
  });
};

export default useUpdateResource;


