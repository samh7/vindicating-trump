"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative w-full h-screen">
      <img
        className="w-full h-full
      object-cover
      "
        src="/assets/footer.jpg"
        alt=""
      />
      <div
        className="absolute top-0 left-0
      bg-gradient-to-b
      md:bg-gradient-to-r
      from-[#030b18]
      via-[#030b18]/40
      to-transparent
      flex
      w-full h-full
      items-center
      md:items-start
      md:pl-20
      flex-col
      text-[#666b73]
      pt-20
      "
      >
        <img className="w-44 " src="/assets/logo.png" alt="" />
        <div className="underline my-1.5">Privacy Policy</div>
        <div className="underline my-1.5">D’Souza Media</div>
        <div className="underline my-1.5">Terms of Use</div>
        <div className="underline my-1.5">Firm Ratings</div>
        <div className="underline my-1.5">MPA</div>

        <div
          className="no-underline my-6
          text-sm md:text-xl
        text-white
        "
        >
          Copyright: © 2024 D'Souza Media. All rights reserved.
        </div>

        <div className="underline">
          Crafted by
          <Link href={"sylvester-sila.netlify.app"}> samh7</Link>
        </div>
      </div>
    </div>
  );
}
