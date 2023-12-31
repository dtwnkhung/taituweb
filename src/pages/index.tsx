import React from "react";
import Head from "next/head";
import About1 from "../components/about/About1";
import Banner1 from "../components/banner/Banner1";
import BestOffer1 from "../components/bestOffer/BestOffer1";
import RecentPost1 from "../components/blog/RecentPost1";
import Preloader from "../components/common/Prelaoder";
import Experties1 from "../components/cookingExperties/Experties1";
import Footer from "../components/footer/Footer";
import Gallery1 from "../components/gallary/Gallery1";
import Header from "../components/header/Header";
import Topbar from "../components/header/Topbar";
import MenuList1 from "../components/MenuList/MenuList1";
import PopularItem1 from "../components/popularItem/PopularItem1";
import NewItem1 from "../components/tems/NewItem1";
import TesimonialVideo from "../components/testimonial/TesimonialVideo";
import Testimonial1 from "../components/testimonial/Testimonial1";
import { middleware } from "../middleware";



function Home() {
  return (
    <>
      <Head>
        <title>Tài Tử - Nhà hàng Tài Tử</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/images/logo-loading.jpg" />
      </Head>
      {/* <Preloader /> */}
      <Topbar />
      <Header />
      <Banner1 />
      <About1 />
      <NewItem1 />
      <PopularItem1 />
      <MenuList1 />
      <BestOffer1 />
      {/* <Testimonial1 />
      <TesimonialVideo /> */}
      {/* <Experties1 /> */}
      <Gallery1 />
      <RecentPost1 />
      <Footer />
    </>
  );
}
export default Home;

export const getServerSideProps = middleware(async (context) => {
  return {
    props: {}
  }
})