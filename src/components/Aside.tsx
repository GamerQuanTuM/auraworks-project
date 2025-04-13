import Image from "next/image";
import React from "react";
import Banner from "@/assets/Banner.png";


const Aside = () => {
  return (
    <div className="h-full">
      <div className="h-[25%] relative">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-l-xl" />
        <Image
          src={Banner}
          alt="banner"
          height={400}
          width={400}
          className="object-cover h-full rounded-l-xl object-left-bottom"
        />
        <div className="w-[80%] mx-auto h-48 bg-[#7B7B7B] rounded-xl mt-10 flex items-center justify-center">
          <h1 className="text-white font-bold text-2xl">배너 광고</h1>
        </div>
      </div>
    </div>
  );
};

export default Aside;
