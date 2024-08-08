"use client";

import { inter, montserrat } from "@/lib/fonts";
import { inputValues } from "@/constants/index";
import { ChangeEvent, useState, MouseEvent as ReactMouseEvent } from "react";
import BarChart from "@/components/BarChart";
import CompoundInterestForm from "@/components/forms/CompoundInterestForm";
import clsx from "clsx";

const Calculadora = () => {
  const [formData, setFormData] = useState({
    DepósitoInicial: 10000,
    TasaDeInterésAnual: 5,
    AñosAInvertir: 5,
    FrecuenciaAnualDeInterés: "anualmente",
    AportacionesAdicionales: 0,
  });

  const [interestType, setInterestType] = useState("simple");

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = event.target;
    setFormData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleInterestTypeChange = (
    event: ReactMouseEvent<HTMLButtonElement>
  ) => {
    const { value } = event.currentTarget;
    setInterestType(value);
  };

  return (
    <div className="flex-col h-full  -mt-12 md:-mt-0">
      <div
        className={`${montserrat.className} flex justify-center font-bold text-3xl md:text-4xl mt-16`}
      >
        Calculadora de Intereses
      </div>

      <section className="flex md:flex-row flex-col mt-8">
        <div className="flex px-8 xl:px-0 flex-1 flex-col gap-10 xl:flex-row xl:gap-4 xl:mx-20 xl:mt-8">
          <div className="border py-6 -mt-4 px-4 flex flex-col h-[550px] shadow-md rounded-md">
            <div className="flex gap-2 justify-between mb-4  rounded-md mx- p-2">
              <button
                className={clsx("font-semibold  p-2 flex-1  rounded-md", {
                  "bg-orange-500 text-white": interestType === "simple",
                })}
                value={"simple"}
                onClick={handleInterestTypeChange}
              >
                Interes SImple
              </button>
              <button
                className={clsx("font-semibold  p-2 flex-1 rounded-md", {
                  "bg-orange-500 text-white": interestType === "compuesto",
                })}
                value={"compuesto"}
                onClick={handleInterestTypeChange}
              >
                Interes Compuesto
              </button>
            </div>

            <form className="flex flex-col h-80 w-full xl:w-[340px]  mr-14 gap-2 mx-4">
              <CompoundInterestForm
                inputValues={inputValues}
                formData={formData}
                handleOnChange={handleOnChange}
              />
            </form>
          </div>

          <div className="w-full mb-32">
            <BarChart data={formData} interestType={interestType} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculadora;
