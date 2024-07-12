"use client";

import Link from "next/link";
import Menu from "./Menu";
import Logo from "./Logo";
import { headers_links } from "@/constants/index";
import { useModal } from "@/hooks/useModal";
import { rubik } from "../lib/fonts";

const Header = () => {
  const { isOpen } = useModal();

  return (
    <>
      <div className="flex shadowHeader bg-white flex-1 z-50 sticky top-0 py-5 px-6 items-center justify-between border-gray-200 border-b-2  md:border-none">
        <Link href={"/home"} className="flex items-center ">
          <Logo />
        </Link>
        <div className="flex flex-col items-baseline gap-1">
          <Menu />

          <div className="gap-2 hidden md:flex">
            {headers_links.map((item) => (
              <Link
                key={item.name}
                className="font-medium  hover:bg-gray-200 duration-100 py-2 px-5 rounded-md  "
                href={item.href}
              >
                {item.name}
              </Link>
            ))}

            <div className="bg-gray-300 w-[1.5px] h-7 self-center rounded-md "></div>

            <Link
              className="font-bold mr-4 ml-6 py-2 px-5 rounded-md  text-white bg-[#ec600a]"
              href={"/calculadora"}
            >
              Empezar
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex-col py-5 px-6 gap-3 flex">
          {headers_links.map((item) => (
            <Link
              href={item.href}
              className={`${rubik.className}  text-md font-semibold cursor-pointer hover:bg-gray-200  p-2 rounded-md`}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
