import React from "react";
import CountUp from "react-countup";
function AboutCounter() {
  return (
    <div className="about-counter mb-120">
      <div className="container">
        <div className="row justify-content-center g-md-4 gy-5">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/chef.svg" alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer" data-odometer-final={100}>
                    <span className="d-flex align-items-center"><CountUp className="me-2" end={5} /> + </span>
                  </h3>
                </div>
                <p>Nhiều đầu bếp chuyên nghiệp</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/food.svg" alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer" data-odometer-final={250}>
                    <span className="d-flex align-items-center"><CountUp className="me-2" end={20} /> + </span>
                  </h3>
                </div>
                <p>Thực đơn đa dạng, món ăn phong phú</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/customer.svg" alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <span className="d-flex align-items-center"><CountUp className="me-2" end={1000} /> + </span>
                </div>
                <p>Khách hàng ghé thăm, và đánh giá tốt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCounter;
