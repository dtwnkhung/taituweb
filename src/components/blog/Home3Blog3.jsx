import Link from "next/link";
import React from "react";

function Home3Blog3() {
  return (
    <div className="home3-blog-area mb-120">
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
                Recent Blog
                <img
                  className="right-vec"
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt=""
                />
              </span>
              <h2>Our Recently News &amp; Events</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-6 col-xl-5 col-lg-9">
            <div className="h3-blog-wrap-1">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/h3-blog-1.png"
                  alt=""
                />
                <div className="batch">
                  <Link legacyBehavior href="/blog-grid">
                    <a>22 June,2022</a>
                  </Link>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul>
                    <li>
                      <Link href="/blog-grid" legacyBehavior>
                        <a>
                          <img src="assets/images/icon/User2.svg" alt="User2" />
                          By Admin
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img
                            src="assets/images/icon/Comment2.svg"
                            alt="Comment2"
                          />
                          Comment(10)
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h3>
                  <Link legacyBehavior href="/blog-details">
                    <a>Food is bring to happy &amp; healthy life</a>
                  </Link>
                </h3>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
                <div className="continue-btn">
                  <Link href="/blog-details" legacyBehavior>
                    <a>
                      Continue Reading <i className="bi bi-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-7 col-lg-12">
            <div className="row">
              <div className="col-xxl-12 col-xl-6 col-lg-6 col-sm-6 ">
                <div className="blog-card-alfa one">
                  <div className="blog-content">
                    <h3>
                      <Link legacyBehavior href="/blog-details">
                        <a>Food is everywhere, Food is enjoyable zone.</a>
                      </Link>
                    </h3>
                    <p>Many desktop publishing packages web. </p>
                    <div className="continue-btn">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Continue Reading <i className="bi bi-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-img">
                    <img
                      src="assets/images/blog/h3-blog-2.png"
                      alt="h3-blog-2"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-6 col-lg-6 col-sm-6 ">
                <div className="blog-card-alfa">
                  <div className="blog-img">
                    <img
                      src="assets/images/blog/h3-blog-3.png"
                      alt="h3-blog-3"
                    />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link legacyBehavior href="/blog-details">
                        <a>Eat Tasty Food, Food is enjoyable zone.</a>
                      </Link>
                    </h3>
                    <p>Many desktop publishing packages editors.</p>
                    <div className="continue-btn">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Continue Reading <i className="bi bi-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="view-btn">
                  <Link legacyBehavior href="/blog-grid">
                    <a className="primary-btn7 btn-md2">
                      <i className="bi bi-arrow-up-right-circle" /> View More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Blog3;
