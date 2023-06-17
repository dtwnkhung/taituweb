import { ThucDon } from "../interfaces/thuc-don";
import instance, { ResponseData } from "./instance";

export const getThucDon = async () => {
    const res = await instance().get<ResponseData<ThucDon[]>>('/thuc-don');
    let result: ThucDon[] = [];
    if (res?.data?.success == true) {
        result = res.data.data;
    }
    return result;
}