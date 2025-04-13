import { Post } from "@/lib/types";
import Image from "next/image";
import React from "react";
import Trending from "./Trending";

type Props = {
  post: Post;
  searchTerm?: string;
};

const Card = ({
  post,
  searchTerm = "",
}: {
  post: Post;
  searchTerm?: string;
}) => {
  return (
    <div className="relative w-96 lg:w-72 bg-white rounded-lg shadow-md">
      <div className="bg-gray-200 h-40 w-full relative">
        <div className="absolute -top-3 -left-3">
          <Trending trending={post?.trending} />
        </div>

        <Image
          src={post?.image as string}
          alt="image"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-black text-white text-xs px-2 py-1 rounded-sm inline-block">
            {post?.category}
          </div>
          <h3 className="font-bold text-base text-[#2777D4]">
            {post?.location}
          </h3>
        </div>

        <p className="text-base font-bold text-[#656565]">
          {searchTerm && searchTerm.trim() !== "" ? (
            <>
              {post.title
                .split(new RegExp(`(${searchTerm})`, "i"))
                .map((part, index) =>
                  part.toLowerCase() === searchTerm.toLowerCase() ? (
                    <span key={index} className="bg-yellow-300">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
            </>
          ) : (
            post.title
          )}
        </p>

        <p className="text-xs text-[#BABABA] mt-1 font-semibold">
          {post?.description}
        </p>

        <p className="text-[#353535] mt-1 text-xs font-bold">{post?.author}</p>
      </div>
    </div>
  );
};

export default Card;
