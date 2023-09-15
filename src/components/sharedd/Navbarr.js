"use client";
import SearchForms from "../search/SearchForms";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from 'next/navigation'
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/favlogo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToggleTheme from "../theme/ToggleTheme";

const Navbarr = () => {
  const pathname = usePathname();
  const router = useRouter();

  const searchSubmit = async (e) => {
    e.preventDefault();
    if (!e.target[0].value) {
      return;
    }
    console.log(e.target[0].value);
    router.push(`/search/${e.target[0].value}`);
    e.target.reset();
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-slate-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            className="w-12 h-12 mr-2 rounded-full"
            alt="Flowbite Logo"
            width={100}
            height={100}
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Cinezone
          </span>
        </Link>
        <div className="flex md:order-2">
          <div
            className="text-gray-500 dark:text-gray-400 text-sm p-2.5 mr-1"
          >
            <ToggleTheme/>
          </div>
          <div className="relative hidden md:block">
            <SearchForms />
          </div>
          <div className="inline-flex items-center p-2 w-10 h-10 justify-center md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <SearchForms />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <ul className="flex flex-row justify-center p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-slate-950 md:dark:bg-slate-950">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "block py-2 pl-3 pr-4 rounded text-indigo-500 md:p-0 dark:border-gray-700 border-b-4 border-indigo-200 border-b-indigo-500 dark:border-b-amber-500 dark:text-amber-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/movie"
                className={
                  pathname === "/movie"
                  ? "block py-2 pl-3 pr-4 rounded text-indigo-500 md:p-0 dark:border-gray-700 border-b-4 border-indigo-200 border-b-indigo-500 dark:border-b-amber-500 dark:text-amber-500"
                  : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Movie
              </Link>
            </li>
            <li>
              <Link
                href="/tv-show"
                className={
                  pathname === "/tv-show"
                  ? "block py-2 pl-3 pr-4 rounded text-indigo-500 md:p-0 dark:border-gray-700 border-b-4 border-indigo-200 border-b-indigo-500 dark:border-b-amber-500 dark:text-amber-500"
                  : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                TV Show
              </Link>
            </li>
          </ul>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-row justify-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-slate-950 md:dark:bg-slate-950 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "block py-2 pl-3 pr-4 rounded text-indigo-500 md:p-0 dark:border-gray-700 border-b-4 border-indigo-200 border-b-indigo-500 dark:border-b-amber-500 dark:text-amber-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/movie"
                className={
                  pathname === "/movie"
                  ? "block py-2 pl-3 pr-4 rounded text-indigo-500 md:p-0 dark:border-gray-700 border-b-4 border-indigo-200 border-b-indigo-500 dark:border-b-amber-500 dark:text-amber-500"
                  : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Movie
              </Link>
            </li>
            <li>
              <Link
                href="/tv-show"
                className={
                  pathname === "/tv-show"
                  ? "block py-2 pl-3 pr-4 rounded text-indigo-500 md:p-0 dark:border-gray-700 border-b-4 border-indigo-200 border-b-indigo-500 dark:border-b-amber-500 dark:text-amber-500"
                  : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
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

export default Navbarr;
