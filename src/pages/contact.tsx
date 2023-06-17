import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactAddress from "../components/contact/ContactAddress";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import Layout from "../layout/Layout";
import { getChiNhanh } from "../lib/apis/chi-nhanh";
import { ChiNhanh } from "../lib/interfaces/chi-nhanh";

interface ContactProps {
  chiNhanhs?: ChiNhanh[],
  error?: string
}

function ContactPage(props: ContactProps) {

  return (
    <Layout>
      <Breadcrumb pageName="Liên hệ" pageTitle="Liên hệ" backgroundUrl="assets/images/source/phong_12.JPG" />
      {props.chiNhanhs?.map(chiNhanh => {
        return <ContactAddress
          key={chiNhanh.id}
          hinhAnh="assets/images/source/phong_14.jpg"
          email="nhahangtaitu@gmail.com"
          diaChi={chiNhanh.diaChi}
          soDienThoai={chiNhanh.soDienThoai}
          ten={chiNhanh.ten}
        />
      })}
      <ContactForm />
      <ContactMap
        points={props.chiNhanhs?.map(
          chiNhanh => {
            return { lat: chiNhanh.lat, long: chiNhanh.long }
          }
        )}
      />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const chiNhanhs = await getChiNhanh();

    if (chiNhanhs.length == 0) {
      chiNhanhs.push({
        diaChi: "124 Nguyễn Chí Thanh - Đà Nẵng,<br/>Da Nang, Vietnam",
        gioLamViec: "",
        hoatDong: true,
        id: "chinhanh-1",
        idToChuc: "tochuc-1",
        lat: 108.220801,
        long: 16.067958,
        moTa: "",
        nguoiDaiDien: "",
        soDienThoai: "0906 539 539",
        stt: 1,
        ten: "Ẩm Thực Nam Bộ - Đờn Ca Tài Tử"
      })
    }
    return {
      props: {
        chiNhanhs
      }
    }
  } catch (error) {

    return {
      props: {
        error: "LỖI"
      }
    }
  }
}

export default ContactPage;
