"use client";

import Image from "next/image";
import React from "react";
import LogoBlack from "./LogoBlack";
import Link from "next/link";
import { karla, montserrat } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg2   h-[450px]  flex flex-col w-full ">
      <div className={clsx("flex h-[260px] ml-5 mr-7 px-4 pt-16 gap-32 ", {
                  "border-t  border-gray-400": pathname !== "/about",
                })} >
        <div className="flex w-80 mr-28 flex-col  gap-5">
          <Link href={"/home"} className="flex items-center -mt-2">
            <LogoBlack />
          </Link>
          <p className={`font-semibold text-xl ${karla.className}`}>
            Estamos aqui para facilitarte tu investigacion
          </p>
        </div>
        <div className={` flex   flex-col ${karla.className} `}>
          <p className={`font-bold mb-6 text-black text-xl `}>Servicios</p>
          <Link className="font-medium text-gray-600" href={"/calculadora"}>
            Calculadora
          </Link>
        </div>

        <div className={` flex   flex-col ${karla.className} `}>
          <p className={`font-bold mb-6 text-black text-xl `}>Quienes somos</p>
          <Link className="font-medium text-gray-600" href={"/about"}>
            About us
          </Link>
          <Link className="font-medium text-gray-600" href={"/contact"}>
            Contactanos
          </Link>
        </div>

        <div className={` flex   flex-col ${karla.className} `}>
          <p className={`font-bold mb-6 text-black text-xl `}>Mas</p>
          <Link className="font-medium text-gray-600" href={"/about"}>
            Aprende
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <Image src={"/icon/github.svg"} alt="icon" width={24} height={20} />
          <Image src={"/icon/linkedin.svg"} alt="icon" width={24} height={20} />
          <Image
            src={"/icon/instagram.svg"}
            alt="icon"
            width={24}
            height={20}
          />
          <Image
            src={"/icon/twitter-alt-square.svg"}
            alt="icon"
            width={24}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
