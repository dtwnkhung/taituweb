import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
function Testimonial1() {
  const imageSlider = {
    loop: true,
    spaceBetween: 22,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".next-btn-2",
      prevEl: ".prev-btn-2",
    },

    breakpoints: {
      280: {
        slidesPerView: 3,
        spaceBetween: 15,
        direction: "horizontal",
      },
      480: {
        slidesPerView: 3,
        direction: "horizontal",
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  };
  const contentSlider = {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    fadeEffect: {
      crossFade: true,
    },
  };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="testimonial-area1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 position-relative order-lg-1 order-2">
            <Swiper
              className="swiper testimonial-img-slider"
              {...imageSlider}
              onSwiper={setThumbsSwiper}
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-img">
                    <img
                      src="assets/images/bg/testi-autho-1.png"
                      alt="testi-autho-1"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-img">
                    <img
                      src="assets/images/bg/testi-autho-2.png"
                      alt="testi-autho-2"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-img">
                    <img
                      src="assets/images/bg/testi-autho-3.png"
                      alt="testi-autho-3"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <Swiper
              className="swiper testimonial-content-slider"
              {...contentSlider}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-content">
                    <div className="quoat">
                      <img
                        src="assets/images/icon/quate-icon.svg"
                        alt="quate-icon"
                      />
                    </div>
                    <div className="author-name-review">
                      <div className="author-name">
                        <h4 className="text-capitalize">nguyễn văn an</h4>
                        <span>Khách hàng</span>
                      </div>
                      <div className="review">
                        <ul>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Đây là đánh giá của khách hàng, tối đa sẽ hiển thị từ 3-4
                      dòng
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-content">
                    <div className="quoat">
                      <img
                        src="assets/images/icon/quate-icon.svg"
                        alt="quate-icon"
                      />
                    </div>
                    <div className="author-name-review">
                      <div className="author-name">
                        <h4 className="text-capitalize">trần văn nam</h4>
                        <span>Khách hàng</span>
                      </div>
                      <div className="review">
                        <ul>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Đây là đánh giá của khách hàng, tối đa sẽ hiển thị từ 3-4
                      dòng
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-content">
                    <div className="quoat">
                      <img
                        src="assets/images/icon/quate-icon.svg"
                        alt="quate-icon"
                      />
                    </div>
                    <div className="author-name-review">
                      <div className="author-name">
                        <h4 className="text-capitalize">lên thị lý</h4>
                        <span>Khách hàng</span>
                      </div>
                      <div className="review">
                        <ul>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Đây là đánh giá của khách hàng, tối đa sẽ hiển thị từ 3-4
                      dòng
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-5 order-lg-2 order-1">
            <div className="section-title">
              <span>
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Đánh giá
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Đánh giá của khách hàng </h2>
              <p>
                Những đánh giá của khách hàng luôn là ý kiến giúp chúng tôi phục
                vụ bạn tốt hơn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial1;
