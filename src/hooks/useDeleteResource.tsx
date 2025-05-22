import { TDeleteResource } from "@/lib/hooks.type";
import { useMutation } from "@tanstack/react-query";
import baseApi from "./baseApi";

const useDeleteResource = () => {
  return useMutation({
    mutationKey: ["delete-resource"],
    mutationFn: async ({ resource, id }: TDeleteResource) => {
      const res = await baseApi.delete(`${resource}/${id}`);
      return res.data;
    },
  });
};

export default useDeleteResource;
