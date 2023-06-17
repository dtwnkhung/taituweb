import Link from "next/link";
import React from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Experties1() {
  const expertiesSlider = {
    slidesPerView: "auto",
    spaceBetween: 37,
    // centeredSlides: true,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="cooking-expert-area mb-120 d-none">
      <div className="container">
        <div className="row d-flex justify-content-center mb-40">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span>
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Experties
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Cooking Experties</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...expertiesSlider} className="swiper expart-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="cooking-expart-wrap">
                  <div className="exparts-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/exparts1.png"
                      alt="exparts1"
                    />
                    <div className="social-area">
                      <div className="share-icon">
                        <i className="bx bx-share-alt" />
                      </div>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram-alt" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="exparts-content text-center">
                    <h3>
                      <Link href="/chef-details" legacyBehavior>
                        <a>Markoney Smith</a>
                      </Link>
                    </h3>
                    <p>Chef of Head</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="cooking-expart-wrap">
                  <div className="exparts-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/exparts6.png"
                      alt="exparts5"
                    />
                    <div className="social-area">
                      <div className="share-icon">
                        <i className="bx bx-share-alt" />
                      </div>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram-alt" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="exparts-content text-center">
                    <h3>
                      <Link href="/chef-details" legacyBehavior>
                        <a>Markoney Smith</a>
                      </Link>
                    </h3>
                    <p>Chef of Head</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="cooking-expart-wrap">
                  <div className="exparts-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/exparts3.png"
                      alt=""
                    />
                    <div className="social-area">
                      <div className="share-icon">
                        <i className="bx bx-share-alt" />
                      </div>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram-alt" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="exparts-content text-center">
                    <h3>
                      <Link href="/chef-details" legacyBehavior>
                        <a>Jackline Nory</a>
                      </Link>
                    </h3>
                    <p>Assistant Chef</p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Experties1;
