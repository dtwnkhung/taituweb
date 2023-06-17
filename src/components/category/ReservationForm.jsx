import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function ReservationForm() {
  const [startDate1, setStartDate1] = useState(false);
  return (
    <div className="container">
      <div className="reservation-1 mb-120 mt-120">
        <div className="row d-flex align-items-center justify-content-center mb-40">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span>
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Đặt bàn online
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Điền các thông tin bên dưới</h2>
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
                    <input type="text" placeholder="Số điện thoại*" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="number" placeholder="Số người" inputMode="numeric" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner date-icon">
                    <ReactDatePicker
                      selected={startDate1}
                      onChange={(date) => setStartDate1(date)}
                      placeholderText="Ngày"
                      className="claender"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <select className="time-select">
                      <option value="time">08 : 00 Sáng</option>
                      <option>09 : 00 am</option>
                      <option value={1}>10 : 00 Sáng</option>
                      <option value={2}>11 : 00 Sáng</option>
                      <option value={3}>12 : 00 Chiều</option>
                      <option value={4}>01 : 00 Chiều</option>
                      <option value={5}>02 : 00 Chiều</option>
                      <option value={6}>03 : 00 Chiều</option>
                      <option value={7}>04 : 00 Chiều</option>
                      <option value={8}>05 : 00 Chiều</option>
                      <option value={9}>06 : 00 Chiều</option>
                      <option value={10}>07 : 00 Chiều</option>
                      <option value={11}>08 : 00 Chiều</option>
                      <option value={12}>09 : 00 Chiều</option>
                      <option value={13}>10 : 00 Chiều</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 sm-mb-25">
                  <div className="form-inner">
                    <input type="email" placeholder="Địa chỉ email" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-inner">
                    <button type="submit" className="accept-reservation">Xác nhận đặt bàn</button>
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

export default ReservationForm;
