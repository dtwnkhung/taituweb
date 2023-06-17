export type SanPham = {
    id?: string,
    idToChuc?: string,
    slug?: string,
    giaNiemYet?: number,
    dieuChinh?: number,
    giaDieuChinh?: number,
    moTa?: string,
    hoatDong?: boolean,
    taoBoi?: string,
    taoLuc?: number,
    capNhatBoi?: string,
    capNhatLuc?: number,
    hinhAnhs?: SanPhamHinhAnh[],
    ngonNgus?: SanPhamNgonNgu[],
    phanLoais?: SanPhamPhanLoai[],
    thuocTinhs?: SanPhamThuocTinh[],
    toChuc?: SanPhamToChuc
}

export type SanPhamThuocTinh = {
    id?: string,
    idLoaiThuocTinh?: string,
    giaTri?: string
}

export type SanPhamHinhAnh = {
    id?: string,
    macDinh?: boolean,
    moTa?: string,
    taiNguyenDayDu?: string,
    taiNguyenTrichDan?: string,
    hoatDong?: boolean,
    ten?: string,
    tenMoRong?: string
}

export type SanPhamNgonNgu = {
    id?: string,
    noiDung?: string,
    ten?: string,
    trichDan?: string,
    moTa?: string
}

export type SanPhamPhanLoai = {
    id?: string,
    noiDung?: string,
    ten?: string,
    trichDan?: string,
    moTa?: string
}

export type SanPhamToChuc = {
    id?: string,
    ten?: string
}