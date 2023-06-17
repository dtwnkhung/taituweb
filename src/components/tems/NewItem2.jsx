import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function NewItem2() {
  const newItemslider = {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".next-btn-3",
      prevEl: ".prev-btn-3",
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
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="h2-reguler-item mb-120">
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
                Our New Item
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Restho New Item List</h2>
              <p>
                Various versions have evolved over the years, sometimes on
                purpose.
              </p>
            </div>
          </div>
        </div>
        <div className="row position-relative">
          <Swiper {...newItemslider} className="swiper h2-reguler-items-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="reguler-items-wrap">
                  <div className="item-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/h2-regular-items11.png"
                      alt=""
                    />
                    <div className="price">
                      <h5>$32</h5>
                    </div>
                  </div>
                  <div className="reguler-items-content">
                    <h3>
                      <Link href="/shop-details">Prawn Fried</Link>
                    </h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reguler-items-wrap">
                  <div className="item-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/h2-regular-items12.png"
                      alt=""
                    />
                    <div className="price">
                      <h5>$32</h5>
                    </div>
                  </div>
                  <div className="reguler-items-content">
                    <h3>
                      <Link href="/shop-details">Prawn with Noodles</Link>
                    </h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reguler-items-wrap">
                  <div className="item-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/h2-regular-items13.png"
                      alt=""
                    />
                    <div className="price">
                      <h5>$32</h5>
                    </div>
                  </div>
                  <div className="reguler-items-content">
                    <h3>
                      <Link href="/shop-details">Soup with Egg</Link>
                    </h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="slider-btn">
            <div className="prev-btn-3" style={{ cursor: "pointer" }}>
              <i className="bi bi-arrow-left-short" />
            </div>
            <div className="next-btn-3" style={{ cursor: "pointer" }}>
              <i className="bi bi-arrow-right-short" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewItem2;
