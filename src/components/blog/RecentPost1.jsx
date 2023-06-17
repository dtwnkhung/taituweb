import Link from "next/link";
import React from "react";
import blogData from "../../data/blog_gird_data.json";
function RecentPost1() {
  return (
    <div className="recent-post-area mb-120 d-none">
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
                Tin tức
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Danh sách tin tức</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {blogData.slice(0, 3).map((item) => {
            const { id, title, author, counMassage, image, date } = item;
            return (
              <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                <div className="news-wrap">
                  <div className="post-thum">
                    <img className="img-fluid" src={image} alt="" />
                    <div className="batch">
                      <Link className="primary-btn " href="/blog-grid">
                        {date}
                      </Link>
                    </div>
                  </div>
                  <div className="news-content">
                    <div className="news-meta">
                      <div className="publisher">
                        <Link href="/blog-grid">
                          <img src="assets/images/icon/User.svg" alt="" /> By{" "}
                          {author}
                        </Link>
                      </div>
                      <div className="comment">
                        <Link href="/blog-grid">
                          <img src="assets/images/icon/Comment.svg" alt="" />{" "}
                          Comment({counMassage})
                        </Link>
                      </div>
                    </div>
                    <h3>
                      <Link href="/blog-details">{title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RecentPost1;
