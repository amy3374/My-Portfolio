import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcBookmark } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div>
        <div className="py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="font-medium text-sm text-center sm:text-left">
            @ 2024 Minseo's Portfolio
          </p>
          <div className="flex items-center sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start cursor-pointer">
            <a href="https://github.com/amy3374" className="text-gray-500 mr-3">
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.notion.so/e503cd64335d49f9a84357ca97f13655"
              className="font-bold text-2xl mr-2"
            >
              R
            </a>
            <a
              href="https://www.notion.so/93678654bf304af689ded5180555c8d0?v=16e36f4ab1ac4beea014b25e95889b84"
              className="text-gray-500"
            >
              <FcBookmark className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
