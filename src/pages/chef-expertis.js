import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import chefDaata from "../data/chef_expertis.json";
import Layout from "../layout/Layout";
function ChefExpertis() {
  return (
    <Layout>
      <Breadcrumb pageName="chef-expertis" pageTitle="Chef-Expertis" />
      <div className="chef-experties-area pt-120 mb-120">
        <div className="container">
          <div className="row justify-content-center g-lg-5 gy-5">
            {chefDaata.map((item) => {
              const { id, name, image, designation } = item;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                  <div className="cooking-expart-wrap">
                    <div className="exparts-img">
                      <img className="img-fluid" src={image} alt="" />
                      <div className="social-area">
                        <div className="share-icon">
                          <i className="bx bx-share-alt" />
                        </div>
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram-alt" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="exparts-content text-center">
                      <h3>
                        <Link href="/chef-details">{name}</Link>
                      </h3>
                      <p>{designation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ChefExpertis;
