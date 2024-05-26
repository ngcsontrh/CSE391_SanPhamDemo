import NavSWA from "../components/Sell/NavSWA";
import HeroSection from "../components/Sell/HeroSection";
import NewSellerIncentives from "../components/Sell/NewSellerIncentives";
import NavYbA from "../components/Sell/NavYbA";
import Scale from "../components/Sell/Scale";
import BrandCaseStudy from "../components/Sell/BrandCaseStudy";
import Programs from "../components/Sell/Programs"
import IntrodutionToES from "../components/Sell/IntrodutionToES";

const Sell = () => {
  return (
    <>
      <section>
        <NavSWA />
        <HeroSection />
        <NewSellerIncentives />
      </section>
      <section>
        <NavYbA />
        <Scale />
        <BrandCaseStudy />
      </section>
      <section>
        <Programs />
        <IntrodutionToES />
      </section>
    </>
  );
};
export default Sell;
