import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function PopularItem3() {
  const popularItemsSlider = {
    slidesPerView: "auto",
    spaceBetween: 55,
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
    <div className="populer-food-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="counter-area">
              <div className="row justify-content-center g-md-4 gy-5">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="counter-single">
                    <div className="counter-icon">
                      <img src="assets/images/icon/chef.svg" alt="image" />
                    </div>
                    <div className="coundown">
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="odometer">
                          <CountUp end={100} />
                        </h3>
                      </div>
                      <p>Professional Chef</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="counter-single">
                    <div className="counter-icon">
                      <img src="assets/images/icon/food.svg" alt="image" />
                    </div>
                    <div className="coundown">
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="odometer">
                          <CountUp end={180} />
                        </h3>
                      </div>
                      <p>Food Category</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="counter-single">
                    <div className="counter-icon">
                      <img src="assets/images/icon/customer.svg" alt="image" />
                    </div>
                    <div className="coundown">
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="odometer">
                          <CountUp end={30} />K
                        </h3>
                      </div>
                      <p>Customer Satisfy</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="counter-single">
                    <div className="counter-icon">
                      <img src="assets/images/icon/award.svg" alt="image" />
                    </div>
                    <div className="coundown">
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="odometer">
                          <CountUp end={150} />
                        </h3>
                      </div>
                      <p>Award Wining</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                Popular Item
                <img
                  className="right-vec"
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt=""
                />
              </span>
              <h2>Popular Food Item</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center position-relative">
          <Swiper
            {...popularItemsSlider}
            className="swiper h3-popular-food-slider"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="h3-popular-food-card">
                  <div className="food-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/h3-popular-items-1.png"
                      alt=""
                    />
                    <div className="food-price">
                      <span>$49</span>
                    </div>
                  </div>
                  <div className="food-content">
                    <div className="food-cetagory">
                      <a>Meat &amp; Poultry</a>
                    </div>
                    <h3>
                      <Link legacyBehavior href="/shop-details">
                        Chicken Fry
                      </Link>
                    </h3>
                    <p>
                      It’s so tasty and delicious for creating our customer, get
                      This.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="h3-popular-food-card">
                  <div className="food-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/h3-popular-items-2.png"
                      alt=""
                    />
                    <div className="food-price">
                      <span>$39</span>
                    </div>
                  </div>
                  <div className="food-content">
                    <div className="food-cetagory">
                      <a>Sea-Fish Food</a>
                    </div>
                    <h3>
                      <Link legacyBehavior href="/shop-details">
                        <a>Sea-Fish Food</a>
                      </Link>
                    </h3>
                    <p>
                      It’s so tasty and delicious for creating our customer, get
                      This.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="h3-popular-food-card">
                  <div className="food-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/h3-popular-items-3.png"
                      alt=""
                    />
                    <div className="food-price">
                      <span>$29</span>
                    </div>
                  </div>
                  <div className="food-content">
                    <div className="food-cetagory">
                      <a>Pasta Salad</a>
                    </div>
                    <h3>
                      <Link legacyBehavior href="/shop-details">
                        <a>Vegetable</a>
                      </Link>
                    </h3>
                    <p>
                      It’s so tasty and delicious for creating our customer, get
                      This.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="slider-btn">
            <div className="prev-btn-3">
              <i
                className="bi bi-arrow-left-short"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="next-btn-3">
              <i
                className="bi bi-arrow-right-short"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularItem3;
