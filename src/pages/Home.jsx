import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

const Home = () => {
  return (
    <div className="container mx-auto mt-5">
      {/* Carousel Section */}
      <div className="mb-5">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Amazing gifts for every Dad" className="w-full" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Deal 2" className="w-full" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Deal 3" className="w-full" />
          </div>
        </Carousel>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Gaming accessories</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <img src="https://via.placeholder.com/100" alt="Headsets" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Headsets</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Keyboards" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Keyboards</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Computer mice" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Computer mice</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Chairs" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Chairs</p>
            </div>
          </div>
          <a href="#" className="mt-3 text-sm self-start">See more</a>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Shop deals in Fashion</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <img src="https://via.placeholder.com/100" alt="Jeans under $50" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Jeans under $50</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Tops under $25" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Tops under $25</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Dresses under $30" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Dresses under $30</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Shoes under $50" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Shoes under $50</p>
            </div>
          </div>
          <a href="#" className="mt-3 text-sm self-start">See more</a>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Refresh your space</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <img src="https://via.placeholder.com/100" alt="Dining" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Dining</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Home" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Home</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Kitchen" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Kitchen</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Health and Beauty" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Health and Beauty</p>
            </div>
          </div>
          <a href="#" className="mt-3 text-sm self-start">See more</a>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Deals in PCs</h2>
          <div className="grid grid-cols-1 flex-grow">
            <div>
              <img src="https://via.placeholder.com/200" alt="Gaming PC" className="w-full h-48 object-cover" />
            </div>
          </div>
          <a href="#" className="mt-3 text-sm self-start">Shop Now</a>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Gaming accessories</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <img src="https://via.placeholder.com/100" alt="Headsets" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Headsets</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Keyboards" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Keyboards</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Computer mice" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Computer mice</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Chairs" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Chairs</p>
            </div>
          </div>
          <a href="#" className="mt-3 text-sm self-start">See more</a>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Shop deals in Fashion</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <img src="https://via.placeholder.com/100" alt="Jeans under $50" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Jeans under $50</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Tops under $25" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Tops under $25</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Dresses under $30" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Dresses under $30</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Shoes under $50" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Shoes under $50</p>
            </div>
          </div>
          <a href="#" className="mt-3 text-sm self-start">See more</a>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Refresh your space</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <img src="https://via.placeholder.com/100" alt="Dining" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Dining</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Home" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Home</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Kitchen" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Kitchen</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" alt="Health and Beauty" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Health and Beauty</p>
            </div>
          </div>
          <a href="#" className="mt-3 text-sm self-start">See more</a>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Deals in PCs</h2>
          <div className="grid grid-cols-1 flex-grow">
            <div>
              <img src="https://via.placeholder.com/200" alt="Gaming PC" className="w-full h-48 object-cover" />
            </div>
          </div>
          <a href="#" className="mt-3 text-sm self-start">Shop Now</a>
        </div>
      </div>
        {/* Swiper Carousel Section */}
      <div className="mb-5">
        <h2 className="text-2xl font-bold mb-4">Best Sellers in Sports & Outdoors</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <div className="p-2">
              <img src="https://via.placeholder.com/300" alt="Best Seller 1" className="w-full h-48 object-cover" />
              <p className="mt-2 text-left text-sm">Best Seller 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-2">
              <img src="https://via.placeholder.com/300" alt="Best Seller 2" className="w-full h-48 object-cover" />
              <p className="mt-2 text-left text-sm">Best Seller 2</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-2">
              <img src="https://via.placeholder.com/300" alt="Best Seller 3" className="w-full h-48 object-cover" />
              <p className="mt-2 text-left text-sm">Best Seller 3</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-2">
              <img src="https://via.placeholder.com/300" alt="Best Seller 4" className="w-full h-48 object-cover" />
              <p className="mt-2 text-left text-sm">Best Seller 4</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
