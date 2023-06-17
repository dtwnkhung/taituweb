import Link from "next/link";
import React from "react";
import BlogComment from "../../../components/blog/BlogComment";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Layout from "../../../layout/Layout";
import { BaiViet } from "../../../lib/interfaces/bai-viet";
import { getBaiVietDetail } from "../../../lib/apis/bai-viet";

interface BlogDetailsPageProps {
  baiViet: BaiViet
}

function BlogDetailsPage(props: BlogDetailsPageProps) {

  return (
    <Layout>
      <Breadcrumb pageTitle="Đọc tin" pageName="Đọc tin" />
      <div className="blog-details-pages pt-120 mb-120" dangerouslySetInnerHTML={{ __html: props.baiViet?.ngonNgus?.[0]?.noiDung }}></div>
    </Layout>
  );
}

export default BlogDetailsPage;

export async function getServerSideProps(context) {
  try {
    const { id } = context.params;

    const baiViet = await getBaiVietDetail(id) ?? {};

    return {
      props: {
        baiViet
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