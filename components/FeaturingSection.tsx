"use client";

import FeaturePerson from "./FeaturePerson";

export default function FeaturingSection() {
  return (
    <div className="featured w-full flex flex-col lg:flex-row bg-[#060717] pt-[200px]">
      {/* left */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-start">
        {/* row 1 */}
        <div className="w-full flex justify-center my-5">
          <span
            className="bg-[#cc0000] font-bold text-3xl py-1 w-[300px]
        flex justify-center "
          >
            FEATURING{" "}
          </span>
        </div>
        <div className="w-full flex justify-center space-x-10">
          <FeaturePerson
            size="250px"
            name="Donald J. Trump"
            imgUrl="/assets/trump.jpg"
          />

          <FeaturePerson
            size="250px"
            name="Dinesh D’Souza"
            imgUrl="/assets/souza.jpg"
          />
        </div>

        {/* row 2 */}

        <div className="w-full flex justify-center my-5">
          <span
            className="bg-[#cc0000] font-bold text-3xl w-[300px]
        flex justify-center "
          >
            Also Featuring
          </span>
        </div>

        <div
          className="w-full flex justify-center space-x-10
        "
        >
          <FeaturePerson
            size="200px"
            name="Lara Trump"
            imgUrl="/assets/lara.jpg"
          />

          <FeaturePerson
            size="200px"
            name="Alina Habba"
            imgUrl="/assets/alina.jpg"
          />
        </div>

        {/* row 3 */}
        <div className="w-full flex justify-center my-5">
          <span
            className="bg-[#cc0000] font-bold text-3xl w-[300px]
        flex justify-center "
          >
            Starring
          </span>
        </div>
        <div className="w-full flex justify-center space-x-10">
          <FeaturePerson
            size="200px"
            name="Nick Searcy"
            imgUrl="/assets/nick.jpg"
          />

          <FeaturePerson
            size="200px"
            name="Siaka Massaquoi"
            imgUrl="/assets/siaka.jpg"
          />
        </div>
      </div>

      {/* right */}
      <div
        className="w-full lg:w-1/2 h-full flex flex-col items-start justify-start
     mt-[50px]  lg:-mt-[100px] px-6 md:px-4 lg:px-0 lg:ml-10"
      >
        <div
          className="
          main-image-clip-path
          w-full relative flex justify-center items-start pt-3 pl-3"
        >
          <div className=" absolute inset-0 z-[10] bg-[#0f1623] p-10"></div>
          <div
            className="
          main-image-clip-path
          w-full relative z-[25] bg-[#1a212d] h-full pl-3 pt-3"
          >
            <img
              className="
            main-image-clip-path
            w-full relative z-[20]"
              src="/assets/trump poster.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex justify-center my-7">
          <div className="flex justify-center items-center w-[300px] h-[65px] bg-[#cc0000]">
            BUY DVD
          </div>
        </div>
      </div>
    </div>
  );
}
