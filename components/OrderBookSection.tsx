"use client";

// const backGroundImage = {
//   backgroundImage: "url('/assets/bg.jpg')",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundAttachment: "fixed",
//   backgroundPosition: "center",
// };

export default function OrderBookSection() {
  return (
    <div className="bg-gradient-to-b   from-[#060717] to-[#0c1421]">
      <div className="relative ">
        <img
          className="h-auto object-cover absolute w-full min-h-[400px]"
          src="/assets/bg.jpg"
          alt=""
        />
        <div
          className="w-full 

        py-[70px]
        bg-transparent
        top-0
  flex 
  flex-col
  lg:flex-row
  order-book
  pt-[50px]
  px-10
  "
        >
          {/* left */}
          <div className="w-full lg:w-1/2  flex justify-start">
            {/* <div
              className="
          
          lg:w-[44%] h-[300px]
           bg-[#101724]
           -mt-5 -ml-5
           book-order-container
           z-[10]
           w-[86%]
           hidden

           sm:flex
           "
            ></div> */}
            <div
              className="relative
           z-[30]
book-order-container-whole
        w-full sm:h-[300px]
        bg-[#1c232f]
        flex
        flex-col
        sm:flex-row
        "
            >
              <div
                className="h-full  flex flex-col justify-center
           items-center
           space-y-6
         order-2
         sm:order-1
         w-full
         py-10
         sm:w-1/2
           "
              >
                <span className="uppercase">Order book</span>
                <div
                  className="flex justify-center items-center
            w-[220px] h-[60px] bg-[#395c87]"
                >
                  AMAZON
                </div>
                <div
                  className="flex justify-center items-center
            w-[250px] h-[60px] bg-[#908752]"
                >
                  BARNED & NOBLE
                </div>
              </div>
              <img
                className="
            order-1
         sm:order-2
         w-full
         sm:w-1/2 
            "
                src="/assets/book.jpg"
                alt=""
              />
            </div>{" "}
          </div>

          {/* right */}

          <div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-end space-y-6
      mt-10 
      "
          >
            <div className="w-[80%] z-[200] relative  flex justify-center">
              <span className="[letter-spacing:5px] uppercase font-bold">
                GET THE LATEST UPDATES
              </span>
            </div>

            <div
              className="w-[80%] z-[200] relative  min-w-[77%] h-[70px]
        flex items-center pl-5
        bg-[#0b1f3e]"
            >
              Enter yout email...
            </div>
            <div
              className="w-[80%] z-[200] relative  min-w-[77%] h-[70px]
        flex justify-center items-center
        uppercase bg-[#cc0000]"
            >
              Get Updates
            </div>
            <div className="w-[80%] flex justify-center">
              <span className="text-center">No spam. Only the important stuff</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
