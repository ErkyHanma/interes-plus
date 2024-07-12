import HomeInfo from "@/components/ui/HomeInfo";
import { karla, montserrat, rubik } from "@/lib/fonts";
import { homeInfo } from "@/constants";
import Link from "next/link";
import LogoBlack from "@/components/LogoBlack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-[75vh]">
      <section className="h-full fade-in-text  w-full flex justify-center pt-20 px-4">
        <div className="flex flex-col items-center text-center md:w-[800px]">
          <p
            className={`text-6xl md:text-7xl ${montserrat.className} font-bold`}
          >
            Calcula y visualiza tus inversiones.
          </p>
          <p
            className={` text-gray-500 text-lg md:w-[600px]  md:text-xl font-medium mt-6 md:mt-5  ${karla.className}`}
          >
            Tu herramienta definitiva para planificar y visualizar el
            crecimiento de tus inversiones.
          </p>

          <Link
            className="font-bold mt-12 py-4 px-8 rounded-full text-xl  text-white bg-[#ec600a]"
            href={"/calculadora"}
          >
            Empezar
          </Link>
        </div>
      </section>

      <section
        className={` font-semibold pl-16   ${montserrat.className} h-[70vh]  -mt-24 mb-16 flex items-center justify-center`}
      >
        <Image
          src={"/images/undraw_small_town_re_7mcn.svg"}
          alt="icon"
          width={1100}
          height={20}
        />
      </section>

      <section className="gap-20 min-h-[520px] flex flex-col items-center py-8 px-24">
        <p className={`font-semibold text-3xl ${karla.className}`}>
          Estamos aqui para facilitarte tu investigacion
        </p>
        <div className="flex ">
          <div className="flex gap-12">
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

      <footer className="bg flex flex-col flex-1 bg-orange-400">
        <div className=" flex items-center mt-28 h-[600px] justify-center w-full">
          <div className="flex flex-col items-center text-center md:w-[950px]">
            <p
              className={`text-6xl md:text-5xl  ${montserrat.className} font-bold`}
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
        </div>
        <div className="flex h-[260px] mx-12 pl-24 pr-32 pt-34 pt-20 justify-center gap-32 border-t  border-gray-500">
          <div className="flex w-52 flex-col  gap-3">
            <Link href={"/home"} className="flex items-center -mt-2">
              <LogoBlack />
            </Link>
            <p className={`font-semibold text-md ${karla.className}`}>
              Estamos aqui para facilitarte tu investigacion
            </p>
          </div>
          <div className={` flex   flex-col ${karla.className} `}>
            <p className={`font-bold text-black text-xl `}>Servicios</p>
            <Link className="font-medium text-gray-600" href={"/calculadora"}>
              Calculadora
            </Link>
          </div>

          <div className={` flex   flex-col ${karla.className} `}>
            <p className={`font-bold text-black text-xl `}>Quienes somos</p>
            <Link className="font-medium text-gray-600" href={"/about"}>
              About us
            </Link>
            <Link className="font-medium text-gray-600" href={"/contact"}>
              Contactanos
            </Link>
          </div>

          <div className={` flex   flex-col ${karla.className} `}>
            <p className={`font-bold text-black text-xl `}>Mas</p>
            <Link className="font-medium text-gray-600" href={"/about"}>
              Aprende
            </Link>
          </div>
        </div>
        <div className="flex h-[200px] justify-center  mr-44 ml-40 border-t-4  border-gray-600">
          <div className="flex gap-3">
            <Image src={"/icon/github.svg"} alt="icon" width={32} height={20} />
            <Image
              src={"/icon/linkedin.svg"}
              alt="icon"
              width={32}
              height={20}
            />
            <Image
              src={"/icon/instagram.svg"}
              alt="icon"
              width={32}
              height={20}
            />
            <Image
              src={"/icon/twitter-alt-square.svg"}
              alt="icon"
              width={32}
              height={20}
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
