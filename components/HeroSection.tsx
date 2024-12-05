"use client";
import { SiCnn, SiHbo, SiNetflix, SiRumble } from "react-icons/si";

export default function HeroSection() {
  return (
    <div className="w-full h-[125vh] md:h-[150vh] flex flex-col justify-center items-center text-white relative pb-5">
      {/* bg gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b z-[-75] from-[rgba(0,0,0,.2)]  via-[#060717] to-[#060717]"></div>
      {/* waving flag */}
      <img
        className="absolute top-0 left-0 z-[-100] h-screen w-full"
        src="/assets/USA Flag Waving.webp"
        alt=""
      />
      {/* trump photo with words "Vindicating Trump" */}
      <img
        src="/assets/trump-hero-section.png"
        alt="Trump holding his hand up after a failed assassination attempt on his life."
        className="h-[400px] mt-[-280px]  w-full  md:h-[150vh] md:mt-0 absolute z-[-50] scale-[1] md:object-fill"
      />
      {/* buttons container - buy dvd + stream on + quote */}
      <div className="w-full  h-screen flex flex-col md:flex-row mt-[-200px]  md:mt-[-200px]   justify-end md:justify-between items-center md:items-end mb-10 px-10">
        <div className="w-full md:w-1/2 flex flex-col  space-y-3  ">
          <button className="bg-[#cc0000] text-white w-[80vw] md:w-[350px] h-[55px]">
            BUY DVD
          </button>
          <div className="bg-[#cc0000] text-white h-[85px] w-[80vw] md:w-[350px] flex flex-col justify-center items-center cursor-pointer">
            STREAM ON
            <div className="flex space-x-3 ">
              <SiRumble className="w-[17px] h-[17px]" />
              <SiNetflix className="w-[17px] h-[17px]" />
              <SiHbo className="w-[17px] h-[17px]" />
              <SiCnn className="w-[17px] h-[17px]" />
            </div>
          </div>
        </div>

        <div className=" w-full md:w-1/2 flex  flex-col items-center mt-2 md:items-end space-y-2">
          <div className="text-center w-[340px] sm:w-[450px] text-[13.5px] sm:text-[18.5px]">
            <i>
              “Character assassination. Political assassination.
              <br /> Legal assassination. An actual assassination attempt.
              <br />
              They will try anything to stop Trump.
              <br />
              We can’t let them!”
            </i>
          </div>
          <div className="w-[450px] flex justify-center">
            <div
              className="bg-[#cc0000] text-white w-[200px] h-[25px]
            flex justify-center items-center
            "
            >
              Dinesh d’souza
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
