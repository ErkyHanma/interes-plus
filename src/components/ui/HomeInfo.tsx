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
      className={`flex-col py-4 px-2  ${karla.className} max-w-[330px]`}
    >
      <Image
        className="mb-10 ml-1"
        width={48}
        height={30}
        src={icon}
        alt="Icon"
      />
      <h1 className="text-[24px] font-bold mb-3">{title}.</h1>
      <p className="mb-3">{info}</p>

      <span className="underline hover:text-blue-700 font-semibold">
        Learn More
      </span>
    </Link>
  );
};

export default HomeInfo;
