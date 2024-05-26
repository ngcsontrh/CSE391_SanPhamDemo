const HeroSection = () => {
  return (
    <div
      className="bg-gradient-to-r from-blue-100 h-75vh to-white rounded-br-full rounded-es-5600px rounded-bl-4500px flex justify-around items-center"
    >
      <div className="w-35vw ml-4 text-neutral-800">
        <h2 className="text-7xl font-extrabold -tracking-tight leading-tight">
          Start selling with Amazon
        </h2>
        <p className="mt-4 font-medium text-xl">
          The fastest-growing and preferred acquisition channel for over half
          our multichannel sellers.1
        </p>
        <a
          href="https://sellercentral.amazon.com/gp/on-board/workflow/Registration/login.html?passthrough%2Faccount=fba_soa&passthrough%2FmarketplaceID=ATVPDKIKX0DER&passthrough%2FsuperSource=OAR&ref_=sdus_soa_hp_rp_h&passthrough%2FinitialSessionID=147-0622464-5821240&passthrough%2Fld=AZUSSOA-sell_AZRP_SELL_H"
          className="py-3 px-8 bg-orange-400 text-xl font-semibold inline-block rounded-3xl shadow-lg shadow-neutral-400 mt-7"
        >
          Sign up
        </a>
        <p className="mt-2 text-sm">
          $39.99 a month + selling fees
        </p>
      </div>
      <img src="src\assets\sell_1.png" alt="sell" className="w-35vw" />
    </div>
  );
};
export default HeroSection;
