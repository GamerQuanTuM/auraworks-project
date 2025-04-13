"use client";
import React, { useEffect, useState } from "react";

const Trending = ({ trending }: { trending: boolean }) => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  useEffect(() => {
    // This will only run on the client side
    setRandomNumber(Math.floor(Math.random() * 25) + 1);
  }, []);

  return (
    <div>
      {trending && randomNumber !== null && (
        <div className="flex items-center justify-center w-10 h-10 bg-gray-500 text-white rounded-full">
          <span className="font-bold text-xl">{randomNumber}</span>
        </div>
      )}
    </div>
  );
};

export default Trending;
