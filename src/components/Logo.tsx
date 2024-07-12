import Image from "next/image";
import { rubik } from "../lib/fonts";

const Logo = () => {
  return (
    <div className="flex items-baseline gap-1">
      <Image src={"/icon/signal-alt-2.svg"} alt="icon" width={32} height={20} />
      <span
        className={`${rubik.className} text-[#ec600a] text-2xl font-semibold
        `}
      >
        InteresPlus
      </span>
    </div>
  );
};

export default Logo;
