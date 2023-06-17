import { GioiThieu } from "../interfaces/gioi-thieu";
import instance, { ResponseData } from "./instance"

export const getGioiThieu = async () => {
    const res = await instance().get<ResponseData<GioiThieu[]>>('/gioi-thieu');
    let result: GioiThieu[] = [];
    if (res?.data?.success == true) {
        result = res.data.data;
    }
    return result;
}