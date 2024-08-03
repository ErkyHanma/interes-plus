"use client";

import { useModal } from "@/hooks/useModal";
import Image from "next/image";

const Menu = () => {
  const { isOpen, onClose, onOpen } = useModal();

  return (
    <div className="justify-center items-baseline flex flex-col">
      {isOpen ? (
        <button className="duration-500" onClick={onClose}>
          <Image
            className="md:hidden"
            src="\icon\cross-small.svg"
            alt="Menu icon"
            width={28}
            height={28}
          />
        </button>
      ) : (
        <button className="duration-500" onClick={onOpen}>
          <Image
            className="headerRespons:flex hidden"
            src="\icon\menu-burger.svg"
            alt="Close icon"
            width={28}
            height={28}
          />
        </button>
      )}
    </div>
  );
};

export default Menu;
