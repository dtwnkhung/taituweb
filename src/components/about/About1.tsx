import React from "react";

function About1() {
  return (
    <div className="home1-introduction-area pt-120 mb-120">
      <div className="container-lg container-fluid">
        <div className="row mb-40">
          <div className="col-lg-12">
            <div className="section-title">
              <span>
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Về chúng tôi
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>Nhà hàng Tài Tử</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row gy-5">
          <div className="col-lg-4">
            <div className="into-left-img magnetic-wrap">
              <img
                className="img-fluid magnetic-item"
                src="assets/images/source/phong_3.jpg"
                alt="h1-intro-left-img"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="our-mission mb-2">
              <div className="icon px-3">
                <img src="assets/images/icon/mission.svg" alt="" />
                <h4>Giá trị cốt lõi</h4>
              </div>
              <div className="description">
                <p>
                Thế kỷ 21, thế kỷ của sự dịch chuyển, trải nghiệm và giao thoa Văn hóa, thực khách được tiếp cận nhiều hơn các nền Ẩm thực Đông-Tây, Âu- Á.
                Nhưng các giá trị truyền thống Ẩm thực Việt chưa bao giờ bị quên lãng. 
                Lĩnh hội những kinh nghiệm và sự tìm tòi, Nhà hàng Tài Tử luôn tự hào là nơi kết tinh và thăng hoa tinh thần ẩm thực Nam Bộ cùng nghệ thuật đờn ca tài tử.
                Nấu ăn  không đơn giản chỉ là chế biến, nấu ăn còn được nâng tầm thành nghệ thuật mà Nhà hàng chúng tôi trao đến qúy khách.
                Thể hiện giá trị văn hóa ẩm thực Nam Bộ tinh túy nhất, nhà hàng Tài Tử hân hạnh phục vụ những cực phẩm đặ sản và hải sải cao cấp, các món ăn truyền thống Nam Bộ được chế biến cầu kỳ từ nguồn  nguyên vật liệu chọn lọc bới các đầu bếp thượng hạng trong nghề.
                </p>
              </div>
            </div>
            <div className="intro-right">
              <div className="features-author">
                <div className="intro-features">
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" />
                      Thực đơn đa dạng món ăn bổ dưỡng, hấp dẫn
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />
                      Chất lượng hoàn hảo từ món ăn đến phong cách phục vụ
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" />
                      Không gian tuyệt vời tận hưởng tinh hoa Ẩm thực Nam Bộ
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />
                      Thưởng thức nghệ thuật đờn ca tài tử đặc sắc
                    </li>
                  </ul>
                </div>
                <div className="author-area">
                  <div className="author-content">
                    <p>
                      “Với khát vọng đưa văn hóa quê hương mình đến với mọi miền đất nước, chúng tôi những người con Nam Bộ mong muốn khách hàng cảm nhận được tất cả những hương vị quê mình vừa là lòng tự hào quê hương vừa là mang đến cho khách hàng một văn hóa ẩm thực đậm chất người dân Nam bộ của chúng tôi. ”{" "}
                    </p>
                  </div>
                  <div className="author-img-name">
                    <div className="author-img">
                      <img src="assets/images/bg/h1-intro-author.png" alt="" />
                    </div>
                    <div className="author-name">
                      <h4>Ông Phú</h4>
                      <span>Đại diện nhà hàng</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-right-img magnetic-wrap">
                <img
                  className="img-fluid magnetic-item"
                  src="assets/images/source/phong_19.jpg"
                  alt="h1-intro-right-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
