import React from "react";

interface ContactAddressProps {
  hinhAnh?: string,
  ten?: string,
  diaChi?: string,
  soDienThoai?: string,
  email?: string
}

function ContactAddress(props: ContactAddressProps) {
  return (
    <div className="contact-page pt-120">
      <div className="container-fluid">
        <div className="row justify-content-center g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-8">
            <div className="row no-gutters overflow-hidden border" style={{ borderRadius: 10 }}>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="contact-img h-100">
                  <img
                    src={props.hinhAnh}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt="contact-img-01"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="contact-content p-3">
                  <h3>Nhà Hàng TÀI TỬ</h3>
                  <h5 className="mb-3" style={{ lineHeight: "1.5" }}>{props.ten}</h5>
                  <ul className="list-group">
                    <li className="list-group-item p-0 border-0 d-flex align-items-center mb-3">
                      <div className="icon me-3" style={{ alignSelf: "flex-start", flexShrink: 0 }}>
                        <img
                          src="assets/images/icon/location.svg"
                          alt="location"
                        />
                      </div>
                      <div className="content">
                        <a dangerouslySetInnerHTML={{ __html: props.diaChi}}>
                          
                        </a>
                      </div>
                    </li>
                    <li className="list-group-item p-0 border-0 d-flex align-items-center mb-3">
                      <div className="icon me-3" style={{ flexShrink: 0 }}>
                        <img src="assets/images/icon/phone.svg" alt="phone" />
                      </div>
                      <div className="content">
                        <a className="text-dark" href={`tel:${props.soDienThoai}`}>{props.soDienThoai}</a>
                      </div>
                    </li>
                    <li className="list-group-item p-0 border-0 d-flex align-items-center">
                      <div className="icon me-3" style={{ flexShrink: 0 }}>
                        <img src="assets/images/icon/envlope.svg" alt="envlope" />
                      </div>
                      <div className="content">
                        <a className="text-dark" href={`mailto:${props.email}`}>{props.email}</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
          {/* <div className="col-xxl-6 col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div className="contact-wrap">
              <div className="contact-img">
                <img
                  src="assets/images/bg/contact-img-02.png"
                  alt="contact-img-02"
                />
              </div>
              <div className="contact-content">
                <h3>Italian Branch</h3>
                <ul>
                  <li>
                    <div className="icon">
                      <img
                        src="assets/images/icon/location.svg"
                        alt="location"
                      />
                    </div>
                    <div className="content">
                      <a>
                        Khikhet DOHS, House-169/177,
                        <br />
                        Road No-04, Avenue -02
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/phone.svg" alt="phone" />
                    </div>
                    <div className="content">
                      <a href="#">+990-7782200</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/envlope.svg" alt="envlope" />
                    </div>
                    <div className="content">
                      <a href="#">info@example.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactAddress;
