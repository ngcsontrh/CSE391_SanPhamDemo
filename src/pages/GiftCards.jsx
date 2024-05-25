import GiftCard from "../assets/images/gift_card.jpg";
import SpecialGiftCard from "../assets/images/special_gift_card.jpg";
import GiftCards from "../components/GiftCard";
import Redeem from "../assets/images/redeem.jpg";
import Balance from "../assets/images/balance.jpg";
import Auto from "../assets/images/auto_reload.jpg";
import More from "../components/More";
import Carousel from "../components/Carousel";

export default function GiftCardsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <GiftCards src={GiftCard} />
        <GiftCards src={SpecialGiftCard} />
      </div>
      <Carousel />
      <div className="flex">
        <More src={Redeem} />
        <More src={Balance} />
        <More src={Auto} />
      </div>
    </div>
  );
}
