import Link from "next/link";
import React from "react";

function About3() {
  return (
    <div className="introduction-area pt-120 mb-120">
      <div className="container">
        <div className="row align-items-end gy-5">
          <div className="col-lg-7">
            <div className="section-title3">
              <span>
                {" "}
                <img
                  className="left-vec"
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt=""
                />{" "}
                Restho Introduction{" "}
                <img
                  className="right-vec"
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt=""
                />
              </span>
              <h2>To Take Healthy Food.</h2>
            </div>
            <div className="introduction-content">
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="about-features">
                <ul>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Delicious Food
                  </li>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Cost Effective
                  </li>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Quality Food
                  </li>
                </ul>
                <ul>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Expert Chef
                  </li>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Letraset Sheets
                  </li>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Quality Food
                  </li>
                </ul>
              </div>
              <div className="achievement">
                <h5>Our Achievement:</h5>
                <ul>
                  <li>
                    <img src="assets/images/icon/Award-01.svg" alt="Award-01" />
                    <div className="award-name">
                      <a href="#">National Award</a>
                    </div>
                  </li>
                  <li>
                    <img src="assets/images/icon/Award-02.svg" alt="Award-02" />
                    <div className="award-name">
                      <a href="#">National Award</a>
                    </div>
                  </li>
                  <li>
                    <img src="assets/images/icon/Award-03.svg" alt="Award-03" />
                    <div className="award-name">
                      <a href="#">National Award</a>
                    </div>
                  </li>
                  <li>
                    <img src="assets/images/icon/Award-04.svg" alt="Award-04" />
                    <div className="award-name">
                      <a href="#">National Award</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="discover-btn">
                <Link legacyBehavior href="/about">
                  <a className="primary-btn7 btn-md2">
                    <i className="bi bi-arrow-up-right-circle" />
                    Discover More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="h3-into-img-big">
              <img
                className="img-fluid"
                src="assets/images/bg/h3-intro-big.png"
                alt="h3-intro-big"
              />
              <div className="h3-into-img-sm magnetic-wrap">
                <img
                  className="img-fluid magnetic-item"
                  src="assets/images/bg/h3-intro-sm.png"
                  alt="h3-intro-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
