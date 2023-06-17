import instance, { ResponseData } from "./instance";

type TLoginRequest = {
    tenDangNhap: string,
    matKhau: string
}

type TRegisterRequest = {
    idToChuc: string,
    tenDangNhap: string,
    matKhau: string,
    tenNguoiDung: string,
    soDienThoai: string,
    email: string
}

export const login = async (thongTin: TLoginRequest) => {
    const res = await instance().post<ResponseData<any>>("/login", thongTin);
    return res.data;
}

export const register = async (thongTin: TRegisterRequest) => {
    const res = await instance().post<ResponseData<any>>("/register", thongTin);
    return res.data;
}