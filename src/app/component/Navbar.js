"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from 'next/navigation'
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  // const [search, setSearch] = useState("")
  const pathname = usePathname();
  const router = useRouter()

  const searchSubmit = async (e) => {
    e.preventDefault()
    if(!e.target[0].value) {
      return
    }
    console.log(e.target[0].value)
    router.push(`/search/${e.target[0].value}`)
    e.target.reset()
  }
  
  // console.log(pathname);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          {/* <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
            width={100}
            height={100}
          /> */}
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Cinezone
          </span>
        </Link>
        <div className="flex md:order-2">
         {/*  <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> 
      </svg>
            <span className="sr-only">Searchfafaffa</span>
          </button> */}
          <form onSubmit={searchSubmit} className="flex">
          <div className="relative md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m17 21-2-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
              <span className="sr-only">Search icon</span>
            </div>
           
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 rounded-l-lg border border-gray-300 bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 font-medium text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            Search
          </button>
          </form>
        
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex flex-row justify-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={pathname === '/' ? "block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-indigo-500 md:hover:bg-transparent md:hover:text-indigo-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 border-b-4 border-indigo-200 border-b-indigo-500" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/movie"
                className={pathname === '/movie' ? "block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-indigo-500 md:hover:bg-transparent md:hover:text-indigo-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 border-b-4 border-indigo-200 border-b-indigo-500" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
              >
                Movie
              </Link>
            </li>
            <li>
              <Link
                href="/tv-show"
                className={pathname === '/tv-show' ? "block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-indigo-500 md:hover:bg-transparent md:hover:text-indigo-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 border-b-4 border-indigo-200 border-b-indigo-500" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
              >
                TV Show
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
