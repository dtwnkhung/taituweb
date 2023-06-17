import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function TagBlogWidget() {
  const currentRoute = useRouter().pathname;
  return (
    <div className="single-widgets widget_egns_tag">
      <div className="widget-title">
        <h3>Tag:</h3>
      </div>
      <ul className="wp-block-tag-cloud">
        <li>
          <Link
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            Dinner
          </Link>
        </li>
        <li>
          <Link
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            Breakfast
          </Link>
        </li>
        <li>
          <Link
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            Dessert
          </Link>
        </li>
        <li>
          <Link
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            Beverage
          </Link>
        </li>
        <li>
          <Link
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            Lunch
          </Link>
        </li>
        <li>
          <Link
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            Food
          </Link>
        </li>
        <li>
          <Link
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            href={
              currentRoute === "/blog-standard"
                ? "/blog-standard"
                : currentRoute === "/shop"
                ? "/shop"
                : ""
            }
          >
            Sea Food
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TagBlogWidget;
