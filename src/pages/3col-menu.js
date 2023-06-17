import Link from "next/link";
import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import foodList from "../data/3columnMenu_data.json";
import Layout from "../layout/Layout";
function ColThreeMenu() {
  const [noOfCard, setnoofCard] = useState(6);
  console.log(noOfCard);
  const showLoadmore = () => {
    setnoofCard(noOfCard + 3);
  };
  return (
    <Layout>
      <Breadcrumb pageName="3 Columns Menu" pageTitle="3 Columns Menu" />
      <div className="3-columns-menu-area pt-120 mb-120">
        <div className="container">
          <div className="row justify-content-center g-4">
            {foodList.slice(0, noOfCard).map((food) => {
              const { id, image, price, title, description, menyType } = food;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="food-items2-wrap">
                    <div className="food-img">
                      <img
                        className="img-fluid"
                        src={image}
                        alt="h2-food-item-1"
                      />
                      <div className="batch">
                        <a>{menyType}</a>
                      </div>
                      <div className="pric-tag">
                        <span>${price}</span>
                      </div>
                    </div>
                    <div className="food-content">
                      <h3>
                        <Link href="/shop-details">{title}</Link>
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row pt-60">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="load-more-btn">
                <button
                  className="primary-btn3 btn-md2"
                  href="#"
                  style={
                    foodList.length > noOfCard
                      ? {
                          color: "#000",
                          cursor: "pointer",
                          padding: "10px 46px",
                        }
                      : {
                          color: "#bf9444",
                          background: "dark",
                          cursor: "no-drop",
                          opacity: ".5",
                          padding: "10px 46px",
                        }
                  }
                  disabled={foodList.length > noOfCard ? false : true}
                  onClick={() => showLoadmore()}
                >
                  {foodList.length > noOfCard ? "Load More" : "Complete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ColThreeMenu;
