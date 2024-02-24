"use client";
import React from "react";
import { useTheme } from "next-themes";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <div
          className="mr-5 hover:text-yellow-300 cursor-pointer md:mt-0"
          onClick={() => setTheme("light")}
        >
          <FaRegMoon size="23" />
        </div>
      ) : (
        <div
          className="mr-5 hover:text-gray-300 cursor-pointer md:mt-0"
          onClick={() => setTheme("dark")}
        >
          <GoSun size="25" />
        </div>
      )}
    </div>
  );
};

export default DarkMode;
