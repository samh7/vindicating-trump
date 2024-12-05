"use client";

export default function HomeMain() {
  return (
    <div
      className="w-full -mt-[100px]   bg-[#060717] text-white"
    >
      {/* Text */}
      <div className="w-full h-[100px] px-20 flex justify-end">
        <span className="text-[20px] sm:text-3xl">
          WATCH THE
          <br />
          TRAILER
        </span>
      </div>
      {/* bg lines + picture 1*/}
      <div className="w-full flex justify-center items-center relative sm:mb-24">
        <div className="w-[90%] relative h-screen  px-10">
          <div className="w-full h-[300px] md:h-full -mt-7 border border-[#1e2230]"></div>
          <div className="absolute top-0 w-full  h-[300px] md:h-[85%] border border-[#1e2230] -ml-12 mt-12"></div>
          <div className="absolute top-0 w-full h-[300px] md:h-[85%] border border-[#1e2230] -ml-6 mt-6"></div>
          <div className="absolute top-0 left-0 w-full h-[400px] md:h-[85%]  flex flex-col justify-end items-start">
            <span className="[writing-mode:vertical-lr] rotate-180 [letter-spacing:10px] text-[#50555c] ml-[-7px]">
              TRAILER
            </span>
          </div>
          <div className="w-full left-0 h-full px-20 pb-10 mt-10 absolute top-0">
            <img
              className="w-[80vh] h-[43vh]  object-cover  md:w-full   md:h-full  md:object-cover "
              src="/assets/video-poster.jpg"
              alt="Trum holding his hand up in front of a crowd."
            />
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mt-[-200px] md:mt-0 w-full h-[100px] px-20 flex justify-start">
        <span className="text-[20px] sm:text-3xl -mt-24 sm:mt-0">
          STATEMENT BY DONALD J. TRUMP
          <br />
          ON "VINDICATING TRUMP"
        </span>
      </div>
      {/* bg lines + picture 2*/}
      <div className="w-full grid place-items-center relative  sm:mb-24">
        <div className="w-[90%] relative h-screen  px-10">
          <div className="w-full h-[300px] md:h-full -mt-7 border border-[#1e2230]"></div>
          <div className="absolute top-0 w-full  h-[300px] md:h-[85%] border border-[#1e2230] -ml-12 mt-12"></div>
          <div className="absolute top-0 w-full h-[300px] md:h-[85%] border border-[#1e2230] -ml-6 mt-6"></div>
          <div className="absolute top-0 left-0 w-full h-[400px] md:h-[85%]  flex flex-col justify-end items-start">
            <span className="[writing-mode:vertical-lr] rotate-180 [letter-spacing:10px] text-[#50555c] ml-[-7px]">
              STATEMENT
            </span>
          </div>
          <div className="w-full left-0 h-full px-20 pb-10 mt-10 absolute top-0">
            <img
              className="w-[80vh] h-[43vh]  object-cover  md:w-full   md:h-full  md:object-cover "
            
              src="/assets/president.png"
              alt="Trum holding his hand up in front of a crowd."
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-[-150px] sm:mt-[-150px] md:mt-0">
        <button className="w-[300px] h-[55px] relative z-[200] bg-[#cc0000]">BUY DVD</button>
      </div>
    </div>
  );
}
