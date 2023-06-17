import React from "react";

function BlogComment() {
  return (
    <div className="comments-area">
      <div className="number-of-comment">
        <h3>Comments(03) :</h3>
      </div>
      <div className="comment-list-area mb-60">
        <ul className="comment-list">
          <li>
            <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
              <div className="comment-image">
                <img src="assets/images/blog/comment-img-1.png" alt="image" />
              </div>
              <div className="comment-content">
                <div className="c-header d-flex align-items-center">
                  <div className="comment-meta">
                    <h5 className="mb-0">
                      <a href="#">Rocky Mike ,</a>
                    </h5>
                    <div className="c-date">06 july,2022</div>
                  </div>
                  <div className="replay-btn">
                    <a href="#">
                      <i className="bi bi-reply" />
                      Reply
                    </a>
                  </div>
                </div>
                <div className="c-body">
                  <p>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account.{" "}
                  </p>
                </div>
              </div>
            </div>
            <ul className="comment-reply">
              <li>
                <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                  <div className="comment-image">
                    <img
                      src="assets/images/blog/comment-img-2.png"
                      alt="image"
                    />
                  </div>
                  <div className="comment-content">
                    <div className="c-header d-flex align-items-center">
                      <div className="comment-meta">
                        <h5 className="mb-0">
                          <a href="#">Mily Jaman ,</a>
                        </h5>
                        <div className="c-date">09 july,2022</div>
                      </div>
                      <div className="replay-btn">
                        <a href="#">
                          <i className="bi bi-reply" />
                          Reply
                        </a>
                      </div>
                    </div>
                    <div className="c-body">
                      <p>
                        I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
              <div className="comment-image">
                <img src="assets/images/blog/comment-img-3.png" alt="image" />
              </div>
              <div className="comment-content">
                <div className="c-header d-flex align-items-center">
                  <div className="comment-meta">
                    <h5 className="mb-0">
                      <a href="#">Rony Jhon ,</a>
                    </h5>
                    <div className="c-date">07 july,2022</div>
                  </div>
                  <div className="replay-btn">
                    <a href="#">
                      <i className="bi bi-reply" />
                      Reply
                    </a>
                  </div>
                </div>
                <div className="c-body">
                  <p>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account.{" "}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="comment-form">
        <div className="number-of-comment">
          <h3>Leave A Reply</h3>
        </div>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-inner mb-30">
                <input type="text" placeholder="Name*" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-inner mb-30">
                <input type="email" placeholder="Email*" required />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-inner mb-10">
                <textarea placeholder="Message..." defaultValue={""} />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-inner2 mb-30">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  defaultValue="Bike"
                />
                <label htmlFor="vehicle1">
                  Please save my name, email for the next time when I comment.{" "}
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-inner two">
                <button className="primary-btn btn-lg" type="submit">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BlogComment;
