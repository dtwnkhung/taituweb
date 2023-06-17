import Link from "next/link";
import React from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);
function Banner2() {
  const bannerSliders = {
    slidesPerView: 1,
    speed: 1200,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination-g",
    },
  };
  return (
    <div className="banner-section2">
      <div className="banner-vector">
        <img
          className="pagination-bg"
          src="assets/images/icon/h2-slider-paginatin-bg.svg"
          alt=""
        />
        <img
          className="rect-shape1"
          src="assets/images/icon/h2-banner-rect-shape.svg"
          alt=""
        />
        <img
          className="rect-shape2"
          src="assets/images/icon/h2-banner-rect-shape.svg"
          alt=""
        />
        <img
          className="circle"
          src="assets/images/icon/h2-banner-circle.svg"
          alt=""
        />
      </div>
      <Swiper {...bannerSliders} className="swiper banner2-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper d-flex align-items-center justify-content-between">
              <div className="banner-content">
                <span>
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  Welcome To Restho
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                </span>
                <h1>Find Your Best Healthy &amp; Tasty Food.</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
                <Link legacyBehavior href="/about">
                  <a className="primary-btn5 btn-md2">
                    <i className="bi bi-arrow-up-right-circle" />
                    Discover More
                  </a>
                </Link>
              </div>
              <div className="banner-right">
                <img
                  className="img-fluid h2-banner-img1"
                  src="assets/images/bg/h2-banner-img1.png"
                  alt="h2-banner-img1"
                />
                <img
                  className="img-fluid h2-banner-img3"
                  src="assets/images/bg/h2-banner-img3.png"
                  alt="h2-banner-img3"
                />
                <img
                  className="img-fluid h2-banner-img2"
                  src="assets/images/bg/h2-banner-img2.png"
                  alt="h2-banner-img2"
                />
                <img
                  className="img-fluid h2-banner-img4"
                  src="assets/images/bg/h2-banner-img4.png"
                  alt="h2-banner-img4"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper d-flex align-items-center justify-content-between">
              <div className="banner-content">
                <span>
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  Welcome To Restho
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                </span>
                <h1>Find Your Best Healthy &amp; Tasty Food.</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
                <Link legacyBehavior href="/about">
                  <a className="primary-btn5 btn-md2">
                    <i className="bi bi-arrow-up-right-circle" />
                    Discover More
                  </a>
                </Link>
              </div>
              <div className="banner-right">
                <img
                  className="img-fluid h2-banner-img1"
                  src="assets/images/bg/h2-banner-img11.png"
                  alt="h2-banner-img1"
                />
                <img
                  className="img-fluid h2-banner-img3"
                  src="assets/images/bg/h2-banner-img33.png"
                  alt="h2-banner-img3"
                />
                <img
                  className="img-fluid h2-banner-img2"
                  src="assets/images/bg/h2-banner-img22.png"
                  alt="h2-banner-img2"
                />
                <img
                  className="img-fluid h2-banner-img4"
                  src="assets/images/bg/h2-banner-img44.png"
                  alt="h2-banner-img4"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper d-flex align-items-center justify-content-between">
              <div className="banner-content">
                <span>
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  Welcome To Restho
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                </span>
                <h1>Find Your Best Healthy &amp; Tasty Food.</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
                <Link legacyBehavior href="/about">
                  <a className="primary-btn5 btn-md2">
                    <i className="bi bi-arrow-up-right-circle" />
                    Discover More
                  </a>
                </Link>
              </div>
              <div className="banner-right">
                <img
                  className="img-fluid h2-banner-img1"
                  src="assets/images/bg/h2-banner-img111.png"
                  alt="h2-banner-img1"
                />
                <img
                  className="img-fluid h2-banner-img3"
                  src="assets/images/bg/h2-banner-img333.png"
                  alt="h2-banner-img3"
                />
                <img
                  className="img-fluid h2-banner-img2"
                  src="assets/images/bg/h2-banner-img222.png"
                  alt="h2-banner-img2"
                />
                <img
                  className="img-fluid h2-banner-img4"
                  src="assets/images/bg/h2-banner-img444.png"
                  alt="h2-banner-img4"
                />
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-pagination-g" />
      </Swiper>
    </div>
  );
}

export default Banner2;
