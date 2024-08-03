import HomeInfo from "@/components/ui/HomeInfo";
import { karla, montserrat, rubik } from "@/lib/fonts";
import { homeInfo } from "@/constants";
import Link from "next/link";
import LogoBlack from "@/components/LogoBlack";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-screen   h-[75vh]">
      <section className="h-full fade-in-text  w-full flex justify-center pt-20 px-4">
        <div className="flex flex-col items-center text-center md:w-[800px]">
          <p
            className={`text-4xl md:text-5xl xl:text-7xl duration-300 ${montserrat.className} font-bold `}
          >
            Calcula y visualiza tus inversiones
          </p>
          <p
            className={` text-gray-500 duration-300 text-base w-[400px] md:text-lg md:w-[440px] xl:w-[600px]  xl:text-xl font-medium mt-6 md:mt-5  ${karla.className}`}
          >
            Tu herramienta definitiva para planificar y visualizar el
            crecimiento de tus inversiones.
          </p>

          <Link
            className="font-bold mt-12 py-4 px-8 rounded-full text-base md:text-xl  text-white bg-[#ec600a]"
            href={"/calculadora"}
          >
            Empezar
          </Link>
        </div>
      </section>

      <section
        className={` font-semibold pl-16   ${montserrat.className} h-[60vh] md:h-[70vh]  -mt-72 md:-mt-24 mb-16 flex items-center justify-center`}
      >
        <Image
          src={"/images/undraw_small_town_re_7mcn.svg"}
          alt="icon"
          width={1100}
          height={20}
        />
      </section>

      <section className="gap-20 min-h-[520px] flex flex-col items-center py-8 px-24">
        <p className={`font-semibold text-center w-[400px]  md:w-full text-2xl md:text-3xl ${karla.className}`}>
          Estamos aqui para facilitarte tu investigacion
        </p>
        <div className="flex ">
          <div className="flex md:flex-row flex-col gap-12">
            {homeInfo.map((item) => (
              <HomeInfo
                key={item.titulo}
                icon={item.icon}
                title={item.titulo}
                info={item.informacion}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg flex items-center px-8 mt-12 pt-16 h-[600px] justify-center w-full">
        <div className="flex flex-col items-center text-center md:w-[950px]">
          <p
            className={`text-4xl md:text-5xl xl:text-6xl duration-300  ${montserrat.className} font-bold`}
          >
            No lo pienses mas, prueba nuestra herramienta y comienza a mejorar
            en tus inversiones
          </p>
          <p
            className={` text-gray-500 text-lg md:w-[650px]  md:text-xl font-medium mt-6 md:mt-5  ${karla.className}`}
          >
            La herramienta perfecta para calcular y visualizar tu inversiones.
            Probada y certificada por expertos.
          </p>

          <Link
            className="font-bold mt-12 py-4 px-8 rounded-full text-xl  text-white bg-[#ec600a]"
            href={"/calculadora"}
          >
            Empezar
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
