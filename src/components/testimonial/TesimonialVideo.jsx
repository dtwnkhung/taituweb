import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import "react-modal-video/css/modal-video.css";
function TesimonialVideo() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="testimonial-video-area mb-120 d-none">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testi-video-wrap">
              <img
                className="img-fluid"
                src="assets/images/bg/testi-video-bg.png"
                alt=""
              />
              <div className="video-icon">
                <a
                  className="gallery2-img"
                  data-fancybox="gallery"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpen(true)}
                >
                  <i className="bi bi-play-circle" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </div>
  );
}

export default TesimonialVideo;
