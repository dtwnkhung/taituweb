import Link from "next/link";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Layout from "../../../layout/Layout";
import { getBaiVietPage } from "../../../lib/apis/bai-viet";
import { PageData } from "../../../lib/apis/instance";
import { BaiViet } from "../../../lib/interfaces/bai-viet";
import { LongToDateLocal } from "../../../lib/services/datetime";

interface BlogGirdProps {
  baiViets?: PageData<BaiViet>,
  sizePage?: number,
  pageNumber?: number,
  error?: string
}

function BlogGirdPage(props: BlogGirdProps) {

  return (
    <>
      <Layout>
        <Breadcrumb pageName="Tin tức" pageTitle="Tin tức" backgroundUrl="/assets/images/source/phong_15.JPG" />
        <div className="recent-post-area pt-120 mb-120">
          <div className="container">
            <div className="row gy-5 justify-content-center">
              <PaginatedItems sizePage={props.sizePage} pageData={props.baiViets} pageNumber={props.pageNumber} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BlogGirdPage;

function Items({ datas }: { datas: BaiViet[] }) {

  return (
    <>
      {datas.map((item) => (
        <div key={item.id} className="col-lg-4 col-md-6 col-sm-10">
          <div className="news-wrap">
            <div className="post-thum">
              <img
                className="img-fluid w-100"
                src={item.hinhAnhs?.[0]?.taiNguyenTrichDan ?? "/assets/images/source/phong_19.JPG"} alt=""
                style={{ aspectRatio: 4 / 3, objectFit: "cover" }}
              />
              <div className="batch">
                <Link legacyBehavior href="/blog">
                  <a>{LongToDateLocal(item.taoLuc)}</a>
                </Link>
              </div>
            </div>
            <div className="news-content">
              <div className="news-meta d-none">
                <div className="publisher">
                  <Link legacyBehavior href="/blog">
                    <a>
                      <img src="/assets/images/icon/User.svg" alt="" /> By{" "}
                      {/* {item.author} */}
                    </a>
                  </Link>
                </div>
                <div className="comment">
                  <Link legacyBehavior href="/blog">
                    <a>
                      <img src="/assets/images/icon/Comment.svg" alt="" />{" "}
                      {/* Comment({item.counMassage}) */}
                    </a>
                  </Link>
                </div>
              </div>
              <h3>
                <Link legacyBehavior href={`/blog/detail/${item.id}`}>
                  <a>{item.ngonNgus?.[0]?.trichDan}</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

type PaginatedItemsProps = {
  sizePage: number,
  pageNumber: number,
  pageData: PageData<BaiViet>
}

function PaginatedItems(props: PaginatedItemsProps) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  // const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  // const endOffset = itemOffset + props.sizePage;
  const pageCount = Math.ceil(props.pageData?.totalRow ?? 0 / props.sizePage ?? 1);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // const newOffset = (event.selected * props.sizePage) % props.pageData.totalRow;
    // setItemOffset(newOffset);
  };

  return (
    <>
      <Items datas={props.pageData?.data ?? []} />
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

export async function getServerSideProps(context) {

  try {
    const { pageNumber = [0] } = context.params;
    const sizePage = 6;

    const baiViets = await getBaiVietPage(pageNumber?.[0] ?? 0, sizePage) ?? {};

    return {
      props: {
        sizePage,
        pageNumber,
        baiViets
      },
    }
  } catch (error) {

    return {
      props: {
        error: "LỖI"
      }
    }
  }
}