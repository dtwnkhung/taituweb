import React from "react";
import About1 from "../components/about/About1";
import AboutCounter from "../components/about/AboutCounter";
import Breadcrumb from "../components/common/Breadcrumb";
import Experties1 from "../components/cookingExperties/Experties1";
import Gallery1 from "../components/gallary/Gallery1";
import TesimonialVideo from "../components/testimonial/TesimonialVideo";
import Testimonial1 from "../components/testimonial/Testimonial1";
import Layout from "../layout/Layout";
import { AppContext } from "next/app";
import { getGioiThieu } from "../lib/apis/gioi-thieu";
import { GioiThieu } from "../lib/interfaces/gioi-thieu";
import { middleware } from "../middleware";


interface AboutProps {
  gioiThieus?: GioiThieu[],
  error?: string
}

function About(props: AboutProps) {

  return (
    <Layout>
      <Breadcrumb pageName="Về chúng tôi" pageTitle="Về chúng tôi" backgroundUrl={""} />
      {/* <About1 /> */}
      {/* <AboutCounter /> */}
      {/* <Testimonial1 /> */}
      {/* <TesimonialVideo />
      <Experties1 /> */}
      {props.gioiThieus?.map(gioiThieu => {

        return <div key={gioiThieu.id} dangerouslySetInnerHTML={{ __html: gioiThieu.ngonNgus[0]?.noiDung }}></div>
      })}
      <Gallery1 />
    </Layout>
  );
}

export const getServerSideProps = middleware(async (context) => {
  try {
    const gioiThieus = await getGioiThieu();

    if (gioiThieus.length == 0) {
      gioiThieus.push({
        id: "GT-1",
        ngonNgus: [
          {
            ten: 'Nhà hàng Tài Tử',
            noiDung: `<div class="home1-introduction-area pt-120 mb-120"><div class="container-lg container-fluid"><div class="row mb-40"><div class="col-lg-12"><div class="section-title"><span><img class="left-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec">Về chúng tôi<img class="right-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec"></span><h2>Nhà hàng Tài Tử</h2></div></div></div></div><div class="container-fluid"><div class="row gy-5"><div class="col-lg-4"><div class="into-left-img magnetic-wrap"><img class="img-fluid magnetic-item" src="assets/images/source/phong_3.jpg" alt="h1-intro-left-img"></div></div><div class="col-lg-8"><div class="our-mission mb-2"><div class="icon px-3"><img src="assets/images/icon/mission.svg" alt=""><h4>Giá trị cốt lõi</h4></div><div class="description"><p>Thế kỷ 21, thế kỷ của sự dịch chuyển, trải nghiệm và giao thoa Văn hóa, thực khách được tiếp cận nhiều hơn các nền Ẩm thực Đông-Tây, Âu- Á. Nhưng các giá trị truyền thống Ẩm thực Việt chưa bao giờ bị quên lãng. Lĩnh hội những kinh nghiệm và sự tìm tòi, Nhà hàng Tài Tử luôn tự hào là nơi kết tinh và thăng hoa tinh thần ẩm thực Nam Bộ cùng nghệ thuật đờn ca tài tử. Nấu ăn  không đơn giản chỉ là chế biến, nấu ăn còn được nâng tầm thành nghệ thuật mà Nhà hàng chúng tôi trao đến qúy khách. Thể hiện giá trị văn hóa ẩm thực Nam Bộ tinh túy nhất, nhà hàng Tài Tử hân hạnh phục vụ những cực phẩm đặ sản và hải sải cao cấp, các món ăn truyền thống Nam Bộ được chế biến cầu kỳ từ nguồn  nguyên vật liệu chọn lọc bới các đầu bếp thượng hạng trong nghề.</p></div></div><div class="intro-right"><div class="features-author"><div class="intro-features"><ul><li><i class="bi bi-check-circle"></i>Thực đơn đa dạng món ăn bổ dưỡng, hấp dẫn</li><li><i class="bi bi-check-circle"></i>Chất lượng hoàn hảo từ món ăn đến phong cách phục vụ</li></ul><ul><li><i class="bi bi-check-circle"></i>Không gian tuyệt vời tận hưởng tinh hoa Ẩm thực Nam Bộ</li><li><i class="bi bi-check-circle"></i>Thưởng thức nghệ thuật đờn ca tài tử đặc sắc</li></ul></div><div class="author-area"><div class="author-content"><p>“Với khát vọng đưa văn hóa quê hương mình đến với mọi miền đất nước, chúng tôi những người con Nam Bộ mong muốn khách hàng cảm nhận được tất cả những hương vị quê mình vừa là lòng tự hào quê hương vừa là mang đến cho khách hàng một văn hóa ẩm thực đậm chất người dân Nam bộ của chúng tôi. ” </p></div><div class="author-img-name"><div class="author-img"><img src="assets/images/bg/h1-intro-author.png" alt=""></div><div class="author-name"><h4>Ông Phú</h4><span>Đại diện nhà hàng</span></div></div></div></div><div class="intro-right-img magnetic-wrap"><img class="img-fluid magnetic-item" src="assets/images/source/phong_19.jpg" alt="h1-intro-right-img"></div></div></div></div></div></div>`
          }
        ]
      });

      gioiThieus.push({
        id: "GT-2",
        ngonNgus: [
          {
            ten: 'About Counter',
            noiDung: `<div class="about-counter mb-120"><div class="container"><div class="row justify-content-center g-md-4 gy-5"><div class="col-sm-12 col-md-6 col-lg-3"><div class="counter-single"><div class="counter-icon"><img src="assets/images/icon/chef.svg" alt="image"></div><div class="coundown"><div class="d-flex align-items-center gap-2"><h3 class="odometer" data-odometer-final="100"><span class="d-flex align-items-center"><span class="me-2">5</span> + </span></h3></div><p>Nhiều đầu bếp chuyên nghiệp</p></div></div></div><div class="col-sm-12 col-md-6 col-lg-3"><div class="counter-single"><div class="counter-icon"><img src="assets/images/icon/food.svg" alt="image"></div><div class="coundown"><div class="d-flex align-items-center gap-2"><h3 class="odometer" data-odometer-final="250"><span class="d-flex align-items-center"><span class="me-2">20</span> + </span></h3></div><p>Thực đơn đa dạng, món ăn phong phú</p></div></div></div><div class="col-sm-12 col-md-6 col-lg-3"><div class="counter-single"><div class="counter-icon"><img src="assets/images/icon/customer.svg" alt="image"></div><div class="coundown"><div class="d-flex align-items-center gap-2"><span class="d-flex align-items-center"><span class="me-2">1,000</span> + </span></div><p>Khách hàng ghé thăm, và đánh giá tốt</p></div></div></div></div></div></div>`
          }
        ]
      });
    }

    return {
      props: {
        gioiThieus
      }
    }
  } catch (error) {


    return {
      props: {
        error: "LỖI"
      }
    }
  }
})

export default About;
