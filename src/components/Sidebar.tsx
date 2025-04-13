"use client";
import Image from "next/image";
import React, { useState } from "react";
import Banner from "@/assets/Banner.png";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";



const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const list = [
    { id: 1, text: "인기" },
    { id: 2, text: "인플루언서" },
    { id: 3, text: "스타작가" },
    { id: 4, text: "커리어성장" },
    { id: 5, text: "예술과 문학" },
    { id: 6, text: "금융/경제/투자" },
    { id: 7, text: "취향" },
    { id: 8, text: "소셜 기반 영화" },
    { id: 9, text: "과학과 철학" },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Image container - responsive height */}
      <div className="h-[25%] relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-none lg:rounded-r-xl" />
        <Image
          src={Banner}
          alt="banner"
          fill
          priority
          className="object-cover rounded-none lg:rounded-r-xl"
        />
      </div>
      
      {/* Scrollable content container */}
      <div className="flex-1 relative overflow-hidden">
        {/* Vertical line */}
        <div className="absolute right-0 top-5 bottom-0 w-px bg-[#8D8D8D]"></div>

        {/* Scrollable content area */}
        <div className="h-full overflow-y-auto pb-4">
          <div className="mt-5 mb-8 space-y-1 px-1">
            {/* Main menu items */}
            <div className="flex items-center gap-2 px-4 py-2">
              <Text text="메인 페이지" />
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <Text text="공지사항" />
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <Text text="참여예정모임" />
            </div>

            {/* Dropdown section */}
            <div>
              <div
                className="flex items-center justify-between px-4 py-2 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="font-bold text-xl my-3">스터디모임</span>
                {isDropdownOpen ? (
                  <FaChevronUp size={16} />
                ) : (
                  <FaChevronDown size={16} />
                )}
              </div>

              {isDropdownOpen && (
                <div className="space-y-2">
                  {list.map((item) => (
                    <div key={item.id} className="pl-8 py-1">
                      <div className="flex items-center gap-4">
                        <Text text={item.text} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Text = ({ text }: { text: string }) => (
  <>
    <div className="w-4 h-4 bg-[#8D8D8D]"></div>
    <span className="text-base font-bold">{text}</span>
  </>
);

export default Sidebar;
