"use client";
export default function FeaturePerson({
  size,
  name,
  imgUrl,
}: {
  size: string;
  name: string;
  imgUrl: string;
}) {
  return (
    <div className="flex flex-col items-center relative w-full">
      <div
        className={`absolute
    left-[10px]
    md:left-[25px]
    -top-[10px]
    sm:w-[150px]
    min-w-[150px]
    z-[50]
    h-[200px] border border-white`}
      ></div>
      <div className="absolute inset-0 bg-[#060717]"></div>
      <img
        className={`
      individual-image-clip-path
          w-[70%]
    sm:w-[200px]
    z-[50]

      h-[200px] aspect-square object-cover`}
        src={imgUrl}
        alt=""
      />
      <span
        className={`
                  w-full

    sm:w-[200px]

 flex justify-center uppercase font-bold sm:text-xl
        mt-[14px]
        ml-[5px]
        relative z-[30]`}
      >
        {name}
      </span>
    </div>
  );
}
