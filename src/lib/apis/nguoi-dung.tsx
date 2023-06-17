import { DangKy, DangNhap } from "../interfaces/nguoi-dung";
import instance, { ResponseData } from "./instance";

export const dangNhap = async (tenDangNhap: string, matKhau: string) => {
  const res = await instance().post<ResponseData<DangNhap>>("/dang-nhap", {
    tenDangNhap,
    matKhau,
  });

  return res.data;
};

type TDangKyRequest = {
  idToChuc: string;
  tenDangNhap: string;
  matKhau: string;
  tenNguoiDung: string;
  soDienThoai: string;
  email: string;
};

export const dangKy = async (thongTin: TDangKyRequest) => {
  const res = await instance().post<ResponseData<DangKy>>("/dang-ky", thongTin);
  return res.data;
};
