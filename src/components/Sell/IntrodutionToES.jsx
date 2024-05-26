import { introduction } from "../../constants/Sell";
import { MoveUpRight } from "lucide-react";

const IntrodutionToES = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to to-white rounded-tl-260px py-20">
      <h2 className="font-bold text-5xl text-center mb-9">
        Introduction to ecommerce selling
      </h2>
      <div className="flex flex-wrap justify-between items-center gap-9 w-80pt mx-auto">
        {introduction.map((item, index) => (
          <div key={index} className="w-30pt shadow-xl p-10 h-72 bg-white">
            <h4 className="font-bold text-3xl mb-7">{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <dir className="flex justify-center my-14 gap-5 text-lg">
        <p>Just have a few items to sell?</p>
        <a className="font-bold"
         href="https://sellercentral.amazon.com/gp/flex/sign-in-syh.html?ref_=azus_soa_sell_ri_pf_t1&initialSessionID=147-0622464-5821240&ld=AZUSSOA-sell_AZRI_SELL_PF">
          Sign up to become an individual seller <MoveUpRight className="inline-block" size={20} />
        </a>
      </dir>
    </div>
  );
};
export default IntrodutionToES;
