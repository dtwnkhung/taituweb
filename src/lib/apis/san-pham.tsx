import { SanPham } from "../interfaces/san-pham";
import instance, { ResponseData } from "./instance";

export const getSanPham = async () => {
    const res = await instance().get<ResponseData<SanPham[]>>('/san-pham');
    let result: SanPham[] = [];
    if (res?.data?.success == true) {
        result = res.data.data;
    }
    return result;
}

export const getPhanLoaiSanPham = async () => {
    
}

export const getLoaiSanPham = async () => {

}