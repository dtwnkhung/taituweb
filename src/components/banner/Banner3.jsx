import Link from "next/link";
import React from "react";

function Banner3() {
  return (
    <div className="home3-banner">
      <div className="social-area">
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
      <div className="open-time">
        <div className="left-vect">
          <img src="assets/images/bg/open-vec-left.png" alt="" />
        </div>
        <div className="right-vect">
          <img src="assets/images/bg/open-vec-right.png" alt="" />
        </div>
        <p>
          <img
            className="left-vec"
            src="assets/images/icon/h3-open-vec.svg"
            alt=""
          />
          Our Restho Restaurant is Opening Hour 9:30 AM to 9.00 PM
          <img
            className="right-vec"
            src="assets/images/icon/h3-open-vec.svg"
            alt=""
          />
        </p>
      </div>
      <div className="video-wrap d-flex align-items-center justify-content-center">
        <video autoPlay loop="loop" muted preload="auto">
          <source src="assets/video/v1.mp4" type="video/mp4" />
        </video>
        <div className="banner-content text-center">
          <span>
            {" "}
            <img
              className="left-vec"
              src="assets/images/icon/h3-sub-title-vec.svg"
              alt=""
            />{" "}
            Welcome To Restho{" "}
            <img
              className="right-vec"
              src="assets/images/icon/h3-sub-title-vec.svg"
              alt=""
            />
          </span>
          <h1>Find Your Best Healthy &amp; Tasty Food.</h1>
          <Link legacyBehavior href="/about">
            <a className="primary-btn7 btn-md2">
              <i className="bi bi-arrow-up-right-circle" /> Discover More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
