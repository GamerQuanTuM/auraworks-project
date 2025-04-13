"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Banner from "@/assets/Banner.png";
import Card from "@/components/Card";
import { Post } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";

const Posts = ({ initialPosts }: { initialPosts: Post[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
  const [currentSort, setCurrentSort] = useState(searchParams.get("sort") || "newest");

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(initialPosts);
    } else {
      const filtered = initialPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, initialPosts]);

  // Handle sort change with server-side navigation
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCurrentSort(value);
    
    // Create new URL with sort parameter
    const params = new URLSearchParams(searchParams);
    
    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    
    // Update the URL without refreshing the page
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="h-full px-2 sm:px-4">
      {/* Banner Section */}
      <div className="h-[25%] relative">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-xl" />
        <Image
          src={Banner}
          alt="banner"
          height={400}
          width={400}
          className="object-cover h-full w-full rounded-xl object-right-top z-10"
        />
        <h1 className="font-bold text-sm sm:text-base lg:text-2xl absolute bottom-3 sm:bottom-5 left-4 sm:left-8 text-white z-20">
          이달의추천
        </h1>
      </div>

      {/* Top Controls Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 sm:gap-8 lg:gap-10 my-6 sm:m-10 lg:space-y-5">
        <div className="flex flex-col flex-1 space-y-4 sm:space-y-6 w-full">
          {/* Category Title */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D9D9D9] rounded" />
            <h1 className="font-semibold text-base sm:text-lg">
              금융/경제/투자
            </h1>
          </div>

          {/* Buttons + Input in a single flex-wrap row */}
          <div className="flex flex-wrap sm:flex-nowrap items-stretch gap-3 w-full my-1 lg:my-0">
            <button className="bg-[#663399] rounded-2xl font-bold text-sm sm:text-lg text-white py-1 px-4 sm:px-5 whitespace-nowrap">
              모임
            </button>
            <button className="border border-[#663399] rounded-2xl font-bold text-sm sm:text-lg text-black py-1 px-4 sm:px-5 whitespace-nowrap">
              게시판
            </button>
            <input
              type="text"
              className="border border-black rounded-2xl py-2 px-4 text-sm w-full sm:w-auto flex-grow min-w-[150px] hidden lg:block"
              placeholder="찾으시는 모임을 검색해보세요!"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Sort Dropdown (Mobile version beside the input) */}
        <div className="w-full sm:w-auto sm:min-w-[120px] flex sm:flex-col flex-row gap-3 sm:gap-0 sm:mt-0 mt-3">
          <div className="sm:hidden w-full">
            <input
              type="text"
              className="border border-black rounded-2xl py-2 px-4 text-sm w-full sm:w-auto flex-grow min-w-[250px]"
              placeholder="찾으시는 모임을 검색해보세요!"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Sort dropdown */}
          <div className="relative w-full sm:w-auto">
            <select 
              className="border border-black rounded-md px-3 py-2 text-sm w-full appearance-none font-semibold"
              value={currentSort}
              onChange={handleSortChange}
            >
              <option value="default" className="font-semibold">기본값</option>
              <option value="newest" className="font-semibold">최신순</option>
              <option value="oldest" className="font-semibold">오래된순</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-sm">
              ▼
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-2 sm:mx-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} post={post} searchTerm={searchTerm} />
          ))}
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
};

export default Posts;