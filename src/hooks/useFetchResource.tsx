import { IUserFetchResource } from "@/lib/hooks.type";
import { useQuery } from "@tanstack/react-query";
import baseApi from "./baseApi";


const useFetchResource = ({ queryKey, resource }: IUserFetchResource) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await baseApi.get(resource);
      return res?.data;
    },
    staleTime: 1000 * 60 * 1,
  });
};

export default useFetchResource;