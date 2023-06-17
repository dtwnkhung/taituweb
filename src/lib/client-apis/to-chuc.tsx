import { ToChuc } from "../interfaces/to-chuc";
import instance, { ResponseData } from "./instance";

export const toChuc = async () => {
  const res = await instance().get<ResponseData<ToChuc[]>>("/to-chuc");
  return res.data?.data ?? [];
};
