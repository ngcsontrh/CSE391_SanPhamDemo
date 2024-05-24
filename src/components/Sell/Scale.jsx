const Scale = () => {
  return (
    <div className="w-80pt bg-blue-50 p-8 m-auto rounded-xl">
        <div className="flex justify-evenly items-center gap-6">
            <div className="w-2/3">
                <div  className="ml-8 mr-5">
                    <span className="inline-block w-20 p-1 bg-blue-500"></span>
                    <h3 className="text-5xl font-bold mt-6">Your business at scale</h3>
                    <p className="font-medium my-6">Amazon customers buy roughly 7,400 products per minute from U.S. sellers. Build, grow, and scale your brand with our innovative toolkit: world-class logistics, a proven customer experience, rich data insights, and cutting-edge advertising & marketing solutions. This is your path toward profitability.</p>
                    <a className="py-2 px-4 w-fit rounded-3xl tracking-wider font-semibold bg-black text-white" href="https://sell.amazon.com/pricing?initialSessionID=147-0622464-5821240&ld=AZUSSOA-sell">Explore pricing</a>
                </div>
                <div className="mt-9 bg-white p-9 rounded-xl">
                    <h4 className="text-xl font-bold tracking-wider">New Republic</h4>
                    <p className="my-5">
                    “When we launched on Amazon, I had expectations that Amazon would be about 10% to 20% of our total business. Within the first six months, it was 50%. It just exploded. And it really changed the way I thought about the future of our business.”
                    </p>
                    <div>
                        
                    </div>
                </div>
            </div>
            <img src="src\assets\amazon-b.jpg" alt="Amazon" width={500} />
        </div>
    </div>
  )
}
export default Scale