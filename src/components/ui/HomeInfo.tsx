import Image from "next/image";
import Link from "next/link";
import React from "react";
import { karla, montserrat, rubik } from "@/lib/fonts";

const HomeInfo = ({
  icon,
  title,
  info,
  link,
}: {
  icon: string;
  title: string;
  info: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className={`flex-col flex md:items-start md:justify-normal items-center justify-center  py-4  ${karla.className} max-w-[330px]`}
    >
      <Image
        src={icon}
        alt="Icon"
        width="0"
        height="0"
        sizes="100vw"
        className="w-[48px] h-auto mb-10 ml-1"
      />
      <h1 className="text-[24px] font-bold text-center md:text-start mb-3">
        {title}.
      </h1>
      <p className="mb-3 text-center text-lg md:text-base md:text-start">{info}</p>

      <span className="underline hover:text-blue-700 font-semibold">
        Learn More
      </span>
    </Link>
  );
};

export default HomeInfo;
