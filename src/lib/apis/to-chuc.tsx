import { ToChuc } from "../interfaces/to-chuc";
import instance, { ResponseData } from "./instance";

export const getToChuc = async () => {
  const res = await instance().get<ResponseData<ToChuc[]>>("/gioi-thieu");
  let result: ToChuc[] = [];
  if (res?.data?.success == true) {
    result = res.data.data;
  }
  
  return result;
};
