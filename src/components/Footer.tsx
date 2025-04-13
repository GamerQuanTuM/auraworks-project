import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full lg:w-[80%] mx-auto h-20 my-2 lg:my-5 bg-[#7B7B7B] rounded-xl flex items-center justify-center">
        <h1 className="text-white font-bold text-xl lg:text-2xl">배너 광고</h1>
      </div>
      <div className="w-full bg-black py-6 px-4 text-white text-xs lg:text-sm">
        <div className="w-full max-w-screen-md mx-auto text-center">
          <div className="inline-block text-left font-semibold space-y-1">
            <p>(주)아자스터디클럽</p>
            <p>사업자 등록번호: 000-00-00000 <span className="ml-24">대표: 황희수</span></p>
            <p>호스팅 서비스: 주식회사 아자스터디클럽 <span className="ml-10">통신판매업 신고번호: 2023-서울강남-00000</span> </p>
            <p>00000 서울특별시 강남구 강남동 111, 10층 (역삼동)</p>
            <p>고객센터: 서울특별시 강남구 강남동 111</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;