import instance, { ResponseData } from "./instance"

type TDatBanRequest = {
    hoTen: string,
    diaChi?: string,
    email?: string,
    soDienThoai: string,
    nguoiLon: number,
    treEm: number,
    batDau: number,
    ketThuc?: number,
    moTa?: string
}

export const datBan = async (thongTin: TDatBanRequest) => {
    const res = await instance().post<ResponseData<any>>("/dat-ban-goi-mon/dat-ban", thongTin);
    if (res?.data?.success == true) {
        return true;
    }
    return false;
}