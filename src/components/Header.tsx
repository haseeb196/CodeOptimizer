import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#0A1D37] px-4 py-5 text-[#FFD700]">
      <Link href={"/"}>
        {" "}
        <p className="text-4xl">CodeOptimizeHub</p>
      </Link>
      <div className="text-[#38A3D1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
