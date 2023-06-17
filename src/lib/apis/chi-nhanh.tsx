import { ChiNhanh } from "../interfaces/chi-nhanh";
import instance, { ResponseData } from "./instance"

export const getChiNhanh = async () => {
    const res = await instance().get<ResponseData<ChiNhanh[]>>('/chi-nhanh');
    let result: ChiNhanh[] = [];
    if (res?.data?.success == true) {
        result = res.data.data;
    }
    return result;
}