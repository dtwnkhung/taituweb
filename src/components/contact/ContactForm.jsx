import React from "react";

function ContactForm() {
  return (
    <div className="container">
      <div className="contact-form mb-120 mt-120">
        <div className="row d-flex align-items-center justify-content-center mb-40">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span>
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Liên hệ
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Kết nối với chúng tôi</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="text" placeholder="Tên*" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="email" placeholder="Địa chỉ email*" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-inner">
                    <textarea placeholder="Lời nhắn ..." defaultValue={""} />
                  </div>
                </div>
                {/* <div className="col-lg-12 mb-40">
                  <div className="form-inner2">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      defaultValue="Bike"
                    />
                    <label htmlFor="vehicle1">
                      {" "}
                      Please save my name, email for the next time when I
                      comment.{" "}
                    </label>
                  </div>
                </div> */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-inner mt-4">
                    <button type="submit">Gửi tin nhắn</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
