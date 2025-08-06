"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineArrowBack } from "react-icons/md";

const Layout = ({ children }) => {
  const navigation = useRouter();
  return (
    <div>
      <nav className="w-full sticky top-0 left-0 z-50 bg-gray-900 dark:bg-[#181824] shadow transition duration-300">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-3">
          <button
            onClick={() => navigation.back()}
            className="flex items-center gap-2 rounded-2xl cursor-pointer hover:bg-gray-800 p-2 transition"
          >
            <MdOutlineArrowBack size={32} />
            <span className="text-2xl font-bold text-teal-300 tracking-wide">
              SpectraFind
            </span>
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
