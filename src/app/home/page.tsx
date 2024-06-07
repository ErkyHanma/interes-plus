import { karla, montserrat, rubik } from "@/components/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <section className="h-full w-full flex justify-center pt-20 px-4">
        <div className="flex flex-col items-center text-center md:w-[700px]">
          <p
            className={`text-5xl md:text-6xl ${montserrat.className} font-bold`}
          >
            Calcula y visualiza tus inversiones.
          </p>
          <p
            className={` text-gray-400 text-lg md:text-xl font-medium mt-6 md:mt-5  ${karla.className}`}
          >
            Tu herramienta definitiva para planificar y visualizar el
            crecimiento de tus inversiones.
          </p>

          <Link
            className="font-bold mt-4 py-2 px-5 rounded-md  text-white bg-[#ec600a]"
            href={"/calculadora"}
          >
            Empezar
          </Link>
        </div>
      </section>
    </main>
  );
}
