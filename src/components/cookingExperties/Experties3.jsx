import Link from "next/link";
import React from "react";

function Experties3() {
  return (
    <div className="home3-chef mb-120">
      <div className="container">
        <div className="row justify-content-center mb-45">
          <div className="col-lg-8">
            <div className="section-title3 text-center">
              <span>
                {" "}
                <img
                  className="left-vec"
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt=""
                />
                Experties
                <img
                  className="right-vec"
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt=""
                />
              </span>
              <h2>Our Experties Chef</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="cooking-expart-wrap">
              <div className="exparts-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h3-chef-01.png"
                  alt=""
                />
                <div className="social-area">
                  <div className="share-icon">
                    <i className="bi bi-plus-lg" />
                  </div>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="exparts-content text-center">
                <h3>
                  <Link href="/chef-details" legacyBehavior>
                    <a>Josef Harry</a>
                  </Link>
                </h3>
                <p>Senior Chef</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="cooking-expart-wrap">
              <div className="exparts-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h3-chef-02.png"
                  alt=""
                />
                <div className="social-area">
                  <div className="share-icon">
                    <i className="bi bi-plus-lg" />
                  </div>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="exparts-content text-center">
                <h3>
                  <Link legacyBehavior href="/chef-details">
                    <a>Hony Harry</a>
                  </Link>
                </h3>
                <p>Junior Chef</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="cooking-expart-wrap">
              <div className="exparts-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h3-chef-03.png"
                  alt=""
                />
                <div className="social-area">
                  <div className="share-icon">
                    <i className="bi bi-plus-lg" />
                  </div>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="exparts-content text-center">
                <h3>
                  <Link href="/chef-details" legacyBehavior>
                    <a>Smith Robert</a>
                  </Link>
                </h3>
                <p>Head of Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experties3;
