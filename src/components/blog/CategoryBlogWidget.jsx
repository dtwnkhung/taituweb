/** @format */

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function CategoryBlogWidget() {
  const currentRoute = useRouter().pathname;
  return (
    <div className="single-widgets widget_egns_categoris">
      <div className="widget-title">
        <h3>Category:</h3>
      </div>
      <ul className="wp-block-categoris-cloud">
        <li>
          <Link
            legacyBehavior
            href={
              currentRoute === "/shop"
                ? "/shop"
                : currentRoute === "/blog-standard"
                ? "/blog-standard"
                : "#"
            }
          >
            <a>
              <span className="tag-name">Food</span>{" "}
              <img
                className="img-fluid"
                src="assets/images/blog/category-divider.png"
                alt=""
              />{" "}
              <span className="qty">05</span>{" "}
            </a>
          </Link>
        </li>
        <li>
          <Link
            legacyBehavior
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            <a>
              <span className="tag-name">Modern Life</span>{" "}
              <img
                className="img-fluid"
                src="assets/images/blog/category-divider.png"
                alt=""
              />{" "}
              <span className="qty">03</span>{" "}
            </a>
          </Link>
        </li>
        <li>
          <Link
            legacyBehavior
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            <a>
              <span className="tag-name">Healthy</span>{" "}
              <img
                className="img-fluid"
                src="assets/images/blog/category-divider.png"
                alt=""
              />{" "}
              <span className="qty">02</span>{" "}
            </a>
          </Link>
        </li>
        <li>
          <Link
            legacyBehavior
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            <a>
              <span className="tag-name">Dessert</span>{" "}
              <img
                className="img-fluid"
                src="assets/images/blog/category-divider.png"
                alt=""
              />{" "}
              <span className="qty">05</span>{" "}
            </a>
          </Link>
        </li>
        <li>
          <Link
            legacyBehavior
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            <a>
              <span className="tag-name">Recipes</span>{" "}
              <img
                className="img-fluid"
                src="assets/images/blog/category-divider.png"
                alt=""
              />{" "}
              <span className="qty">06</span>{" "}
            </a>
          </Link>
        </li>
        <li>
          <Link
            legacyBehavior
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            <a>
              <span className="tag-name">Uncategoried</span>{" "}
              <img
                className="img-fluid"
                src="assets/images/blog/category-divider.png"
                alt=""
              />{" "}
              <span className="qty">01</span>{" "}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoryBlogWidget;
