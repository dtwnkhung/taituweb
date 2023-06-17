import Link from "next/link";
import React from "react";
import ReservationForm from "../components/category/ReservationForm";
import Breadcrumb from "../components/common/Breadcrumb";
import Testimonial3 from "../components/testimonial/Testimonial3";
import categodyCardData from "../data/foodCategory_data.json";
import Layout from "../layout/Layout";
function Category() {
  const categoryCard = new Map([
    ...categodyCardData.map((categoryData) => [
      categoryData.category,
      categoryData.categorySlug,
    ]),
  ]);
  console.log(categoryCard);
  console.log(categoryCard.category);
  return (
    <Layout>
      <Breadcrumb pageName="Food Category" pageTitle="Food Category" />
      <div className="food-category-area pt-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="food-category-list">
                <h4 className="title">Category:</h4>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {[...categoryCard].map((key, index) => {
                    return (
                      <li key={key[1]} className="nav-item" role="presentation">
                        <button
                          className={
                            index === 0 ? "active nav-link" : "nav-link"
                          }
                          id="vegetarian-tab"
                          data-bs-toggle="tab"
                          data-bs-target={`#${key[1]}`}
                          type="button"
                          role="tab"
                          aria-controls={`#${key[1]}`}
                          aria-selected="false"
                        >
                          <span>{key[0]}</span>
                          <span>
                            <i className="bi bi-arrow-right" />
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content">
                {[...categoryCard].map((key, index) => {
                  return (
                    <div
                      key={key[1]}
                      className={
                        index === 0
                          ? "active show fade tab-pane"
                          : "tab-pane show fade"
                      }
                      id={`${key[1]}`}
                      role="tabpanel"
                      aria-labelledby="seafood-tab"
                    >
                      <div className="food-category-wrap">
                        <div className="row g-4">
                          <div className="divider" />
                          {categodyCardData
                            .filter((data) => data.categorySlug == key[1])
                            .map((value) => {
                              return (
                                <div
                                  key={value.id}
                                  className="col-lg-6 col-md-6"
                                >
                                  <div className="category-item">
                                    <div className="icon">
                                      <img
                                        className="img-fluid"
                                        src={value.image}
                                        alt=""
                                      />
                                    </div>
                                    <div className="category-content">
                                      <h4>
                                        <Link
                                          legacyBehavior
                                          href="/shop-details"
                                        >
                                          <a>{value.title}</a>
                                        </Link>
                                      </h4>
                                      <p>{value.description}</p>
                                      <div className="price">
                                        <h5>
                                          ${value.price} <span>Only</span>
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReservationForm />
      <Testimonial3 />
    </Layout>
  );
}

export default Category;
