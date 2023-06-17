import { BaiViet } from "../interfaces/bai-viet";
import instance, { PageData, ResponseData } from "./instance"

export const getGioiThieu = async () => {
    const res = await instance().get<ResponseData<BaiViet[]>>('/bai-viet');
    let result: BaiViet[] = [];
    if (res?.data?.success == true) {
        result = res.data.data;
    }
    return result;
}

export const getBaiVietPage = async (page: number, size: number = 6) => {
    const res = await instance().get<ResponseData<PageData<BaiViet>>>('/bai-viet/page', {
        params: {
            PageNumber: page,
            PageSize: size
        }
    })

    let result: PageData<BaiViet>;

    if (res?.data?.success == true) {
        result = res.data.data;
    }
    return result;
}

export const getBaiVietDetail = async (id: string) => {
    const res = await instance().get<ResponseData<BaiViet>>(`/bai-viet/${id}`)

    let result: BaiViet;

    if (res?.data?.success == true) {
        result = res.data.data;
    }
    return result;
}