import Link from "next/link";
import React, { useState } from "react";
import menuList2Data from "../../data/foodMenuList2.json";
function MenuList2() {
  const [showMore, setShowMore] = useState(6);
  const handleShowmore = () => {
    setShowMore(showMore + showMore);
  };
  return (
    <div className="home2-food-items mb-120">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center mb-40 g-3">
          <div className="col-lg-8">
            <div className="section-title">
              <span>
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Menu List
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Find Your Food Item</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end mb-sm-25">
            <div
              className="primary-btn5 btn-md2"
              onClick={() => handleShowmore()}
              style={
                menuList2Data.length > showMore
                  ? { color: "#000", cursor: "pointer" }
                  : {
                      color: "#000",
                      background: "dark",
                      cursor: "no-drop",
                      opacity: ".5",
                    }
              }
              disabled={menuList2Data.length > showMore ? false : true}
            >
              <i className="bi bi-arrow-up-right-circle" />
              {menuList2Data.length > showMore ? "View More" : "Complete"}
            </div>
          </div>
        </div>
        <div className="row g-4">
          {menuList2Data.slice(0, showMore).map((value) => {
            const { id, image, price, title, discription, category } = value;
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
                      <a>Lanch</a>
                    </div>
                    <div className="pric-tag">
                      <span>${price}</span>
                    </div>
                  </div>
                  <div className="food-content">
                    <h3>
                      <Link href="/shop-details">{title}</Link>
                    </h3>
                    <p>{discription}</p>
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

export default MenuList2;
