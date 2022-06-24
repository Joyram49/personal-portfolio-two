import React from "react";
import "./testimonials.css";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const avater = [
  {
    id: 1,
    image: AVTR1,
    clientName: " Amy Millan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni odio possimus quia maxime, minima consequatur! Earum nam illo id, iste fuga ex, in enim quod, ea facere consequatur hic tempore temporibus. Voluptatum sunt, quas praesentium provident sapiente sint sit eaque corporis veritatis veniam rerum rem consectetur, namreprehenderit velit.",
  },
  {
    id: 2,
    image: AVTR2,
    clientName: "James Frost",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni odio possimus quia maxime, minima consequatur! Earum nam illo id, iste fuga ex, in enim quod, ea facere consequatur hic tempore temporibus. Voluptatum sunt, quas praesentium provident sapiente sint sit eaque corporis veritatis veniam rerum rem consectetur, namreprehenderit velit.",
  },
  {
    id: 3,
    image: AVTR3,
    clientName: "Seam Wilkings",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni odio possimus quia maxime, minima consequatur! Earum nam illo id, iste fuga ex, in enim quod, ea facere consequatur hic tempore temporibus. Voluptatum sunt, quas praesentium provident sapiente sint sit eaque corporis veritatis veniam rerum rem consectetur, namreprehenderit velit.",
  },
  {
    id: 4,
    image: AVTR4,
    clientName: "Miley Owans",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni odio possimus quia maxime, minima consequatur! Earum nam illo id, iste fuga ex, in enim quod, ea facere consequatur hic tempore temporibus. Voluptatum sunt, quas praesentium provident sapiente sint sit eaque corporis veritatis veniam rerum rem consectetur, namreprehenderit velit.",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container test__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {avater.map(({ id, image, clientName, review }) => {
          return (
            <SwiperSlide key={id} className='testimonial'>
              <div className='client__avater'>
                <img src={image} alt={clientName} />
              </div>
              <h3>{clientName}</h3>
              <p className='client__review'>{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
