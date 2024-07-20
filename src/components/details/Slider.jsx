import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Slides() {
  const images = [
    {
      src: "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fe_improve%2Fe_sharpen%3A10%2Fe_saturation%3A10%2Ff_auto%2Cq_auto%2Fv1657442615%2FWebsite%2FCMS-Uploads%2Fiimfzitbjcrjyf3w6b4u.jpg&w=1920&q=75",
      alt: "img1",
    },
    {
      src: "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fe_improve%2Fe_sharpen%3A10%2Fe_saturation%3A10%2Ff_auto%2Cq_auto%2Fv1657442673%2FWebsite%2FCMS-Uploads%2Ftxn0tjqmgvszqx41gvm1.jpg&w=1920&q=75",
      alt: "img2",
    },
    {
      src: "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fe_improve%2Fe_sharpen%3A10%2Fe_saturation%3A10%2Ff_auto%2Cq_auto%2Fv1657442630%2FWebsite%2FCMS-Uploads%2Fexbyqxpscvgulpt42wsf.jpg&w=1920&q=75",
      alt: "img3",
    },
    {
      src: "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fe_improve%2Fe_sharpen%3A10%2Fe_saturation%3A10%2Ff_auto%2Cq_auto%2Fv1657442637%2FWebsite%2FCMS-Uploads%2Fgmh61icp17p2jczuyoek.jpg&w=1920&q=75",
      alt: "img4",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="m-3 mt-6 h-[100%] w-[100%] flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-3/5  shadow-lg rounded-lg mb-10 lg:mb-0 ">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="w-[100%] h-[50%]">
              <img
                key={index}
                className="w-[100%] h-[90%] object-cover shadow-lg rounded-lg "
                src={img.src}
                alt={img.alt}
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
