import "../App.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image5 from "../images/Image(5).png";
import Image6 from "../images/Image(6).png";
import StarIcons from "../images/star(1).png";


const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div>
          <div className="mySlides">
            <div className="element-10">
              <div className="content-17">
                <img className="line-8" alt="Line" src={Image5} />
                <div className="content-18">
                  <div className="name-4">
                    <div className="text-wrapper-33">Nattasha</div>
                    <div className="text-wrapper-34">Athletics /Trainer</div>
                  </div>
                  <div className="sub-content-4">
                    <img className="rating-2" alt="Rating" src={StarIcons} />
                    <p className="there-are-many-3">
                      There Are Many Variations Of Passages Of Lorem Ipsum
                      Available, But The Majority Have Suffered Alteration In
                      Some Form, By Injected Humour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mySlides">
            <div className="element-10">
              <div className="content-17">
                <img className="line-8" alt="Line" src={Image6} />
                <div className="content-18">
                  <div className="name-4">
                    <div className="text-wrapper-33">Nattasha</div>
                    <div className="text-wrapper-34">Athletics /Trainer</div>
                  </div>
                  <div className="sub-content-4">
                    <img className="rating-2" alt="Rating" src={StarIcons} />
                    <p className="there-are-many-3">
                      There Are Many Variations Of Passages Of Lorem Ipsum
                      Available, But The Majority Have Suffered Alteration In
                      Some Form, By Injected Humour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mySlides">
            <div className="element-10">
              <div className="content-17">
                <img className="line-8" alt="Line" src={Image5} />
                <div className="content-18">
                  <div className="name-4">
                    <div className="text-wrapper-33">Nattasha</div>
                    <div className="text-wrapper-34">Athletics /Trainer</div>
                  </div>
                  <div className="sub-content-4">
                    <img className="rating-2" alt="Rating" src={StarIcons} />
                    <p className="there-are-many-3">
                      There Are Many Variations Of Passages Of Lorem Ipsum
                      Available, But The Majority Have Suffered Alteration In
                      Some Form, By Injected Humour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
