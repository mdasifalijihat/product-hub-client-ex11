import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/queries")
      .then((res) => {
        const sorted = res.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);
        setQueries(sorted);
      })
      .catch((err) => console.error("Failed to fetch queries:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrows: true,
  };

  if (queries.length === 0) {
    return <p className="text-center py-10">Loading slider...</p>;
  }

  return (
    <div className="py-10 px-4 ">
      <Slider {...settings}>
        {queries.map((query) => (
          <div key={query._id} className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={query.imageUrl}
              alt={query.productName}
              className="w-full h-64 md:h-96 object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                <Typewriter
                  words={[query.queryTitle]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h2>
              <p className="text-md md:text-lg drop-shadow-md">
                Product: {query.productName}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
