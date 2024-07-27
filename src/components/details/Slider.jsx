import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Slides({ img }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="m-3 mt-6 h-full w-full flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-3/5 shadow-lg rounded-lg mb-10 lg:mb-0">
        <Slider {...settings}>
          {img.map((image, index) => (
            <div key={index} className="w-full h-auto">
              <img
                className="w-full h-auto object-cover shadow-lg rounded-lg"
                src={image}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full lg:w-2/5 h-60 lg:h-96 px-5">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509619!2d144.9537363153159!3d-37.81627977975165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773e5e8b87c8e5!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1601629965219!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Slides;
