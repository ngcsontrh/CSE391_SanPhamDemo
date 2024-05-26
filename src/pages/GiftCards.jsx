import GiftCard from "../assets/images/gift_card.jpg";
import SpecialGiftCard from "../assets/images/special_gift_card.jpg";
import GiftCards from "../components/GiftCard";
import Redeem from "../assets/images/redeem.jpg";
import Balance from "../assets/images/balance.jpg";
import Auto from "../assets/images/auto_reload.jpg";
import More from "../components/More";
import CarouselGiftCard from "../components/Carousel";
import Trending from "../components/Trending";
import LearnMore from "../components/LearnMore";
import {Link} from "../constants/Redeem.js";
import {GiftCardsLink} from "../constants/GiftCards.js"
export default function GiftCardsPage() {
  return (
    <div className="flex flex-col">
      <CarouselGiftCard />
      <div className="flex justify-between">
        <GiftCards href={GiftCardsLink["normal"]} src={GiftCard} />
        <GiftCards href={GiftCardsLink["special"]} src={SpecialGiftCard} />
      </div>
      <Trending/>
      <div className="flex">
        <More str={Link["Redeem"]} src={Redeem} />
        <More str={Link["View"]} src={Balance} />
        <More str={Link["Reload"]} src={Auto} />
      </div>
      <LearnMore/>
    </div>
  );
}
