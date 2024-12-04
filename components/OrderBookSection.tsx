"use client";

const backGroundImage = {
  backgroundImage: "url('/assets/bg.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
};

export default function OrderBookSection() {
  return (
    <div className="relative bg-[#030b18] pb-[70px]">
      <img className="h-[140vh] w-full" src="/assets/bg.jpg" alt="" />
      <div
        className="h-screen w-full 

        mt-[70px]
        bg-transparent
        absolute top-0
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
          <div
            className="absolute
          
          lg:w-[44%] h-[300px]
           bg-[#101724]
           -mt-5 -ml-5
           book-order-container
           z-[10]
           w-[86%]
           hidden
           sm:flex
           "
          ></div>
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
          <div className="w-[80%] flex justify-center">
            <span className="[letter-spacing:5px] uppercase font-bold">
              GET THE LATEST UPDATES
            </span>
          </div>

          <div
            className="w-[80%] min-w-[77%] h-[70px]
        flex items-center pl-5
        bg-[#0b1f3e]"
          >
            Enter yout email...
          </div>
          <div
            className="w-[80%] min-w-[77%] h-[70px]
        flex justify-center items-center
        uppercase bg-[#cc0000]"
          >
            Get Updates
          </div>
          <div className="w-[80%] flex justify-center">
            <span className="">No spam. Only the important stuff</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-[375px] sm:mt-0  lg:-mt-[300px] bg-transparent">
        <p className="text-center w-[80%]">
          This film is a journey to discover the real Donald Trump, and to make
          the case for him as a man and as a leader. It begins with a puzzle.
          How can a man be so intensely loved and hated? Not since Lincoln have
          we had such a divisive figure on the national scene. The film also
          considers a danger that Lincoln warned about—the rise in America of a
          tyrant like Caesar who would promote lawlessness and subvert the
          foundations of our constitutional republic. Is Trump such a man?
        </p>
        <p className="text-center w-[80%]">
          The film shows Trump’s meteoric rise to billionaire status and
          cultural celebrity. Yet even if Trump is a larger than life figure who
          has the dimensions of a Caesar, he never did anything tyrannical. In
          fact, Trump’s term in office reveals that the real lawlessness comes
          from Trump’s adversaries, who will stop at nothing to defeat him. The
          film spells out their tactics, from an invented accusation of treason
          to criminal indictments intended to lock him up for life, and even an
          attempted assassination.
        </p>
        <p className="text-center w-[80%]">
          The story line of the film is to show that Trump’s enemies—the Left
          and the Democrats—are the real Caesar. They are the ones creating
          lawlessness at the highest levels of government. They despise Trump
          because he is the only one who has the power and the will to stop
          them. The film features interviews with Lara Trump, Trump’s daughter
          in law and co-chair of the Republican National Committee, and Alina
          Habba, Trump’s attorney. It also has an in-depth one-on-one interview
          with Trump himself.
        </p>
        <p className="text-center w-[80%]">
          Throughout the film there are entertaining and powerful re-creations
          of “war rooms”: a media war-room, a war room at the Democratic
          campaign headquarters, and a legal war-room where the criminal plots
          against Trump are hatched. This is Dinesh D’Souza’s most urgent and
          important film. It offers a fresh and eye-opening perspective on the
          most intriguing and controversial figure in America today. It will
          inform, amuse, infuriate, engage and finally motivate Americans of all
          backgrounds.
        </p>
      </div>
    </div>
  );
}
