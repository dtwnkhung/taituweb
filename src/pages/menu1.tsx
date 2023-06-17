import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
import { getThucDon } from "../lib/apis/thuc-don";
import { ThucDon } from "../lib/interfaces/thuc-don";
import { middleware } from "../middleware";


interface Menu1Props {
  thucDons?: ThucDon[];
  error?: string;
}

type TMenuGroup = {
  ten?: string;
  items?: TMenuGroupType[];
};

type TMenuGroupType = {
  ten?: string;
  items?: TMenuGroupItem[];
};

type TMenuGroupItem = {
  stt?: number;
  ten?: string;
  gia?: number;
  moTa?: string;
};

interface MenuGroupProps {
  ten?: string;
  items: TMenuGroupType[];
}

interface MenuGroupTypeProps {
  ten?: string;
  items?: TMenuGroupItem[];
}

interface MenuGroupItemProps extends TMenuGroupItem { }

function Menu1(props: Menu1Props) {
  const [menus, setMenus] = useState<TMenuGroup[]>([]);

  useEffect(() => {
    let menus: {
      [k1: string]: {
        ten: string;
        loai: {
          [k2: string]: {
            ten: string;
            items: TMenuGroupItem[];
          };
        };
      };
    } = {};

    let idNgonNgu = null;

    for (let i in props.thucDons) {
      let thucDon = props.thucDons[i];
      if (
        thucDon.nhomSanPhamIdNgonNgu ===
        (idNgonNgu ??= thucDon.nhomSanPhamIdNgonNgu)
      ) {
        menus[thucDon.nhomSanPhamId] ??= {
          ten: thucDon.nhomSanPhamTen,
          loai: {},
        };
        menus[thucDon.nhomSanPhamId].loai[thucDon.loaiSanPhamId] = {
          ten:
            menus[thucDon.nhomSanPhamId]?.loai?.[thucDon.loaiSanPhamId]?.ten ??
            thucDon.loaiSanPhamTen,
          items: [
            ...(menus[thucDon.nhomSanPhamId]?.loai?.[thucDon.loaiSanPhamId]
              ?.items ?? []),
            {
              gia: thucDon.giaNiemYet,
              moTa: thucDon.sanPhamMoTa,
              ten: thucDon.sanPhamTen,
            },
          ],
        };
      }
    }

    let menusGroups: TMenuGroup[] = [];

    for (let key in menus) {
      const menu = menus[key];
      let items: TMenuGroupType[] = [];

      for (let i in menu.loai) {
        const loai = menu.loai[i];
        items.push({
          ten: loai.ten,
          items: loai.items,
        });
      }

      let item: TMenuGroup = {
        ten: menu.ten,
        items,
      };

      menusGroups.push(item);
    }

    console.log(menusGroups);
    setMenus(menusGroups);
  }, [props.thucDons]);

  return (
    <Layout>
      <Breadcrumb
        pageName="Thực đơn"
        pageTitle="Thực đơn"
        backgroundUrl="assets/images/source/foods/ca-ket-kho-lat.jpg"
      />
      <div className="menu-list-container">
        {menus.map((menu, key) => (
          <MenuGroup key={key} items={menu.items} ten={menu.ten} />
        ))}
      </div>
    </Layout>
  );
}

function MenuGroupItem(props: MenuGroupItemProps) {
  return (
    <>
      <li>
        <div className="sl">
          <span>{props.stt}.</span>
        </div>
        <div className="menu-content">
          <div className="menu-title">
            <h4>{props.ten}</h4>
            <span className="dot">
              <img src="assets/images/icon/dot.svg" alt="" />
            </span>
            <span className="price">{props.gia} đ</span>
          </div>
          <p>{props.moTa}</p>
        </div>
      </li>
    </>
  );
}

function MenuGroupType(props: MenuGroupTypeProps) {
  return (
    <>
      <div className="section-title text-center pt-40">
        <h2>{props.ten}</h2>
      </div>
      <div className="menu-list">
        <ul>
          {props.items &&
            props.items.map((item, key) => (
              <MenuGroupItem key={key} stt={key} {...item} />
            ))}
        </ul>
      </div>
    </>
  );
}

function MenuGroup(props: MenuGroupProps) {
  return (
    <div className="pt-120 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 px-0 order-lg-1 order-2">
            <div className="menu-wrapper1" style={{ minHeight: "100%" }}>
              <img
                className="menu-top-left"
                src="assets/images/icon/menu-top-left.svg"
                alt="menu-top-left"
              />
              <img
                className="menu-top-right"
                src="assets/images/icon/menu-top-right.svg"
                alt="menu-top-right"
              />
              <img
                className="menu-btm-right"
                src="assets/images/icon/menu-btm-right.svg"
                alt="menu-btm-right"
              />
              <img
                className="menu-btm-left"
                src="assets/images/icon/menu-btm-left.svg"
                alt="menu-btm-left"
              />
              {props.items &&
                props.items.map((item, key) => (
                  <MenuGroupType key={key} ten={item.ten} items={item.items} />
                ))}
            </div>
          </div>
          <div className="col-lg-6 px-0 order-lg-2 order-1">
            <div
              className="food-orgin"
              style={{
                backgroundImage:
                  "url(assets/images/source/foods/ca-tra-dau-nhung-dam-2.jpg)",
              }}
            >
              <div className="resturent-name">
                <h2 style={{ whiteSpace: "nowrap" }}>Nhà hàng Tài Tử</h2>
              </div>
              <img src="assets/images/icon/food-origin.svg" alt="food-origin" />
              <h2>{props.ten}</h2>
              <img src="assets/images/icon/food-origin.svg" alt="food-origin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu1;

export const getServerSideProps = middleware(async (context) => {
  try {
    const thucDons = await getThucDon();
    if (thucDons.length == 0) {
      let demo: ThucDon[] = [
        {
          loaiSanPhamId: "L1",
          nhomSanPhamId: "N1",
          nhomSanPhamTen: "Nhóm 1",
          nhomSanPhamMoTa: "Nhóm 1 mô tả",
          giaNiemYet: 50000,
          loaiSanPhamTen: "Loại 1",
          loaiSanPhamMoTa: "Loại 1 mô tả",
          sanPhamMoTa: "Sản phẩm 1 mô tả",
          sanPhamTen: "Sản phẩm 1",
          nhomSanPhamIdNgonNgu: "vn",
        },
        {
          loaiSanPhamId: "L1",
          nhomSanPhamId: "N1",
          nhomSanPhamTen: "Nhóm 1",
          nhomSanPhamMoTa: "Nhóm 1 mô tả",
          giaNiemYet: 50000,
          loaiSanPhamTen: "Loại 1",
          loaiSanPhamMoTa: "Loại 1 mô tả",
          sanPhamMoTa: "Sản phẩm 1 mô tả",
          sanPhamTen: "Sản phẩm 1 en",
          nhomSanPhamIdNgonNgu: "en",
        },
        {
          loaiSanPhamId: "L1",
          nhomSanPhamId: "N1",
          nhomSanPhamTen: "Nhóm 1",
          nhomSanPhamMoTa: "Nhóm 1 mô tả",
          giaNiemYet: 50000,
          loaiSanPhamTen: "Loại 1",
          loaiSanPhamMoTa: "Loại 1 mô tả",
          sanPhamMoTa: "Sản phẩm 2 mô tả",
          sanPhamTen: "Sản phẩm 2",
          nhomSanPhamIdNgonNgu: "vn",
        },
        {
          loaiSanPhamId: "L1",
          nhomSanPhamId: "N1",
          nhomSanPhamTen: "Nhóm 1",
          nhomSanPhamMoTa: "Nhóm 1 mô tả",
          giaNiemYet: 50000,
          loaiSanPhamTen: "Loại 1",
          loaiSanPhamMoTa: "Loại 1 mô tả",
          sanPhamMoTa: "Sản phẩm 2 mô tả",
          sanPhamTen: "Sản phẩm 2 en",
          nhomSanPhamIdNgonNgu: "en",
        },
        {
          loaiSanPhamId: "L2",
          nhomSanPhamId: "N1",
          nhomSanPhamTen: "Nhóm 1",
          nhomSanPhamMoTa: "Nhóm 1 mô tả",
          giaNiemYet: 50000,
          loaiSanPhamTen: "Loại 2",
          loaiSanPhamMoTa: "Loại 2 mô tả",
          sanPhamMoTa: "Sản phẩm 1 mô tả",
          sanPhamTen: "Sản phẩm 1",
          nhomSanPhamIdNgonNgu: "vn",
        },
        {
          loaiSanPhamId: "L1",
          nhomSanPhamId: "N2",
          nhomSanPhamTen: "Nhóm 2",
          nhomSanPhamMoTa: "Nhóm 2 mô tả",
          giaNiemYet: 50000,
          loaiSanPhamTen: "Loại 1",
          loaiSanPhamMoTa: "Loại 1 mô tả",
          sanPhamMoTa: "Sản phẩm 1 mô tả",
          sanPhamTen: "Sản phẩm 1",
          nhomSanPhamIdNgonNgu: "vn",
        },
      ];

      return {
        props: {
          thucDons: demo,
        },
      };
    }
    return {
      props: {
        thucDons,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "LỖI",
      },
    };
  }
});
