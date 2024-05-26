import React from 'react';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Define the responsive breakpoints
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// Export carouselItems
export const carouselItems = [
  {
    imageUrl: "https://m.media-amazon.com/images/I/41BcZhxCQzL._AC_SY200_.jpg",
    discount: "24% off",
    dealType: "Limited time deal",
    price: "$22.73",
    oldPrice: "$29.99",
    description: "Once Upon a Time: The Captivating Life",
    link: "https://example.com/link1"
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/41SOMp1SxzL._AC_SY200_.jpg",
    discount: "33% off",
    dealType: "Limited time deal",
    price: "$8.69",
    oldPrice: "$12.99",
    description: "Summer Bridge Activities 2nd to 3rd G",
    link: "https://example.com/link2"
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/51An5CGF9TL._AC_SY200_.jpg",
    discount: "33% off",
    dealType: "Limited time deal",
    price: "$8.69",
    oldPrice: "$12.99",
    description: "Summer Bridge Activities 3rd to 4th G",
    link: "https://example.com/link3"
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/81B3GdMvSXL._SX3000_.jpg",
    discount: "19% off",
    dealType: "Limited time deal",
    price: "$16.79",
    oldPrice: "$20.99",
    description: "Amazon Basics 5-Blade Razor Refills",
    link: "https://example.com/link4"
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/71cHzVVr8PL._SX3000_.jpg",
    discount: "20% off",
    dealType: "Limited time deal",
    price: "$24.03",
    oldPrice: "$30.00",
    description: "Swimming Against the Current: Fighting...",
    link: "https://example.com/link5"
  }
];

const DealsUnder25 = () => (
  <div className="mb-5">
    <h2 className="text-2xl font-bold mb-4">Deals Under $25</h2>
    <MultiCarousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {carouselItems.map((item, index) => (
        <div key={index} className="cursor-pointer">
          <a href={item.link}>
            <img src={item.imageUrl} alt={`Deal ${index + 1}`} className="w-full" />
            <div className="text-center mt-2">
              <p className="text-red-500 font-bold">{item.discount}</p>
              <p className="text-sm">{item.dealType}</p>
              <p className="text-xl font-semibold">{item.price}</p>
              <p className="text-gray-500 line-through">{item.oldPrice}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </a>
        </div>
      ))}
    </MultiCarousel>
  </div>
);

export default DealsUnder25;
