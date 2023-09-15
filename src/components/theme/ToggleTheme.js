"use client"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ToggleTheme = () => {
    const {resolvedTheme, setTheme} = useTheme();
    const [toggletheme, setToggleTheme] = useState(false)
    // console.log(toggletheme)
  return (
    <>
    <label className="relative inline-flex text-center items-center mr-5 cursor-pointer">
      <input type="checkbox" onChange={(e) => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="sr-only peer" checked={resolvedTheme === 'dark' ? true : false}/>
      <div className={`w-11 h-6 bg-gray-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-['🌙'] dark:after:content-['🔆'] after:absolute after:top-0.5 after:left-[1.5px] after:bg-black dark:after:bg-white  after:border-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:after:border-gray-700 peer-checked:bg-gray-300`}></div>
    </label>
  </>
  );
};

export default ToggleTheme;
