import { Star, MoveUpRight, Check } from "lucide-react";
import { incentives } from "../../constants/Sell";

const NewSellerIncentives = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center h-screen">
      <img
        src="src\assets\sell_2.png"
        alt="New Seller Incentives"
        className="w-35vw mr-9"
      />
      <div className="w-40vw">
        <a
          href="https://sell.amazon.com/grow?initialSessionID=147-0622464-5821240&ld=AZUSSOA-sell#nsi"
          className="p-1 bg-lime-700 text-white font-semibold inline-flex items-center px-2 gap-2 rounded-full"
        >
          <Star
            size={20}
            color="white"
            fill="green"
            className="rounded-full bg-white"
          />
          New Seller Incentives
        </a>
        <h4 className="text-5xl font-bold leading-tight my-4 text-neutral-700">
          Get started with $50,000 in incentives
        </h4>
        <p>
          Ready to sell with Amazon? As a new seller, you can take advantage of
          a series of incentives.
        </p>
        <ul className="p-4 rounded-2xl bg-custom-1 my-7">
          {incentives.map((item, index) => (
            <li key={index} className="flex gap-3 items-start my-1 font-semibold">
              <Check />
              <p className="text-sm">{item.incentive}</p>
            </li>
          ))}
        </ul>
        <a
          className="font-bold text-base inline-flex items-center gap-2 text-neutral-700"
          href="https://sell.amazon.com/grow?initialSessionID=147-0622464-5821240&ld=AZUSSOA-sell"
        >
          See all incentives
          <MoveUpRight size={18} />
        </a>
      </div>
    </section>
  );
};
export default NewSellerIncentives;
