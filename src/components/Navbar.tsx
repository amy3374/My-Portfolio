import Link from "next/link";
import React from "react";
import DarkMode from "./DarkMode";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <FcLikePlaceholder className="text-4xl ml-3" />
          <FcLike className="text-4xl" />
          <FcLikePlaceholder className="text-4xl" />
          <FcLike className="text-4xl" />
          <FcLikePlaceholder className="text-4xl" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <DarkMode />
          <Link href="/" className="mr-5 hover:text-gray-400">
            Home
          </Link>
          <Link href="/projects" className="mr-5 hover:text-gray-400">
            Project
          </Link>
        </nav>
        <a
          href="https://open.kakao.com/o/gHQbzY9f"
          className="inline-flex items-center bg-gray-200 dark:text-black border-0 py-1 px-3 focus:outline-none rounded mt-4 md:mt-0"
        >
          연락하기
        </a>
      </div>
    </header>
  );
};

export default Navbar;
