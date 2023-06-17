import React from "react";

function BestOffer1() {
  return (
    <div className="best-offer-area1 mb-120">
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
                Ưu đãi
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Ưu đãi chỉ dành riêng cho bạn</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-6">
            <div className="best-offer-wrap">
              <div className="row">
                <div className="best-offer-img">
                  <img
                    className="img-fluid w-100"
                    src="assets/images/source/foods/phung-hoang.jpg"
                    style={{
                      borderRadius: "1rem",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                    alt="best-offer-img1"
                  />
                </div>
                <div className="best-offer-content">
                  <h3>Gọi 7 món tặng 1 món</h3>
                  <p>Áp dụng với những món nằm trong danh sách ưu đãi </p>
                  <a className="primary-btn3 btn-sm">Đặt ngay</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="best-offer-wrap">
              <div className="row">
                <div className="best-offer-img">
                  <img
                    className="img-fluid w-100"
                    src="assets/images/source/foods/luu-thuy.jpg"
                    style={{
                      borderRadius: "1rem",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                    alt="best-offer-img1"
                  />
                </div>
                <div className="best-offer-content">
                  <h3>Giảm 5% với hóa đơn trên 1.500.000 đ</h3>
                  <p>Áp dụng với những món nằm trong danh sách ưu đãi </p>
                  <a className="primary-btn3 btn-sm">Đặt ngay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestOffer1;
