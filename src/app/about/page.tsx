import Footer from "@/components/Footer";
import LogoBlack from "@/components/LogoBlack";
import { aboutInfo } from "@/constants";
import { montserrat, karla, roboto_Mono, flow_Circular } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const about = () => {
  return (
    <div className="flex  flex-col">
      <section
        className={`${montserrat.className} flex  gap-3 px-36 justify-center h-[90vh] items-center`}
      >
        <div className="flex flex-col flex-1 gap-6">
          <p className="font-bold text-5xl w-[32rem]">
            Cambiando la forma en la que visualizas tus inversiones
          </p>
          <div
            className={`${flow_Circular.className} -mt-6 pl-1 text-[#ec600a]`}
          >
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
            src={"/images/undraw_data_re_80ws (1).svg"}
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

      <section className="h-[600px] py-16 px-28 flex w-full ">
        <div className="flex flex-1 mr-">
          <Image
            src={"/images/undraw_my_personal_files_re_3q0p.svg"}
            alt="icon"
            width={500}
            height={20}
          />
        </div>
        <div className={`${montserrat.className} flex flex-col flex-1 gap-8`}>
          <p className="font-bold  text-4xl">Nuestra Historia</p>
          <p className="gap-2 flex flex-col">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              molestias delectus laborum exercitationem quos molestiae odit
              laboriosam reprehenderit asperiores repudiandae ipsum quia natus
              quisquam in architecto veniam, tenetur doloribus aspernatur!
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              molestias delectus laborum exercitationem quos molestiae odit
              laboriosam reprehenderit asperiores repudiandae ipsum quia natus
              quisquam in architecto veniam, tenetur doloribus aspernatur!
            </span>

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              molestias delectus laborum exercitationem quos molestiae odit
              laboriosam reprehenderit asperiores repudiandae ipsum quia natus
              quisquam in architecto veniam, tenetur doloribus aspernatur!
            </span>
          </p>
        </div>
      </section>

      <section className="w-full my-36 flex items-center justify-center">
        <div className="flex flex-col items-center text-center md:w-[950px] ">
          <p
            className={`text-6xl md:text-4xl  ${montserrat.className} font-bold`}
          >
            Creado por entusiastas de la tecnología, no lo dudes y únete a
            nosotros.
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
    </div>
  );
};

export default about;
