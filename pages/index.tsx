import { useRef, useEffect } from "react";
import Cam from "../components/Cam";

const showCameras = () => {
  console.log('show camera');
}

const showMore = () => {
  console.log('show more');
}

const getUserMedia = () => {
  navigator.mediaDevices.getUserMedia({ video: true });
}

export default function Home() {
  const didRunOnce = useRef(false);
  useEffect(() => {
    if (!didRunOnce.current) {
      didRunOnce.current = true;
      document.body.style.height = `${window.innerHeight}px`;

      if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        console.log("Let's get this party started");

      }

    }
  }, []);
  return (
    <>
      <main className='flex flex-col gap-4'>
        {
          Array.from(Array(10).keys()).map((item, i) => <Cam key={`cam-${i}`}/>)
        }
      </main>


      <footer className='bg-emerald-300 fixed bottom-0 h-16 flex flex-row w-full justify-around items-center'>
        <div className="w-10 cursor-pointer" onClick={showCameras}>
          {/* #1F2937: gray-800 */}
          <svg className="fill-gray-800" x="0px" y="0px" viewBox="0 0 474.578 474.578">
            <path d="M461.972,201.317L276.284,15.63c-20.84-20.84-57.154-20.84-77.993,0L12.573,201.348
	c-11.036,11.067-14.305,27.538-8.309,42.003c6.012,14.435,19.977,23.761,35.59,23.761h13.765v152.315
	c0,30.412,24.739,55.151,55.149,55.151h257.038c30.41,0,55.149-24.739,55.149-55.151V267.111h13.765
	c15.613,0,29.578-9.326,35.605-23.8C476.306,228.886,473.038,212.415,461.972,201.317z M397.28,219.761
	c-13.07,0-23.675,10.596-23.675,23.676v96.835H260.963V281.77c24.568-9.541,42.095-33.294,42.095-61.192
	c0-36.268-29.501-65.77-65.77-65.77c-36.27,0-65.771,29.503-65.771,65.77c0,27.898,17.526,51.651,42.095,61.192v62.178
	c0,24.084,19.591,43.675,43.683,43.675h116.311v31.805c0,4.302-3.499,7.801-7.799,7.801H108.768c-4.299,0-7.799-3.499-7.799-7.801
	v-175.99c0-13.08-10.604-23.676-23.675-23.676H61.126L231.769,49.107c2.96-2.943,8.076-2.943,11.036,0l170.644,170.653H397.28z
	 M218.868,220.577c0-10.157,8.261-18.42,18.42-18.42c10.158,0,18.419,8.263,18.419,18.42c0,10.158-8.261,18.427-18.419,18.427
	C227.129,239.004,218.868,230.735,218.868,220.577z"/>
          </svg>
        </div>
        <div className="cursor-pointer" onClick={showMore}>
          <svg className="fill-none stroke-gray-800 stroke-2" width="50px" height="50px" viewBox="0 0 24 24">
            <path d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z" />
            <path d="M9.05485 12C9.05485 12.5523 8.59486 13 8.02742 13C7.45999 13 7 12.5523 7 12C7 11.4477 7.45999 11 8.02742 11C8.59486 11 9.05485 11.4477 9.05485 12Z" strokeWidth="1.0"/>
            <path d="M13.0274 12C13.0274 12.5523 12.5674 13 12 13C11.4326 13 10.9726 12.5523 10.9726 12C10.9726 11.4477 11.4326 11 12 11C12.5674 11 13.0274 11.4477 13.0274 12Z" strokeWidth="1.0"/>
            <path d="M17 12C17 12.5523 16.54 13 15.9726 13C15.4051 13 14.9452 12.5523 14.9452 12C14.9452 11.4477 15.4051 11 15.9726 11C16.54 11 17 11.4477 17 12Z" strokeWidth="1.0"/>
          </svg>
        </div>
      </footer>
    </>
  )
}
