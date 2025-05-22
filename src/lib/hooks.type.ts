export type IUserFetchResource = {
  queryKey: string;
  resource: string;
};
export type IUserFetchById = {
  queryKey: string;
  resource: string;
  id: string | number;
};

export type TCreateResource = {
  mutationKey?: string;
  resource: string;
  payload: unknown;
};
export type TDeleteResource = {
  mutationKey?: string;
  resource: string;
  id: string | number;
};
export type TUpdateResource = {
  mutationKey?: string;
  resource: string;
  id: string | number;
  payload: unknown;
};
