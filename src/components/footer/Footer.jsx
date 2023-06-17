import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-top ">
        <div className="container">
          <div className="row justify-content-center align-items-center gy-5">
            <div className="col-lg-4 col-md-6  order-md-1 order-2">
              <div className="footer-widget one">
                <div className="widget-title">
                  <h3>Liên kết</h3>
                </div>
                <div className="menu-container">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/about">
                        Giới thiệu
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/menu1">
                        Thực đơn
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">
                        Tin tức
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/contact">
                        Liên hệ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-md-2 order-1">
              <div className="footer-widgetfooter-widget social-area">
                <div className="footer-logo text-center">
                  <Link legacyBehavior href="/">
                    <img
                      src="/assets/images/source/logo.jpg"
                      className="img-fluid w-50"
                    />
                  </Link>
                </div>
                <div className="footer-social">
                  <ul className="social-link d-flex align-items-center justify-content-center">
                    <li>
                      <a
                        href="https://www.facebook.com/NhahangTaiTu"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-3">
              <div className="footer-widget one">
                <div className="widget-title">
                  <h3>Địa chỉ</h3>
                </div>
                <div className="contact-info">
                  <div className="single-contact">
                    <span className="title text-nowrap">Số điện thoại:</span>
                    <span className="content">
                      <a href="tel:0906 539 539">0906 539 539</a>
                    </span>
                  </div>
                  <div className="single-contact">
                    <span className="title text-nowrap">Email:</span>
                    <span className="content">
                      <a href="mailto:info@example.com">
                        nhahangtaitu@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="single-contact">
                    <span className="title text-nowrap">Địa chỉ:</span>
                    <span className="content">
                      <a href="https://goo.gl/maps/FcnKebZtEyHxv1cUA">
                        124 Nguyễn Chí Thanh, Q.Hải Châu, TP. Đà Nẵng
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <div className="container">
          <div className="row border-ttop g-2">
            <div className="col-md-12 text-center">
              <div className="copyright-area">
                <p>@Copyright by 2023, All Right Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
