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
function RecentPostBlogWidget() {
  const recentPostSlider = {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 22,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
    pagination: false,
  };
  return (
    <div className="single-widgets widget_egns_recent_post">
      <div className="widget-title">
        <h3>Recent Post: </h3>
        <div className="slder-btn">
          <div className="prev-btn">
            <i className="bi bi-chevron-left" />
          </div>
          <div className="next-btn">
            <i className="bi bi-chevron-right" />
          </div>
        </div>
      </div>
      <div className="recent-post-wraper">
        <Swiper {...recentPostSlider} className="swiper recent-post-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="news-wrap">
                <div className="post-thum">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/recent-post-img-1.png"
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <div className="publisher">
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/User.svg" alt="" /> By
                          Admin
                        </a>
                      </Link>
                    </div>
                    <div className="comment">
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/Comment.svg" alt="" />{" "}
                          Comment(10)
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h3>
                    <Link legacyBehavior href="/blog-details">
                      Cooking Delicious Food Our Experties Chef.
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="news-wrap">
                <div className="post-thum">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/recent-post-img-2.png"
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <div className="publisher">
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/User.svg" alt="" /> By
                          Admin
                        </a>
                      </Link>
                    </div>
                    <div className="comment">
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/Comment.svg" alt="" />{" "}
                          Comment(10)
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h3>
                    <Link legacyBehavior href="/blog-details">
                      <a>Esay To Make Some Special Food In Home.</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default RecentPostBlogWidget;
