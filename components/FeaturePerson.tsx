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
    <div className="flex flex-col items-center relative">
      <div
        className={`absolute
    -left-[10px]
    -top-[10px]
    w-[50%]
    sm:w-[200px]
    min-w-[150px]
    h-[200px] border border-white`}
      ></div>
      <div className="absolute inset-0 bg-[#060717]"></div>
      <img
        className={`
      individual-image-clip-path
          w-[90%]
    sm:w-[200px]

      h-[200px] aspect-square object-cover`}
        src={imgUrl}
        alt=""
      />
      <span
        className={`
                  w-full

    sm:w-[200px]

 flex justify-center uppercase font-bold text-xl
        mt-[14px] relative z-[30]`}
      >
        {name}
      </span>
    </div>
  );
}
