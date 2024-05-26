import "../../assets/styles/GiftCard.css";
export default function GiftCards({ src, href }) {
  return (
    <a href={href}>
      <img className="gift-card self-center m-5 cursor-pointer" src={src} />
    </a>
  );
}
