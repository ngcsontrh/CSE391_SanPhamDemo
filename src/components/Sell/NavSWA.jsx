import { Star } from "lucide-react";

const NavSWA = () => {
  return (
    <nav className="pt-4 pb-2 bg-white flex justify-around items-center border-b-2 top-0 sticky">
      <h2 className="font-bold text-2xl">Sell with Amazon</h2>
      <div className="flex items-center gap-2">
        <Star
          size={18}
          color="white"
          fill="white"
          className="p-1 rounded-full bg-green-800"
        />
        <p className="mb-0">
          Get <span className="font-semibold">10% back</span> on your first <span className="font-semibold">$50,000</span> in branded sales.
        </p>
        <a
          href="https://sellercentral.amazon.com/gp/on-board/workflow/Registration/login.html?passthrough%2Faccount=fba_soa&passthrough%2FmarketplaceID=ATVPDKIKX0DER&passthrough%2FsuperSource=OAR&ref_=azus_soa_sell_rp_n&passthrough%2FinitialSessionID=147-0622464-5821240&passthrough%2Fld=AZUSSOA-sell_AZRP_SELL_N"
          className="font-semibold underline underline-offset-4 hover:no-underline"
        >
          Learn More
        </a>
      </div>
      <a href="https://sellercentral.amazon.com/gp/on-board/workflow/Registration/login.html?passthrough%2Faccount=fba_soa&passthrough%2FmarketplaceID=ATVPDKIKX0DER&passthrough%2FsuperSource=OAR&ref_=azus_soa_sell_rp_n&passthrough%2FinitialSessionID=147-0622464-5821240&passthrough%2Fld=AZUSSOA-sell_AZRP_SELL_N"
          className="inline-block py-2 px-4 bg-orange-400 shadow-lg shadow-neutral-300 font-semibold rounded-3xl">
          Sign up
        </a>
    </nav>
  );
};
export default NavSWA;
