import { IUserFetchById } from "@/lib/hooks.type";
import { useQuery } from "@tanstack/react-query";
import baseApi from "./baseApi";

const useFetchById = ({ resource, id, queryKey }: IUserFetchById) => {
  return useQuery({
    queryKey: [queryKey, id],
    queryFn: async () => {
      const res = await baseApi.get(`${resource}/${id}`);
      return res?.data;
    },
    enabled: Boolean(id),
  });
};

export default useFetchById;
