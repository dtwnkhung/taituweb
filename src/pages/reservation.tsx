import React, { useState } from "react";
import ReservationForm from "../components/category/ReservationForm";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
import BestOffer1 from "../components/bestOffer/BestOffer1";
import { datBan } from "../lib/client-apis/dat-ban";

interface ReservationProps {

}

function Reservation(props: ReservationProps) {

  const [message, setMessage] = useState({ text: "", status: false });

  const onDatBan = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let target: any = e.target;
    const data = {
      hoTen: target?.hoTen?.value,
      diaChi: target?.diaChi?.value,
      email: target?.email?.value,
      soDienThoai: target?.soDienThoai?.value,
      nguoiLon: target?.nguoiLon?.value,
      treEm: target?.treEm?.value,
      batDau: target?.batDau?.value
    }
    const result = await datBan(data);
    setMessage({
      status: result.success,
      text: result.message
    })
  }

  return (
    <Layout>
      <Breadcrumb pageName="Đặt bàn" pageTitle="Đặt bàn" backgroundUrl="assets/images/source/phong_2.jpg" />
      <div>
        {/* ========== Reservation end============= */}
        <ReservationForm onSubmit={onDatBan} message={message.text} status={message.status} />
        {/* ========== Reservation end============= */}
        <BestOffer1 />
        {/* <div className="best-offer-area1 mb-120">
          <div className="container">
            <div className="row d-flex justify-content-center mb-40">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <span>
                    <img
                      className="left-vec"
                      src="assets/images/icon/sub-title-vec.svg"
                      alt="sub-title-vec"
                    />
                    Best Offer
                    <img
                      className="right-vec"
                      src="assets/images/icon/sub-title-vec.svg"
                      alt="sub-title-vec"
                    />
                  </span>
                  <h2>Choose Your Best Offer</h2>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 col-md-6">
                <div className="best-offer-wrap clearfix">
                  <div className="best-offer-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/best-offer-img1.png"
                      alt="best-offer-img1"
                    />
                    <div className="price-tag">
                      <span>$55</span>
                    </div>
                  </div>
                  <div className="best-offer-content">
                    <h3>Buy One Get One Free</h3>
                    <p>
                      If you are going to use a passage of Lorem Ipsum need.{" "}
                    </p>
                    
                    <a className="primary-btn3 btn-sm">Limited Offer</a>
                    <ol className="features">
                      <li>Prawn with Noodls.</li>
                      <li>Special Drinks.</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="best-offer-wrap clearfix">
                  <div className="best-offer-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/best-offer-img2.png"
                      alt="best-offer-img1"
                    />
                    <div className="price-tag">
                      <span>$55</span>
                    </div>
                  </div>
                  <div className="best-offer-content">
                    <h3>Buy One Get One Free</h3>
                    <p>
                      If you are going to use a passage of Lorem Ipsum need.{" "}
                    </p>
                    <a className="primary-btn3 btn-sm">Limited Offer</a>
                    <ol className="features">
                      <li>Fried Chicken.</li>
                      <li>Watermelon Juice.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
}


export default Reservation;
