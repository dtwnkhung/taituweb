import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Banner1() {
  const bannerSlider = {
    slidesPerView: 1,
    speed: 1200,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".next-btn-1",
      prevEl: ".prev-btn-1",
    },
    pagination: false,
  };
  return (
    <div className="banner-section1">
      <Swiper {...bannerSlider} className="swiper banner1-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper d-flex align-items-center justify-content-between">
              <div className="social-area d-none">
                <ul className="m-0 p-0 d-flex align-items-center">
                  <li>
                    <a href="https://www.facebook.com/">Facebook</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.skype.com/">Skype</a>
                  </li>
                </ul>
              </div>
              <div className="banner-left-img">
                <img src="assets/images/icon/union-left.svg" alt="union-left" />
                <div className="food-img">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/images/source/foods/lau-mam-2.jpg"
                    alt="banner-img-1"
                    style={{
                      objectFit: "cover",
                      aspectRatio: 1,
                      maxWidth: 370,
                    }}
                  />
                </div>
              </div>
              <div className="banner-content">
                <span>
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  Chào mừng bạn
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                </span>
                <h1>Nhà hàng Tài Tử</h1>
                <p>
                  Nơi bạn không chỉ thưởng thức món ăn ngon, mà còn có thể thả
                  mình vào những giai điệu của dân ca tài tử.
                </p>
              </div>
              <div className="banner-right-img">
                <img
                  src="assets/images/icon/union-right.svg"
                  alt="union-right"
                />
                <div className="food-img">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/images/source/foods/ca-tra-dau-nhung-dam-2.jpg"
                    alt="banner-img-2"
                    style={{
                      objectFit: "cover",
                      aspectRatio: 1,
                      maxWidth: 370,
                    }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper d-flex align-items-center justify-content-between">
              <div className="social-area d-none">
                <ul className="m-0 p-0 d-flex align-items-center">
                  <li>
                    <a href="https://www.facebook.com/">Facebook</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.skype.com/">Skype</a>
                  </li>
                </ul>
              </div>
              <div className="banner-left-img">
                <img src="assets/images/icon/union-left.svg" alt="union-left" />
                <div className="food-img">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/images/source/foods/ca-ket-kho-lat.jpg"
                    alt="banner-img-5"
                    style={{
                      objectFit: "cover",
                      aspectRatio: 1,
                      maxWidth: 370,
                    }}
                  />
                </div>
              </div>
              <div className="banner-content">
                <span>
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  Chào mừng bạn
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                </span>
                <h1>Nhà hàng Tài Tử</h1>
                <p>
                  Nơi bạn không chỉ thưởng thức món ăn ngon, mà còn có thể thả
                  mình vào những giai điệu của dân ca tài tử.
                </p>
              </div>
              <div className="banner-right-img">
                <img
                  src="assets/images/icon/union-right.svg"
                  alt="union-right"
                />
                <div className="food-img">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/images/source/foods/tom-cang-xanh-hoang-kim.jpg"
                    alt="banner-img-5"
                    style={{
                      objectFit: "cover",
                      aspectRatio: 1,
                      maxWidth: 370,
                    }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-btn d-flex justify-content-between align-items-center">
          <div style={{ cursor: "pointer" }} className="prev-btn-1">
            <i className="bi bi-chevron-left" />
          </div>
          <div style={{ cursor: "pointer" }} className="next-btn-1">
            <i className="bi bi-chevron-right" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Banner1;
