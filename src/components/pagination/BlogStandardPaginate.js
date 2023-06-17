import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import standardData from "../../data/blog_standard_data.json";

// Example items, to simulate fetching from another resources.
const items = standardData;

function Items({ currentItems }) {
  return (
    <>
      {currentItems.map((item) => (
        <div key={item.id} className="news-wrap2">
          <div className="post-thum">
            <img className="img-fluid" src={item.image} alt="blog-st-01" />
            <div className="batch">
              <Link href="/blog-grid" legacyBehavior>
                <a>{item.date}</a>
              </Link>
            </div>
          </div>
          <div className="news-content">
            <div className="news-meta">
              <div className="publisher">
                <Link href="/blog-grid" legacyBehavior>
                  <a>
                    <img src="assets/images/icon/User.svg" alt="" /> By{" "}
                    {item.author}
                  </a>
                </Link>
              </div>
              <div className="comment">
                <Link legacyBehavior href="/blog-grid">
                  <a>
                    <img src="assets/images/icon/Comment.svg" alt="" /> Comment(
                    {item.numberOfComment})
                  </a>
                </Link>
              </div>
            </div>
            <h3>
              <Link href="/blog-details" legacyBehavior>
                <a>{item.title}</a>
              </Link>
            </h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<i className="bi bi-arrow-right" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={<i className="bi bi-arrow-left" />}
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
}
export default PaginatedItems;
