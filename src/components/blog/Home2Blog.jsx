import Link from "next/link";
import React from "react";

function Home2Blog() {
  return (
    <div className="h2-blog-area mb-120">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center mb-40">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span>
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Our Blog
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Our Latest Blog</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="h2-blog-card">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-blog1.png"
                  alt="h2-blog1"
                />
                <div className="batch">
                  <Link href="/blog-grid" legacyBehavior>
                    <a>
                      <span>17</span>
                      <br />
                      Apr
                    </a>
                  </Link>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link legacyBehavior href="/blog-grid">
                    By Clone Watson
                  </Link>
                </div>
                <h3>
                  <Link legacyBehavior href="/blog-details">
                    To Make Good Health Take Nutrition Food.
                  </Link>
                </h3>
                <div className="read-more-btn">
                  <Link href="/blog-details" legacyBehavior>
                    <a>
                      <span>Read More</span>
                      <span>
                        <i className="bi bi-arrow-right" />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="h2-blog-card">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-blog2.png"
                  alt="h2-blog1"
                />
                <div className="batch">
                  <Link href="/blog-grid" legacyBehavior>
                    <a>
                      <span>18</span>
                      <br />
                      Apr
                    </a>
                  </Link>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link legacyBehavior href="/blog-grid">
                    By Hilary Watson
                  </Link>
                </div>
                <h3>
                  <Link legacyBehavior href="/blog-details">
                    Eat at Some Nutition Food &amp; Happy Leadlife.
                  </Link>
                </h3>
                <div className="read-more-btn">
                  <Link href="/blog-details" legacyBehavior>
                    <a>
                      <span>Read More</span>
                      <span>
                        <i className="bi bi-arrow-right" />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="h2-blog-card">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-blog3.png"
                  alt="h2-blog1"
                />
                <div className="batch">
                  <Link legacyBehavior href="/blog-grid">
                    <a>
                      <span>17</span>
                      <br />
                      Apr
                    </a>
                  </Link>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/blog-grid" legacyBehavior>
                    <a>By Clone Watson</a>
                  </Link>
                </div>
                <h3>
                  <Link href="/blog-details" legacyBehavior>
                    <a>Esay To Make Some Special Food In Home.</a>
                  </Link>
                </h3>
                <div className="read-more-btn">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <span>Read More</span>
                      <span>
                        <i className="bi bi-arrow-right" />
                      </span>
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

export default Home2Blog;
