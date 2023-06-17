import React from "react";

function Topbar() {
  return (
    <div className="top-bar">
      <div className="container-lg container-fluid ">
        <div className="row">
          <div className="col-lg-5 col-md-5 d-flex align-items-center justify-content-md-start justify-content-center">
            <div className="open-time">
              <p>
                <span>Giờ mở cửa:</span> 9.00 SA to 10.00 CH
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 d-flex justify-content-end">
            <div className="contact-info">
              <ul>
                <li>
                  <a href="mailto:nhahangtaitu@gmail.com">
                    <i className="bi bi-envelope" /> nhahangtaitu@gmail.com
                  </a>
                </li>
                <li>
                  <a>
                    <i className="bi bi-geo-alt" />
                    124 Nguyễn Chí Thanh, Q. Hải Châu, TP. Đà Nẵng
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
