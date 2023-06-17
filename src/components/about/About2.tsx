import Link from "next/link";
import React from "react";

function About2() {
  return (
    <div className="h2-about-area pb-120">
      <div className="about-left2">
        <img
          className="img-fluid"
          src="assets/images/bg/h2-about-img-full.png"
          alt="h2-about-img-full"
        />
      </div>
      <div className="about-left">
        <img
          className="img-fluid h2-about-img1"
          src="assets/images/bg/h2-about-img1.png"
          alt="h2-about-img1"
        />
        <img
          className="img-fluid h2-about-img3"
          src="assets/images/bg/h2-about-img3.png"
          alt="h2-about-img3"
        />
        <img
          className="img-fluid h2-about-img2"
          src="assets/images/bg/h2-about-img2.png"
          alt="h2-about-img2"
        />
        <img
          className="img-fluid h2-about-img4"
          src="assets/images/bg/h2-about-img4.png"
          alt="h2-about-img4"
        />
      </div>
      <div className="about-right">
        <div className="section-title">
          <span>
            <img
              className="left-vec"
              src="assets/images/icon/sub-title-vec.svg"
              alt="sub-title-vec"
            />
            About to Restho
            <img
              className="right-vec"
              src="assets/images/icon/sub-title-vec.svg"
              alt="sub-title-vec"
            />
          </span>
          <h2>Come to Our Restaurant, Ready Your Food.</h2>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="about-featurs">
          <ul>
            <li>
              <div className="features-img">
                <img src="assets/images/icon/h2-about1.svg" alt="" />
              </div>
              <div className="features-content">
                <h4>Pure Fresh Food.</h4>
                <p>We are serve different type of fresh food.</p>
              </div>
            </li>
            <li>
              <div className="features-img">
                <img src="assets/images/icon/h2-about2.svg" alt="" />
              </div>
              <div className="features-content">
                <h4>Experties Chef.</h4>
                <p>We are serve different type of fresh food.</p>
              </div>
            </li>
          </ul>
        </div>
        <Link legacyBehavior href="/about">
          <a className="primary-btn5 btn-md2">
            <i className="bi bi-arrow-up-right-circle" />
            Discover More
          </a>
        </Link>
      </div>
    </div>
  );
}

export default About2;
