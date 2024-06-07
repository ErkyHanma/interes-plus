"use client";

import { montserrat } from "@/components/ui/fonts";
import { inputValues } from "@/constants/links";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import BarChart from "@/components/BarChart";
import ToolTip from "@/components/Tooltip";

const Calculadora = () => {
  const [formData, setFormData] = useState({
    DepósitoInicial: 100,
    TasaDeInterésAnual: 3,
    AñosAInvertir: 3,
    FrecuenciaAnualDeInterés: "anualmente",
    AportacionesAdicionales: 10,
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };


  return (
    <div className="flex-col h-full">
      <div
        className={`${montserrat.className} flex justify-center font-bold text-3xl md:text-4xl mt-24`}
      >
        Calculadora de Intereses
      </div>

      <section className="flex md:flex-row flex-col mt-6">
        <div className="flex flex-1 flex-col md:flex-row gap-4 md:mx-24 md:mt-8">
          <div className="flex flex-col w-[400px] mr-16 gap-2 mx-4">
            {inputValues.map((item) => (
              <form key={item.id}>
                <div className="flex mb-1 mt-1 items-center gap-2">
                  <label className="font-semibold " htmlFor={item.id}>
                    {item.label}
                  </label>
                  <ToolTip description={item.descripcion} />
                </div>
                <div className="outlined-div border-[1px]  flex  gap-2 rounded-md py-2 px-2">
                  <Image
                    className=""
                    src={item.icon}
                    width={18}
                    height={30}
                    alt="Tip Icon"
                  />
                  {item.isInput ? (
                    <input
                      value={formData[item.name]}
                      name={item.name}
                      onChange={handleOnChange}
                      className="flex rounded-md bg-transparent outline-none w-[350px] text-lg"
                      id={item.id}
                      type={item.type}
                    />
                  ) : (
                    <select
                      className="flex rounded-md bg-transparent outline-none w-[350px] text-lg"
                      id={item.id}
                      name={item.name}
                      value={formData[item.name]}
                      onChange={handleOnChange}
                    >
                      <option value="anualmente">Anualmente</option>
                      <option value="bimestralmente">Bimestralmente</option>
                      <option value="trimestralmente">Trimestralmente </option>
                      <option value="cuatrimestralmente">Cuatrimestralmente </option>
                      <option value="semestralmente">Semestralmente</option>
                      <option value="mensualmente">Mensualmente</option>
                      <option value="quincenalmente">Quincenalmente</option>
                      <option value="semanalmente">Semanalmente</option>
                      <option value="diariamente">Diariamente</option>
                    </select>
                  )}
                </div>
              </form>
            ))}
          </div>

          <div className="flex-1 w-full">
            <BarChart data={formData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculadora;
