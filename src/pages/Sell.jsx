import NavSWA from "../components/Sell/NavSWA";
import HeroSection from "../components/Sell/HeroSection";
import NewSellerIncentives from "../components/Sell/NewSellerIncentives";
import NavYbA from "../components/Sell/NavYbA";
import Scale from "../components/Sell/Scale";

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
      </section>
    </>
  );
};
export default Sell;
