import { Play } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const Programs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClickWatchVideo = () => {
    setIsOpen(!isOpen);
  }

  const handleClickOutsideVideo = (event) => {
    if(ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideVideo);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideVideo);
    };
  }, []);

  return (
    <>
    <div className="bg-custom-2 w-80pt p-10 rounded-2xl my-12 mx-auto flex gap-14 items-center">
      <div className="ml-20">
        <p className="font-semibold mb-6">Programs</p>
        <h3 className="font-bold text-5xl">Unlock a universe of selling opportunities</h3>
        <p className="my-6 font-semibold">What type of Amazon seller are you? Play to your strengths and create your selling strategy with a variety of programs made to support your unique business.</p>
        <div className="flex gap-8">
          <a href="https://sell.amazon.com/programs?initialSessionID=147-0622464-5821240&ld=AZUSSOA-sell"
            className="bg-black text-white px-4 py-2 rounded-3xl font-semibold"
          >Explore programs</a>
          <button onClick={handleClickWatchVideo} className="bg-white flex px-4 py-2 rounded-3xl font-semibold border-2 border-black">
            <Play />
            Watch video
          </button>
        </div>
      </div>
      <img src="src\assets\sell-universe-3.svg" alt="" width={550} />
    </div> 
    {isOpen && (
      <div class="fixed inset-0 z-50 bg-black bg-opacity-80 transition-opacity">
        <iframe ref={ref} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="720" height="480" src="https://www.youtube.com/embed/mH1Nbw3FhGY?si=i-IwRh7-h_qIRsk9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    )}
    </>
  )
}
export default Programs