import Link from "next/link";
import React from "react";

function Experties2() {
  return (
    <div className="h2-best-chef mb-120">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center mb-40">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span>
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Our Experties
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Restho's Best Chef</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="best-chef-wrap">
              <div className="chef-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/chef-kitchen1.png"
                  alt="chef-kitchen1"
                />
              </div>
              <div className="Chef-content text-center">
                <h3>
                  <Link legacyBehavior href="/chef-details">
                    <a>Mr. Willium Jhon</a>
                  </Link>
                </h3>
                <p>Chef of Head</p>
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
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-linkedin" />
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
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="best-chef-wrap">
              <div className="chef-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/chef-kitchen2.png"
                  alt="chef-kitchen1"
                />
              </div>
              <div className="Chef-content text-center">
                <h3>
                  <Link legacyBehavior href="/chef-details">
                    <a>Mile Woatson </a>
                  </Link>
                </h3>
                <p>Chef of Head</p>
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
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-linkedin" />
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
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="best-chef-wrap">
              <div className="chef-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/chef-kitchen3.png"
                  alt="chef-kitchen1"
                />
              </div>
              <div className="Chef-content text-center">
                <h3>
                  <Link href="/chef-details" legacyBehavior>
                    <a>Mr. Robert Jhon</a>
                  </Link>
                </h3>
                <p>Chef of Head</p>
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
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-linkedin" />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experties2;
