import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselMulti from 'react-multi-carousel';
import { responsive, products, movies } from '../constants/Home';
import 'react-multi-carousel/lib/styles.css';
import '../pages/multicarousel.css'

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
      <div className="container mx-auto mt-5">
       {/* Multi Carousel Section */}
      <div className="mb-5">
        <h2 className="text-xl font-bold mb-2">Best Sellers in Sports & Outdoors</h2>
        <CarouselMulti
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
          itemClass="carousel-item-padding-20-px"
        >
          {products.map((product, index) => (
            <div key={index} className="p-2 bg-white rounded-lg shadow-md">
              <img src={product.src} alt={product.label} className="w-full h-auto object-cover rounded-md" />
              <p className="text-center mt-1 text-sm">{product.label}</p>
            </div>
          ))}
        </CarouselMulti>
      </div>

      <div className="mb-5">
        <h2 className="text-xl font-bold mb-2">Most wished for in Movies & TV</h2>
        <CarouselMulti
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
          itemClass="carousel-item-padding-20-px"
        >
          {movies.map((movie, index) => (
            <div key={index} className="p-2 bg-white rounded-lg shadow-md">
              <img src={movie.src} alt={movie.label} className="w-full h-auto object-cover rounded-md" />
              <p className="text-center mt-1 text-sm">{movie.label}</p>
            </div>
          ))}
        </CarouselMulti>
      </div>
    </div>
    </div>
  );
};

export default Home;
