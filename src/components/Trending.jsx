import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Trend, TrendImage } from "../constants/Trending";
import Pic1 from "../assets/images/trend1.jpg";
import Pic2 from "../assets/images/trend2.jpg";
import Pic3 from "../assets/images/trend3.jpg";
import Pic4 from "../assets/images/trend4.jpg";
import Pic5 from "../assets/images/trend5.jpg";
import Pic6 from "../assets/images/trend6.jpg";
export default function Trending() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="p-5 text-4xl font-semibold border-b m-6">
        Trending now
      </div>
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        ssr // server-side rendering
        infinite
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <a href={TrendImage["Pic1"]}>
          <img src={Pic1} alt="" />
        </a>
        <a href={TrendImage["Pic2"]}>
          <img style={{ height: "15.5pc", width: "75%" }} src={Pic2} alt="" />
        </a>
        <a href={TrendImage["Pic3"]}>
          <img src={Pic3} alt="" />
        </a>
        <a href={TrendImage["Pic4"]}>
          <img src={Pic4} alt="" />
        </a>
        <a href={TrendImage["Pic5"]}>
          <img src={Pic5} alt="" />
        </a>
        <a href={TrendImage["Pic6"]}>
          <img src={Pic6} alt="" />
        </a>
      </Carousel>
    </div>
  );
}
