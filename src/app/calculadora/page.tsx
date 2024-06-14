"use client";

import { inter, montserrat } from "@/components/ui/fonts";
import { inputValues } from "@/constants/links";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import BarChart from "@/components/BarChart";
import ToolTip from "@/components/Tooltip";
import CompoundInterestForm from "@/components/forms/CompoundInterestForm";
import Link from "next/link";

const Calculadora = () => {
  const [formData, setFormData] = useState({
    DepósitoInicial: 100,
    TasaDeInterésAnual: 3,
    AñosAInvertir: 4,
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
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInterestType(event.target.value);
  };

  return (
    <div className="flex-col h-full">
      <div
        className={`${montserrat.className} flex justify-center font-bold text-3xl md:text-4xl mt-16`}
      >
        Calculadora de Intereses
      </div>

      <section className="flex md:flex-row flex-col mt-8">
        <div className="flex flex-1 flex-col md:flex-row gap-4 md:mx-20 md:mt-8">
          <div className="border py-6 -mt-4 px-4 flex flex-col shadow-md rounded-md">
            <div className="flex gap-24 justify-center mb-4">
              <label className="">
                <input
                  className="m-2"
                  type="radio"
                  name="interestType"
                  value="simple"
                  checked={interestType === "simple"}
                  onChange={handleInterestTypeChange}
                />
                Interes simple
              </label>

              <div className="gap-2 flex items-center">
                <label className="">
                  <input
                    className="m-2"
                    type="radio"
                    name="interestType"
                    value="compound"
                    checked={interestType === "compound"}
                    onChange={handleInterestTypeChange}
                  />
                  Interes Compuesto
                </label>
              </div>
            </div>

            <form className="flex flex-col w-[380px]  mr-14 gap-2 mx-4">
              <CompoundInterestForm
                inputValues={inputValues}
                formData={formData}
                handleOnChange={handleOnChange}
              />
            </form>
          </div>

          <div className="flex-1 w-full">
            <BarChart data={formData} interestType={interestType} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculadora;
