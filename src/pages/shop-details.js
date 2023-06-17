import Link from "next/link";
import React, { useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function ShopDetails() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const relatedproduceSlider = {
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
    <Layout>
      <Breadcrumb pageName="Thông tin món ăn" pageTitle="Tên món ăn" />
      <div className="shop-details pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-5 gy-5">
            <div className="col-lg-6">
              <div>
                <img src="assets/images/source/15.jpg" className="img-fluid w-100" style={{ borderRadius: 20 }} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="prod-details-content">
                <h2>Tên món ăn</h2>
                <p>
                  Món cá kho tộ miền Tây sử dụng nguyên liệu chính là cá, kết hợp với thịt ba rọi, rau của quả ăn kèm và những gia vị đặc trưng khác. Để chế biến món này, người dân có thể sử dụng các loại cá khác nhau như cá lóc, cá rô, cá lăng, cá trê… Thịt ba rọi giúp cá béo và ngọt hơn, nước cốt dừa tăng vị ngọt thanh tự nhiên. Bạn có thể tham khảo định lượng dưới đây.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-items-area mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <h2 className="item-details-tt">Món ăn khác</h2>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...relatedproduceSlider}
              className="swiper related-item-sliders"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="food-items2-wrap">
                    <div className="food-img">
                      <img
                        className="img-fluid"
                        src="assets/images/source/16.jpg"
                        alt="h2-food-item-1"
                      />


                    </div>
                    <div className="food-content">

                      <h3>
                        <Link legacyBehavior href="/shop-details">
                          <a>Tên món ăn</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="food-items2-wrap">
                    <div className="food-img">
                      <img
                        className="img-fluid"
                        src="assets/images/source/17.jpg"
                        alt="h2-food-item-1"
                      />


                    </div>
                    <div className="food-content">

                      <h3>
                        <Link href="/shop-details" legacyBehavior>
                          <a>Tên món ăn</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="food-items2-wrap">
                    <div className="food-img">
                      <img
                        className="img-fluid"
                        src="assets/images/source/19.jpg"
                        alt="h2-food-item-1"
                      />


                    </div>
                    <div className="food-content">

                      <h3>
                        <Link href="/shop-details" legacyBehavior>
                          <a>Tên món ăn</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ShopDetails;
