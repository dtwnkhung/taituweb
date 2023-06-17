export type BaiViet = {
    id?: string,
    idToChuc?: string,
    slug?: string,
    hoatDong?: boolean,
    taoBoi?: string,
    taoLuc?: number,
    capNhatBoi?: string,
    capNhatLuc?: number,
    hinhAnhs?: BaiVietHinhAnh[],
    ngonNgus?: BaiVietNgonNgu[],
    phanLoais?: BaiVietPhanLoai[]
    toChuc?: BaiVietToChuc
}

export type BaiVietHinhAnh = {
    id?: string,
    macDinh?: boolean,
    moTa?: string,
    taiNguyenDayDu?: string,
    taiNguyenTrichDan?: string,
    hoatDong?: boolean,
    ten?: string,
    tenMoRong?: string
}

export type BaiVietNgonNgu = {
    id?: string,
    noiDung?: string,
    ten?: string,
    trichDan?: string,
    moTa?: string
}

export type BaiVietPhanLoai = {
    id?: string,
    noiDung?: string,
    ten?: string,
    trichDan?: string,
    moTa?: string
}

export type BaiVietToChuc = {
    id?: string,
    ten?: string
}