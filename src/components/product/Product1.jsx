import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Product1() {
  const slider = {
    slidesPerView: "auto",
    spaceBetween: 25,
    // centeredSlides: true,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 1,
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
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="h2-product-area pt-120 pb-120">
      <Swiper {...slider} className="swiper h2-product-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="product-wrap">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-product-1.png"
                  alt="h2-product-1"
                />
              </div>
              <div className="product-content">
                <h4>
                  <Link legacyBehavior href="/category">
                    <a>Sea Food</a>
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet consectet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="product-wrap">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-product-2.png"
                  alt="h2-product-2"
                />
              </div>
              <div className="product-content">
                <h4>
                  <Link legacyBehavior href="/category">
                    <a>Meat Masala</a>
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet consectet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="product-wrap">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-product-3.png"
                  alt="h2-product-3"
                />
              </div>
              <div className="product-content">
                <h4>
                  <Link legacyBehavior href="/category">
                    <a>Vegetarian</a>
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet consectet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="product-wrap">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-product-4.png"
                  alt="h2-product-4"
                />
              </div>
              <div className="product-content">
                <h4>
                  <Link legacyBehavior href="/category">
                    <a>Thai Soup</a>
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet consectet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="product-wrap">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-product-1.png"
                  alt="h2-product-1"
                />
              </div>
              <div className="product-content">
                <h4>
                  <Link legacyBehavior href="/category">
                    <a>Sea Food</a>
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet consectet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="product-wrap">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-product-2.png"
                  alt="h2-product-2"
                />
              </div>
              <div className="product-content">
                <h4>
                  <Link legacyBehavior href="/category">
                    <a>Meat Masala</a>
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet consectet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="product-wrap">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-product-3.png"
                  alt="h2-product-3"
                />
              </div>
              <div className="product-content">
                <h4>
                  <Link legacyBehavior href="/category">
                    <a>Vegetarian</a>
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet consectet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="product-wrap">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-product-4.png"
                  alt="h2-product-4"
                />
              </div>
              <div className="product-content">
                <h4>
                  <Link legacyBehavior href="/category">
                    <a>Thai Soup</a>
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet consectet.</p>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default Product1;
