import { Plane, Newspaper, CircleDollarSign, MoveUpRight } from "lucide-react";
import { scale } from "../../constants/Sell";

const Icon = ({ icon }) => {
  const htmlIcon = `<${icon} />`;
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlIcon }} />
    </div>
  );
};

const Scale = () => {
  return (
    <div className="w-80pt bg-blue-50 p-8 m-auto flex flex-col gap-7 rounded-xl">
      <div className="flex justify-evenly items-center gap-9">
        <div className="w-2/3">
          <div className="ml-8 mr-5">
            <span className="inline-block w-20 p-1 bg-blue-500"></span>
            <h3 className="text-5xl font-bold mt-6">Your business at scale</h3>
            <p className="font-medium text-lg my-6">
              Amazon customers buy roughly 7,400 products per minute from U.S.
              sellers. Build, grow, and scale your brand with our innovative
              toolkit: world-class logistics, a proven customer experience, rich
              data insights, and cutting-edge advertising & marketing solutions.
              This is your path toward profitability.
            </p>
            <a
              className="py-2 px-4 w-fit rounded-3xl tracking-wider font-semibold bg-black text-white"
              href="https://sell.amazon.com/pricing?initialSessionID=147-0622464-5821240&ld=AZUSSOA-sell"
            >
              Explore pricing
            </a>
          </div>
          <div className="mt-9 bg-white p-5 rounded-xl">
            <h4 className="text-2xl font-bold tracking-wider">New Republic</h4>
            <p className="my-5 text-lg">
              “When we launched on Amazon, I had expectations that Amazon would
              be about 10% to 20% of our total business. Within the first six
              months, it was 50%. It just exploded. And it really changed the
              way I thought about the future of our business.”
            </p>
            <div className="flex items-center gap-2">
              <img
                src="src\assets\avatar_ceo.jpg"
                alt="CEO"
                width={50}
                className="rounded-full"
              />
              <p className="font-semibold">
                Proton
                <span className="block text-xs font-extralight text-neutral-500">
                  CEO
                </span>
              </p>
            </div>
          </div>
        </div>
        <img src="src\assets\amazon-b.jpg" alt="Amazon" />
      </div>
      <div>
        <div className="h-36 relative flex items-center justify-center">
          <div className="absolute bg-scale-1 brightness-30 w-full h-full rounded-2xl"></div>
          <p className="text-white relative text-3xl w-5/12 text-center">
            On average, sellers see a 20–25% increase in sales after adopting
            FBA.
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-between mt-8">
          {scale.map((item, index) => (
            <div key={index} className="w-1/4 flex flex-col gap-4">
              {item.icon === "Plane" && <Plane fill="#40a8f7" size={45} strokeWidth={1}/>}
              {item.icon === "Newspaper" && <Newspaper fill="#40a8f7" size={45} strokeWidth={1} />}
              {item.icon === "CircleDollarSign" && <CircleDollarSign fill="#40a8f7" size={45} strokeWidth={1} />}
              <h5 className="font-bold text-2xl">{item.title}</h5>
              <p className="text">{item.content}</p>
              <a href={item.more} className="font-bold text-lg">Learn More <MoveUpRight className="inline-block" strokeWidth={2} size={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Scale;
