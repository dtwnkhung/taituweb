import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type TBookInfo = {

}

interface ReservationFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  message?: string,
  status?: boolean
}

function ReservationForm(props: ReservationFormProps) {
  const [startDate1, setStartDate1] = useState();
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
        {props.message && <h4 className={`text-center mb-4 ${props.status ? "text-success" : "text-danger"}`}>{props.message}</h4>}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form onSubmit={props.onSubmit}>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="text" placeholder="Tên*" name="hoTen" required />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="text" placeholder="Số điện thoại*" name="soDienThoai" required />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="number" placeholder="Số người lớn" name="nguoiLon" inputMode="numeric" required />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="number" placeholder="Số trẻ em" inputMode="numeric" name="treEm" required />
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
                    <input type="hidden"
                      value={startDate1}
                      name="batDau"
                      required />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <select className="time-select" name="gio">
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
                    <input type="email" placeholder="Địa chỉ email" name="email" />
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
