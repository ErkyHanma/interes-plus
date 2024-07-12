import Image from "next/image";
import { rubik } from "../lib/fonts";

const LogoBlack = () => {
  return (
    <div className="flex items-baseline gap-1">
      <Image
        className="black-svg"
        src={"/icon/signal-alt-2.svg"}
        alt="icon"
        width={32}
        height={20}
      />
      <span
        className={`${rubik.className} text-[#000000] text-2xl font-semibold
        `}
      >
        InteresPlus
      </span>
    </div>
  );
};

export default LogoBlack;
