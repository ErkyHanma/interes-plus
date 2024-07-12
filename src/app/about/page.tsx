import LogoBlack from "@/components/LogoBlack";
import { aboutInfo } from "@/constants";
import { montserrat, karla, roboto_Mono, flow_Circular } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const about = () => {
  return (
    <div className="flex flex-col">
      <section
        className={`${montserrat.className} flex  gap-3 px-36 justify-center h-[90vh] items-center`}
      >
        <div className="flex flex-col flex-1 gap-6">
          <p className="font-bold text-5xl w-[32rem]">
          Cambiando la forma en la que visualizas tus inversiones
          </p>
          <div className={`${flow_Circular.className} -mt-6 pl-1 text-[#ec600a]`}>
            ........... .....
          </div>
          <p className="text-md -mt-4  w-[28rem] font-medium">
            Fundada con la idea de crear una herramienta sencilla para la
            visualización y cálculo de inversiones, Interes-Plus ofrece
            tecnología que reduce errores humanos y proporciona resultados
            confiables. Los gráficos ayudan a visualizar los datos y a
            comprender mejor las inversiones a lo largo del tiempo.
          </p>
        </div>
        <div className="flex-1 ml-20">
          <Image
            src={"/icon/undraw_data_re_80ws (1).svg"}
            alt="icon"
            width={500}
            height={20}
          />
        </div>
      </section>

      <section
        className={` ${montserrat.className} pb-24  bg-gray-200 min-h-[35rem] pt-20 gap-24  px-36  
      >  flex flex-col`}
      >
        <div className="h-80 flex-1 border-b pb-20 border-gray-500 justify-between gap-20 flex">
          <p className="text-4xl flex-1  font-bold">
            Diseñado con pasión <br></br>
            para tus finanzas
          </p>

          <div className="flex flex-col flex-1 gap-6 font-semibold text-sm text-gray-500">
            <p>
              Creemos en el poder de las herramientas financieras para fomentar
              conexiones educativas y capacitar a los profesionales financieros
              para ofrecer experiencias de inversión confiables y productivas.
            </p>
            <p>
              También creemos en el poder de la tecnología para ayudar a los
              equipos financieros a desbloquear su creatividad y conectarse con
              más inversores que nunca.
            </p>
            <p>
              Estamos comprometidos a ayudar a nuestros usuarios a hacer crecer
              sus inversiones más rápido al liberar el potencial de las
              herramientas financieras y la tecnología.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {aboutInfo.map((item) => (
            <div key={item.title} className="gap-3 flex flex-col">
              <h1 className={`  ${karla.className}   font-semibold text-3xl`}>
                {item.title}
              </h1>

              <span className="w-16 ml-2 h-[2px] -mt-1 bg-orange-500"></span>

              <p className="text-gray-600 text-md font-medium">{item.info}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg flex flex-col flex-1 bg-orange-400">
        <div className="flex h-[260px] mx-12 mt-36 pl-24 pr-32 pt-34 pt-20 justify-center gap-32">
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
    </div>
  );
};

export default about;
