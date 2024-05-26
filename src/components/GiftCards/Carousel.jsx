// import "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Pic1 from "../../assets/images/carousel1.jpg";
import Pic2 from "../../assets/images/carousel2.jpg";
import "../../assets/styles/Carousel.css";
import { CarouselLink } from "../../constants/Carousel.js";
export default function CarouselGiftCard() {
  return (
    <div
      className="pd cursor-pointer"
      style={{
        paddingBottom: "30px",
        position: "relative",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carousel "
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <a href={CarouselLink["Say"]}>
          <img
            src={Pic1}
            style={{
              display: "block",
              height: "100%",
              margin: "auto",
              width: "100%",
            }}
          />
        </a>
        <a href={CarouselLink["Wish"]}>
          <img
            src={Pic2}
            style={{
              display: "block",
              height: "100%",
              margin: "auto",
              width: "100%",
            }}
          />
        </a>
      </Carousel>
    </div>
  );
}
