import "../constants/Footer";
import { GetToKnowUs,AmazonPayment } from "../constants/Footer";


function takeLink(prop) {
  const keys = Object.keys(prop);
  return (
    <ul>
      {keys.map((key) => (
        <li key={key} className="text-white">
          <a className="hover:underline cursor-pointer" href={prop[key]}>{key}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <div className="flex flex-col">
      <a href="#">
        <div className="flex items-center justify-center text-xl pt-2 pb-2 text-white bg-slate-600 hover:bg-slate-500 cursor-pointer">
          Back to top
        </div>
      </a>
      <div className="bg-slate-800 flex  items-top justify-center">
        <div className="p-12 mr-12">
          <b className="text-white">GetToKnowUs</b>
          {takeLink(GetToKnowUs)}
        </div>

        <div className="p-12 ml-12">
          <b className="text-white">Amazon Payment</b>
          {takeLink(AmazonPayment)}
        </div>
      </div>
    </div>
  );
}
