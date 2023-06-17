import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

function Faq() {
  return (
    <Layout>
      <Breadcrumb pageName="FAQ" pageTitle="FAQ" />
      <div className="faq-area pt-120">
        <div className="container-fluid">
          <div className="row g-lg-5 gy-5">
            <div className="col-lg-5">
              <div className="faq-left-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/faq-big-img.png"
                  alt="faq-big-img"
                />
                <div className="sm-img">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/faq-sm-img.png"
                    alt="faq-sm-img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title">
                <span>
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  General Question
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                </span>
                <h2>Some Frequently Question.</h2>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        If you are going to use a passage of need ?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightl
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Are there availabe food item in restaurant ?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightl
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Various versions have evolved over the years ?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightl
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        The point of using Lorem Ipsum is that it ?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightl
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Contrary to popular belief, Lorem Ipsum isn’t ?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightl
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        It was popularised of Letraset sheets containing ?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightl
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="reservation-2 mb-120 mt-120">
          <div className="row d-flex align-items-center justify-content-center mb-40">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <span>
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  Online Reserve
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                </span>
                <h2>For Online Reservation</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <form>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 mb-25">
                    <div className="form-inner">
                      <input type="text" placeholder="Name*" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-25">
                    <div className="form-inner">
                      <input type="text" placeholder="Phone*" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-25">
                    <div className="form-inner">
                      <input type="text" placeholder="People" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-25">
                    <div className="form-inner date-icon">
                      <input id="datepicker" type="text" placeholder="Date" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-25">
                    <div className="form-inner">
                      <select className="time-select">
                        <option value="time">08 : 00 am</option>
                        <option>09 : 00 am</option>
                        <option value={1}>10 : 00 am</option>
                        <option value={2}>11 : 00 am</option>
                        <option value={3}>12 : 00 pm</option>
                        <option value={4}>01 : 00 pm</option>
                        <option value={5}>02 : 00 pm</option>
                        <option value={6}>03 : 00 pm</option>
                        <option value={7}>04 : 00 pm</option>
                        <option value={8}>05 : 00 pm</option>
                        <option value={9}>06 : 00 pm</option>
                        <option value={10}>07 : 00 pm</option>
                        <option value={11}>08 : 00 pm</option>
                        <option value={12}>09 : 00 pm</option>
                        <option value={13}>10 : 00 pm</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 sm-mb-25">
                    <div className="form-inner">
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-inner">
                      <button type="submit">Reserve Now</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Faq;
