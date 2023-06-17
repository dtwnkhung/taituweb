import React from "react";
import CountUp from "react-countup";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

function ChefDetails() {
  return (
    <Layout>
      <Breadcrumb pageName="Chef Details" pageTitle="Chef Details" />
      <div className="chef-details-area pt-120 mb-120">
        <div className="container">
          <div className="row align-items-center g-lg-5 gy-5 mb-60">
            <div className="col-lg-6">
              <div className="chef-introduction">
                <div className="chef-name">
                  <h3>Hello, I’m</h3>
                  <h2>Mr. Willium Jhon</h2>
                </div>
                <div className="about-chef">
                  <h3>About Me:</h3>
                  <p>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness.
                  </p>
                  <div className="chef-contact">
                    <ul>
                      <li>
                        <strong>Department:</strong> Senior Chef.
                      </li>
                      <li>
                        <strong>Experience:</strong> 15 Years.
                      </li>
                      <li>
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+990-8879756">+990-8879756.</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:info@example.com"> info@example.com</a>
                      </li>
                      <li>
                        <strong>Fax:</strong>{" "}
                        <a href="fax:+00788-75578">+00788-75578</a>
                      </li>
                    </ul>
                  </div>
                  <div className="social-area">
                    <h3>Follow Me:</h3>
                    <ul className="social-link d-flex align-items-center justify-content-center">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="divider">
                    <img
                      src="assets/images/bg/chef-dt-shape.png"
                      alt="chef-dt-shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="chef-dt-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/chef-dt-1.png"
                  alt="chef-dt-1"
                />
              </div>
            </div>
          </div>
          <div className="row g-lg-5 gy-5">
            <div className="col-lg-6">
              <div className="chef-skills">
                <h3>My Skills:</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                </p>
                <ul className="skills-bar-container">
                  <li>
                    <div className="progressbar-title">
                      <h4>Sea Food</h4>
                      <span className="percent" id="html-pourcent">
                        90%
                      </span>
                    </div>
                    <div className="bar-container">
                      <span className="progressbar" id="progress-html" />
                      <span className="round-s" id="progress-round1" />
                    </div>
                  </li>
                  <li>
                    <div className="progressbar-title">
                      <h4>Soup Item</h4>
                      <span className="percent" id="css-pourcent">
                        80%
                      </span>
                    </div>
                    <div className="bar-container">
                      <span className="progressbar" id="progress-css" />
                      <span className="round-s" id="progress-round2" />
                    </div>
                  </li>
                  <li>
                    <div className="progressbar-title">
                      <h4>Mutton Bireyani</h4>
                      <span className="percent" id="javascript-pourcent">
                        93%
                      </span>
                    </div>
                    <div className="bar-container">
                      <span className="progressbar" id="progress-javascript" />
                      <span className="round-s" id="progress-round3" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="chef-dt-counter">
                <div className="row justify-content-center g-4">
                  <div className="col-xxl-6 col-lg-12 col-md-6 col-sm-6 col-12">
                    <div className="counter-single">
                      <div className="counter-icon">
                        <img src="assets/images/icon/chef.svg" alt="image" />
                      </div>
                      <div className="coundown">
                        <div className="d-flex align-items-center gap-2">
                          <h3 className="odometer">
                            <CountUp end={100} />
                          </h3>
                          <span>+</span>
                        </div>
                        <p>Years Of Expert</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-lg-12 col-md-6 col-sm-6 col-12">
                    <div className="counter-single">
                      <div className="counter-icon">
                        <img src="assets/images/icon/award.svg" alt="image" />
                      </div>
                      <div className="coundown">
                        <div className="d-flex align-items-center gap-2">
                          <h3 className="odometer">
                            <CountUp end={100} />
                          </h3>
                          <span>+</span>
                        </div>
                        <p>Award Wining</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-lg-12 col-md-6 col-sm-6 col-12">
                    <div className="counter-single">
                      <div className="counter-icon">
                        <img
                          src="assets/images/icon/customer.svg"
                          alt="image"
                        />
                      </div>
                      <div className="coundown">
                        <div className="d-flex align-items-center gap-2">
                          <h3 className="odometer">
                            <CountUp end={100} />
                          </h3>
                          <span>+</span>
                        </div>
                        <p>Client Rating</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-lg-12 col-md-6 col-sm-6 col-12">
                    <div className="counter-single">
                      <div className="counter-icon">
                        <img src="assets/images/icon/food.svg" alt="image" />
                      </div>
                      <div className="coundown">
                        <div className="d-flex align-items-center gap-2">
                          <h3 className="odometer">
                            <CountUp end={100} />
                          </h3>
                          <span>+</span>
                        </div>
                        <p>Golden Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ChefDetails;
