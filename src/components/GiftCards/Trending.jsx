import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TrendImage } from "../../constants/Trending";

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
        {Object.entries(TrendImage).map(([img,link]) => (
            <a href={link} target="_blank">
                <img src={img}  alt="" />
            </a>
        ))}
      </Carousel>
    </div>
  );
}
