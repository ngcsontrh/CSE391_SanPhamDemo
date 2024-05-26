export default function More({ src, str }) {
  return (
    <div className=" shadow-gray-100 m-8 rounded">
      <a href={str}>
        <img className="cursor-pointer" src={src} alt="" />
      </a>
    </div>
  );
}
