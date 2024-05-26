import { brandCaseStudy } from "../../constants/Sell"

const BrandCaseStudy = () => {
  return (
    <div className="my-20">
        <h3 className="font-bold text-5xl text-center">Brand case studies</h3>
        <div className="flex justify-around my-12 px-24">
            {brandCaseStudy.map((item, index) => (
                <a key={index} href={item.link} className="flex hover:w-31pt transition-all duration-200 flex-col gap-6 w-30pt border rounded-lg shadow-xl">
                    <img src={item.image} alt="" className="h-2/5 object-cover" />
                    <p className="bg-neutral-100 mx-9 p-1 rounded-md font-semibold text-sm w-fit">Case study</p>
                    <h5 className="px-8 font-bold text-2xl">{item.title}</h5>
                    <p className="px-8">{item.content}</p>
                </a>
            ))}
        </div>
    </div>
  )
}
export default BrandCaseStudy