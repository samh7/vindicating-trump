"use client";
import { SiCnn, SiHbo, SiNetflix, SiRumble } from "react-icons/si";

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white relative pb-5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent z-[-75] via-[#060717] to-[#060717]"></div>
      <img
        className="absolute top-0 left-0 z-[-100] h-screen w-screen"
        src="/assets/USA Flag Waving.webp"
        alt=""
      />
      {/* <div className="w-full flex flex-col items-start md:items-center h-screen overflow-hidden md:mt-[100px]"> */}
      <img
        src="/assets/trump-hero-section.png"
        alt="Trump holding his hand up after a failed assassination attempt on his life."
        className="h-[400px] mt-[-100px] md:mt-0 w-full  md:h-screen absolute z-[-50] scale-[1] md:object-fill"
      />

      {/* </div> */}
      <div className="w-full  h-screen flex flex-col md:flex-row mt-[350px] md:mt-0  justify-end md:justify-between items-center md:items-end mb-10 px-10">
        <div className="w-full md:w-1/2 flex flex-col  space-y-3  ">
          <button className="bg-[#cc0000] text-white w-[80vw] md:w-[300px] h-[70px]">
            BUY DBD
          </button>
          <div className="bg-[#cc0000] text-white h-[90px] w-[80vw] md:w-[300px] flex flex-col justify-center items-center cursor-pointer">
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
          <div className="text-center w-[300px] md:max-w-[400px] text-[12px] md:text-[18.5px]">
            “Character assassination. Political assassination. Legal
            assassination. An actual assassination attempt. They will try
            anything to stop Trump. We can’t let them!”
          </div>
          <div className="w-[400px] flex justify-center">
            <div
              className="bg-[#cc0000] text-white w-[200px] h-[30px]
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
