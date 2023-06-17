import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import Breadcrumb from "../components/common/Breadcrumb";
import gallaryData from "../data/gallery2.json";
import Layout from "../layout/Layout";

function GalleryTwoColumnLayout() {
  const [items, setItems] = useState(gallaryData);
  const [CategoryActiveSlug, setCategoryActiveSlug] = useState(null);

  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const filterItem = (catagoryItem) => {
    setCategoryActiveSlug(catagoryItem);
    const updateItems = gallaryData.filter((curentElemet) => {
      return curentElemet.categorySlug === catagoryItem;
    });
    setItems(updateItems);
  };
  const setAllItems = (allItems) => {
    setCategoryActiveSlug(allItems);
    return setItems(gallaryData);
  };

  const categoryCard = new Map([
    ...gallaryData.map((categoryData) => [
      categoryData.category,
      categoryData.categorySlug,
    ]),
  ]);

  return (
    <Layout>
      <Breadcrumb pageName="2 Columns Gallery" pageTitle="2 Columns Gallery" />
      <div className="columns2-gallery-area pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--70">
              <div className="filters filter-button-group">
                <ul className="d-flex justify-content-center flex-wrap">
                  <li
                    onClick={() => setAllItems("all")}
                    className={
                      CategoryActiveSlug == "all" || CategoryActiveSlug == null
                        ? "active"
                        : ""
                    }
                    data-filter="*"
                  >
                    All
                  </li>
                  {[...categoryCard].map((key) => {
                    return (
                      <li
                        key={key[1]}
                        onClick={() => filterItem(`${key[1]}`)}
                        className={key[1] == CategoryActiveSlug ? "active" : ""}
                      >
                        {key[0]}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="row grid g-4">
            {items.map((element, index) => {
              return (
                <div
                  key={element.id}
                  className="col-md-6 col-sm-12 grid-item food"
                >
                  <div className="gallery2-img">
                    <div className="gallery-img">
                      <img
                        className="img-fluid"
                        src={element.imageSmalll}
                        alt=""
                      />
                      <div className="overlay">
                        <div className="zoom-icon">
                          <img
                            style={{ cursor: "pointer" }}
                            src="assets/images/icon/Zoom.svg"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: index,
                              })
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={items.map(function (elem) {
          return { src: elem.imageBig };
        })}
      />
    </Layout>
  );
}

export default GalleryTwoColumnLayout;
