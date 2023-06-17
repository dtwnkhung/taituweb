export type GioiThieu = {
    id?: string,
    idToChuc?: string,
    slug?: string,
    moTa?: string,
    macDinh?: boolean,
    hoatDong?: boolean,
    taoBoi?: string,
    taoLuc?: number,
    capNhatBoi?: string,
    capNhatLuc?: number,
    hinhAnhs?: GioiThieuHinhAnh[],
    ngonNgus?: GioiThieuNgonNgu[],
    toChuc?: GioiThieuToChuc
}

export type GioiThieuHinhAnh = {
    id?: string,
    macDinh?: boolean,
    moTa?: string,
    taiNguyenDayDu?: string,
    taiNguyenTrichDan?: string,
    hoatDong?: boolean,
    ten?: string,
    tenMoRong?: string
}

export type GioiThieuNgonNgu = {
    id?: string,
    noiDung?: string,
    ten?: string,
    trichDan?: string
}

export type GioiThieuToChuc = {
    id?: string,
    ten?: string
}