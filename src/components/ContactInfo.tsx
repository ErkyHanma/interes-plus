import { karla } from "@/lib/fonts";
import Image from "next/image";
import React from "react";
import { contactInfo } from "../constants/db";
import Link from "next/link";
import { ContactDetail } from "@/types";

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-10 lg:gap-18 items-center px-8 justify-center">
      {contactInfo.map((item: ContactDetail) => (
        <div key={item.title} className="flex  items-center gap-4 flex-col ">
          <div className="rounded-full h-[120px] w-[120px] items-center justify-center flex bg-orange-400">
            <Image
              src={`${item.icon}`}
              alt="Icon"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[40px] h-auto black-svg"
            />
          </div>
          <p className="md:text-lg lg:text-2xl font-bold ">{item.title}</p>
          <div className="flex flex-col items-center">
            <p
              className={`md:text-base lg:text-lg text-center font-semibold ${karla.className}`}
            >
              {item.dato?.dev1.name}
            </p>
            {item.title === "Social Medias" && item.dato.dev1.link ? (
              <Link className="hover:underline" href={item.dato.dev1.link}>
                {" "}
                {item.dato?.dev1.info}
              </Link>
            ) : (
              <p>{item.dato?.dev1.info}</p>
            )}
          </div>
          <div className="flex flex-col items-center">
            <p
              className={`md:text-base lg:text-lg text-center font-semibold ${karla.className}`}
            >
              {item.dato?.dev2.name}
            </p>
            {item.title === "Social Medias" && item.dato.dev2.link ? (
              <Link className="hover:underline" href={item.dato.dev2.link}>
                {" "}
                {item.dato?.dev2.info}
              </Link>
            ) : (
              <p> {item.dato?.dev2.info}</p>
            )}
          </div>
          <div className="flex flex-col items-center">
            <p
              className={`md:text-base lg:text-lg text-center font-semibold ${karla.className}`}
            >
              {item.dato?.dev3.name}
            </p>
            {item.title === "Social Medias" && item.dato.dev3.link ? (
              <Link className="hover:underline" href={item.dato.dev3.link}>
                {" "}
                {item.dato?.dev3.info}
              </Link>
            ) : (
              <p> {item.dato?.dev3.info}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
