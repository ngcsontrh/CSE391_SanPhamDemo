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
            <a href="https://www.amazon.com/b/?_encoding=UTF8&ie=UTF8&node=23466307011&pd_rd_w=kGTv6&content-id=amzn1.sym.f8d62906-a452-4f4d-b404-3d26f153fbdc&pf_rd_p=f8d62906-a452-4f4d-b404-3d26f153fbdc&pf_rd_r=D716G0HGR5GYVAK182X3&pd_rd_wg=ikNb8&pd_rd_r=d953c818-ca63-454a-81bf-1f3f244a1b96&ref_=pd_hp_d_hero_unk"><img src="https://m.media-amazon.com/images/I/71YTsbTxBsL._SX3000_.jpg" alt="Amazing gifts for every Dad" className="w-full" /></a>
          </div>
          <div>
            <a href="https://www.amazon.com/s/?_encoding=UTF8&k=kitchen&rh=p_36%3A-5000&crid=3T9EH9JRSQV3Q&qid=1686341204&rnid=386465011&sprefix=kitchen%2Caps%2C162&ref=sr_nr_p_36_5&pd_rd_w=uYjpf&content-id=amzn1.sym.6bd9a83c-3722-4f5c-a531-ccf7a3d8e6a6&pf_rd_p=6bd9a83c-3722-4f5c-a531-ccf7a3d8e6a6&pf_rd_r=D716G0HGR5GYVAK182X3&pd_rd_wg=ikNb8&pd_rd_r=d953c818-ca63-454a-81bf-1f3f244a1b96&ref_=pd_hp_d_hero_unk"><img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="Deal 2" className="w-full" /></a>
          </div>
          <div>
            <a href="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"><img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="Deal 3" className="w-full" /></a>
          </div>
        </Carousel>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Gaming accessories</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" alt="Headsets" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Headsets</p>
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="Keyboards" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Keyboards</p>
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" alt="Computer mice" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Computer mice</p>
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" alt="Chairs" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Chairs</p>
            </div>
          </div>
          <a href="https://www.amazon.com/b/?_encoding=UTF8&node=23508887011&pd_rd_w=49b4t&content-id=amzn1.sym.12129333-2117-4490-9c17-6d31baf0582a&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=D716G0HGR5GYVAK182X3&pd_rd_wg=JNYTW&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&ref_=pd_hp_d_atf_unk" className="mt-3 text-sm self-start">See more</a>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Shop deals in Fashion</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" alt="Jeans under $50" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Jeans under $50</p>
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="Tops under $25" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Tops under $25</p>
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" alt="Dresses under $30" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Dresses under $30</p>
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" alt="Shoes under $50" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Shoes under $50</p>
            </div>
          </div>
          <a href="https://www.amazon.com/gp/goldbox/?ie=UTF8&ref_=nav_cs_gb&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%2522957D18D8132C0FCBA2EA0F57FEB9A3F8%2522%252C%2522departments%2522%253A%255B%25221055398%2522%255D%252C%2522sorting%2522%253A%2522BY_SCORE%2522%257D&pd_rd_w=jV6j4&content-id=amzn1.sym.68f2b66e-afdb-4a19-b88c-555da04d6dc2&pf_rd_p=68f2b66e-afdb-4a19-b88c-555da04d6dc2&pf_rd_r=D716G0HGR5GYVAK182X3&pd_rd_wg=JNYTW&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522" className="mt-3 text-sm self-start">See all deals</a>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Refresh your space</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="Dining" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Dining</p>
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="Home" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Home</p>
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="Kitchen" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Kitchen</p>
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="Health and Beauty" className="w-full h-24 object-cover" />
              <p className="mt-2 text-left text-sm">Health and Beauty</p>
            </div>
          </div>
          <a href="https://www.amazon.com/gp/goldbox/?ie=UTF8&ref_=nav_cs_gb&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%2522957D18D8132C0FCBA2EA0F57FEB9A3F8%2522%252C%2522departments%2522%253A%255B%25221055398%2522%255D%252C%2522sorting%2522%253A%2522BY_SCORE%2522%257D&pd_rd_w=6k5PB&content-id=amzn1.sym.68f2b66e-afdb-4a19-b88c-555da04d6dc2&pf_rd_p=68f2b66e-afdb-4a19-b88c-555da04d6dc2&pf_rd_r=R1NE1FTRH6TK0Y2T49DM&pd_rd_wg=ARGzC&pd_rd_r=3cd13bf8-68c7-4ba2-b856-c02ec3d2e92d&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522" className="mt-3 text-sm self-start">See more</a>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Deals in PCs</h2>
          <div className="grid grid-cols-1 flex-grow">
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" alt="Gaming PC" className="w-full h-48 object-cover" />
            </div>
          </div>
          <a href="https://www.amazon.com/gp/goldbox/?ie=UTF8&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%252219A70421F1B18305BA3C837E25E8FDF9%2522%252C%2522departments%2522%253A%255B%2522541966%2522%255D%252C%2522sorting%2522%253A%2522FEATURED%2522%257D&pd_rd_w=dFuLK&content-id=amzn1.sym.3a6a1f11-a96c-444b-b219-97322616eb92&pf_rd_p=3a6a1f11-a96c-444b-b219-97322616eb92&pf_rd_r=D716G0HGR5GYVAK182X3&pd_rd_wg=JNYTW&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&ref_=pd_hp_d_atf_unk&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522#dealsGridLinkAnchor" className="mt-3 text-sm self-start">Shop Now</a>
        </div>
      </div>
      {/* New Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
  <h3 className="text-xl font-bold mb-3">Amazon Gadget Store</h3>
  <a href="https://www.amazon.com/s?k=smartphones&_encoding=UTF8&content-id=amzn1.sym.061f5f08-3bb1-4c70-8051-5d850a92de53&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&pd_rd_w=0spfP&pd_rd_wg=JNYTW&pf_rd_p=061f5f08-3bb1-4c70-8051-5d850a92de53&pf_rd_r=D716G0HGR5GYVAK182X3&ref=pd_hp_d_atf_unk"><img src="https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY160_.jpg" alt="Amazon Gadget Store" className="w-full h-auto object-cover rounded-md mb-1" /></a>
  <p className="text-left text-sm mb-3">Smartphone</p>
  <div className="grid grid-cols-3 gap-3 flex-grow">
    <div className="flex flex-col items-center">
      <a href="#"><img src="https://m.media-amazon.com/images/I/316r7290SLL._SY75_.jpg" alt="Smartphones" className="w-full h-auto object-cover rounded-md mb-1" /></a>
      <p className="text-left text-sm">Tablets</p>
    </div>
    <div className="flex flex-col items-center">
      <a href="#"><img src="https://m.media-amazon.com/images/I/31qcGgiIK7L._SY75_.jpg" alt="Tablets" className="w-full h-auto object-cover rounded-md mb-1" /></a>
      <p className="text-left text-sm">Laptops</p>
    </div>
    <div className="flex flex-col items-center">
      <a href="#"><img src="https://m.media-amazon.com/images/I/313zteqI9LL._SY75_.jpg" alt="Laptops" className="w-full h-auto object-cover rounded-md mb-1" /></a>
      <p className="text-left text-sm">TVs</p>
    </div>
  </div>
  <a href="https://www.amazon.com/s?k=electronics&_encoding=UTF8&content-id=amzn1.sym.061f5f08-3bb1-4c70-8051-5d850a92de53&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&pd_rd_w=0spfP&pd_rd_wg=JNYTW&pf_rd_p=061f5f08-3bb1-4c70-8051-5d850a92de53&pf_rd_r=D716G0HGR5GYVAK182X3&ref=pd_hp_d_atf_unk" className="text-blue-500 text-sm self-start mt-3">See more from Amazon Gadgets</a>
</div>


        {/* Card 2 */}
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Deals on gifts for Dad</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <a href=""><img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/1H/FDAY/GW/QuadCard/FD_2024_304_GW_DesktopQuadCard_Deals_186x116_1x._SY116_CB582858223_.jpg" alt="Dining" className="w-full h-24 object-cover" /></a>
              <p className="mt-2 text-left text-sm">Tech</p>
            </div>
            <div>
              <a href=""><img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="Home" className="w-full h-24 object-cover" /></a>
              <p className="mt-2 text-left text-sm">Adventure gear</p>
            </div>
            <div>
              <a href=""><img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="Kitchen" className="w-full h-24 object-cover" /></a>
              <p className="mt-2 text-left text-sm">Unique finds</p>
            </div>
            <div>
              <a href=""><img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/1H/FDAY/GW/QuadCard/FD_2024_305_GW_DesktopQuadCard_Deals_186x116_1x._SY116_CB582858223_.jpg" alt="Health and Beauty" className="w-full h-24 object-cover" /></a>
              <p className="mt-2 text-left text-sm">Health & Wellness</p>
            </div>
          </div>
          <a href="https://www.amazon.com/b/?_encoding=UTF8&ie=UTF8&node=23466307011&pd_rd_w=mUoff&content-id=amzn1.sym.36b3bd24-30cc-4394-a99c-32175deb1058&pf_rd_p=36b3bd24-30cc-4394-a99c-32175deb1058&pf_rd_r=D716G0HGR5GYVAK182X3&pd_rd_wg=JNYTW&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&ref_=pd_hp_d_atf_unk" className="text-blue-500 text-sm">Shop all</a>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-3">Fashion trends you like</h2>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div>
              <a href="https://www.amazon.com/s/?_encoding=UTF8&k=Dresses&crid=1PW0S93CC85GY&sprefix=dresses%2Caps%2C146&ref=nb_sb_noss_1&pd_rd_w=sNAA7&content-id=amzn1.sym.bad2a3cf-6397-46b0-aa92-6036dbc4afb6&pf_rd_p=bad2a3cf-6397-46b0-aa92-6036dbc4afb6&pf_rd_r=D716G0HGR5GYVAK182X3&pd_rd_wg=JNYTW&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&ref_=pd_hp_d_atf_unk"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg" alt="Dining" className="w-full h-24 object-cover" /></a>
              <p className="mt-2 text-left text-sm">Dresses</p>
            </div>
            <div>
              <a href="https://www.amazon.com/s?k=Knits+clothing&_encoding=UTF8&content-id=amzn1.sym.bad2a3cf-6397-46b0-aa92-6036dbc4afb6&crid=23OTKP0I0AQDD&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&pd_rd_w=sNAA7&pd_rd_wg=JNYTW&pf_rd_p=bad2a3cf-6397-46b0-aa92-6036dbc4afb6&pf_rd_r=D716G0HGR5GYVAK182X3&sprefix=knits+clothing%2Caps%2C147&ref=pd_hp_d_atf_unk"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg" alt="Home" className="w-full h-24 object-cover" /></a>
              <p className="mt-2 text-left text-sm">Knits</p>
            </div>
            <div>
              <a href="https://www.amazon.com/s?k=Spring+Jackets&_encoding=UTF8&content-id=amzn1.sym.bad2a3cf-6397-46b0-aa92-6036dbc4afb6&crid=28AAZ2JDZCYX1&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&pd_rd_w=sNAA7&pd_rd_wg=JNYTW&pf_rd_p=bad2a3cf-6397-46b0-aa92-6036dbc4afb6&pf_rd_r=D716G0HGR5GYVAK182X3&sprefix=spring+jackets%2Caps%2C140&ref=pd_hp_d_atf_unk"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg" alt="Kitchen" className="w-full h-24 object-cover" /></a>
              <p className="mt-2 text-left text-sm">Jackets</p>
            </div>
            <div>
              <a href="https://www.amazon.com/s/?_encoding=UTF8&k=jewelry&crid=3J1F4CEQCXT22&sprefix=jewelry%2Caps%2C152&ref=nb_sb_noss_1&pd_rd_w=sNAA7&content-id=amzn1.sym.bad2a3cf-6397-46b0-aa92-6036dbc4afb6&pf_rd_p=bad2a3cf-6397-46b0-aa92-6036dbc4afb6&pf_rd_r=D716G0HGR5GYVAK182X3&pd_rd_wg=JNYTW&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&ref_=pd_hp_d_atf_unk"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg" alt="Health and Beauty" className="w-full h-24 object-cover" /></a>
              <p className="mt-2 text-left text-sm">Jewlery</p>
            </div>
          </div>
          <a href="https://www.amazon.com/s/?_encoding=UTF8&k=Trending%20fashion&crid=2787SXJYRXDZH&sprefix=trending%20fashion%2Caps%2C142&ref=nb_sb_noss_1&pd_rd_w=sNAA7&content-id=amzn1.sym.bad2a3cf-6397-46b0-aa92-6036dbc4afb6&pf_rd_p=bad2a3cf-6397-46b0-aa92-6036dbc4afb6&pf_rd_r=D716G0HGR5GYVAK182X3&pd_rd_wg=JNYTW&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&ref_=pd_hp_d_atf_unk" className="mt-3 text-blue-500 text-sm self-start">Explore more</a>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-3">Toys under $25</h3>
          <a href="https://www.amazon.com/s?k=toys&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.44da4965-9668-4613-bec2-a3a75f0c2ad4&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&pd_rd_w=u74Zz&pd_rd_wg=JNYTW&pf_rd_p=44da4965-9668-4613-bec2-a3a75f0c2ad4&pf_rd_r=D716G0HGR5GYVAK182X3&ref=pd_hp_d_atf_unk"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" alt="Toys" className="w-full h-auto object-cover rounded-md mb-2" /></a>
          <a href="https://www.amazon.com/s?k=toys&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.44da4965-9668-4613-bec2-a3a75f0c2ad4&pd_rd_r=b118309c-6544-4fbe-8097-50f7c508f1db&pd_rd_w=u74Zz&pd_rd_wg=JNYTW&pf_rd_p=44da4965-9668-4613-bec2-a3a75f0c2ad4&pf_rd_r=D716G0HGR5GYVAK182X3&ref=pd_hp_d_atf_unk" className="text-blue-500 text-sm self-start">Shop now</a>
        </div>
      </div>
      <div className="container mx-auto mt-5">
       {/* Multi Carousel Section */}
      <div className="mb-5">
        <h2 className="text-xl font-bold mb-3">Best Sellers in Sports & Outdoors</h2>
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
            <a key={index} href={product.link} className="p-2">
              <img src={product.src} alt={product.label} className="w-full h-40 object-cover mb-2" />
            </a>
          ))}
        </CarouselMulti>
      </div>

      <div className="mb-5">
        <h2 className="text-xl font-bold mb-3">Most wished for in Movies & TV</h2>
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
            <a key={index} href={movie.link} className="block p-2 bg-white rounded-lg shadow-md">
              <img src={movie.src} alt={movie.label} className="w-full h-40 object-cover mb-2" />
            </a>
          ))}
        </CarouselMulti>
      </div>
    </div>
    </div>
  );
};

export default Home;
