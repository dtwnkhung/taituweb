import React from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Home3Testimonial() {
  const testimonialSlider = {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".next-btn-4",
      prevEl: ".prev-btn-4",
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
  return (
    <div className="home3-testimonial mb-120">
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
                Testimonials
                <img
                  className="right-vec"
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt=""
                />
              </span>
              <h2>Customer Feedback</h2>
            </div>
          </div>
        </div>
        <div className="row mb-50">
          <Swiper
            {...testimonialSlider}
            className="swiper home3-testimonial-slider"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-content">
                    <div className="quoat-icon">
                      <img src="assets/images/icon/Comma.svg" alt="Comma" />
                    </div>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything passage need to be sure
                      embarrass.
                    </p>
                  </div>
                  <div className="testi-author-area">
                    <div className="author-img">
                      <img
                        src="assets/images/bg/h3-testi-03.png"
                        alt="h3-testi-03"
                      />
                    </div>
                    <div className="name-review">
                      <h5>Mr. Jacobs Jack</h5>
                      <ul>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-content">
                    <div className="quoat-icon">
                      <img src="assets/images/icon/Comma.svg" alt="Comma" />
                    </div>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything passage need to be sure
                      embarrass.
                    </p>
                  </div>
                  <div className="testi-author-area">
                    <div className="author-img">
                      <img
                        src="assets/images/bg/h3-testi-01.png"
                        alt="h3-testi-03"
                      />
                    </div>
                    <div className="name-review">
                      <h5>Mr. Willium Jacobs</h5>
                      <ul>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-content">
                    <div className="quoat-icon">
                      <img src="assets/images/icon/Comma.svg" alt="Comma" />
                    </div>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything passage need to be sure
                      embarrass.
                    </p>
                  </div>
                  <div className="testi-author-area">
                    <div className="author-img">
                      <img
                        src="assets/images/bg/h3-testi-02.png"
                        alt="h3-testi-03"
                      />
                    </div>
                    <div className="name-review">
                      <h5>Mrs. Angelina Juli</h5>
                      <ul>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                        <li>
                          <img src="assets/images/icon/Star2.svg" alt="Star2" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="slider-btn">
              <div className="prev-btn-4">
                <i
                  className="bi bi-arrow-left-short"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="next-btn-4">
                <i
                  className="bi bi-arrow-right-short"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Testimonial;
