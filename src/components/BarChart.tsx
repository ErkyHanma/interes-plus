import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

import ToolTip from "./Tooltip";
import { years } from "@/lib/Chart.JS/Utils";
import { BarData } from "@/types";
import { calcularInteresCompuesto, calcularInteresSimple } from "@/lib/utils";
import ChartResult from "./ChartResult";

const BarChart = ({
  data,
  interestType,
}: {
  data: BarData;
  interestType: any;
}) => {
  const [interesCompuestoAcomulado, setInteresCompuestoAcomulado] = useState(0);
  const [interesSimpleAcomulado, setInteresSimpleAcomulado] = useState(0);

  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  defaults.plugins.title.display = true;
  defaults.plugins.title.align = "start";
  defaults.plugins.title.color = "black";
  defaults.plugins.legend.maxHeight = 1000;

  // Monto final de la inversion con interes compuesto
  const InteresCompuestoCapitalFinal = calcularInteresCompuesto({
    capitalInicial: data.DepósitoInicial,
    tasaInteresAnual: data.TasaDeInterésAnual,
    FrecuenciaAnualDeInterés: data.FrecuenciaAnualDeInterés,
    años: data.AñosAInvertir,
    AportacionesAdicionales: data.AportacionesAdicionales,
  });

  // Monto final de la inversion con interes simple
  const InteresSimpleCapitalFinal = calcularInteresSimple({
    capitalInicial: data.DepósitoInicial,
    tasaInteresAnual: data.TasaDeInterésAnual,
    FrecuenciaAnualDeInterés: data.FrecuenciaAnualDeInterés,
    años: data.AñosAInvertir,
    AportacionesAdicionales: data.AportacionesAdicionales,
  });

  // Monto de las aportaciones adicionales dependiendo la frecuencia por año
  const aportacionesTotales =
    data.AportacionesAdicionales *
    (data.FrecuenciaAnualDeInterés === "anualmente"
      ? 1
      : data.FrecuenciaAnualDeInterés === "semestralmente"
      ? 2
      : data.FrecuenciaAnualDeInterés === "bimestralmente"
      ? 6
      : data.FrecuenciaAnualDeInterés === "trimestralmente"
      ? 4
      : data.FrecuenciaAnualDeInterés === "cuatrimestralmente"
      ? 3
      : data.FrecuenciaAnualDeInterés === "mensualmente"
      ? 12
      : data.FrecuenciaAnualDeInterés === "quincenalmente"
      ? 24
      : data.FrecuenciaAnualDeInterés === "semanalmente"
      ? 52
      : 365);

  // console.log(
  //   InteresCompuestoCapitalFinal,
  //   data.DepósitoInicial,
  //   aportacionesTotales
  // );

  useEffect(() => {
    const totalInteresCompuesto =
      InteresCompuestoCapitalFinal -
      data.DepósitoInicial -
      aportacionesTotales * data.AñosAInvertir;

    const totalInteresSimple =
      InteresSimpleCapitalFinal - data.DepósitoInicial - aportacionesTotales;

    setInteresCompuestoAcomulado(totalInteresCompuesto);
    setInteresSimpleAcomulado(totalInteresSimple);
  }, [
    data,
    InteresCompuestoCapitalFinal,
    InteresSimpleCapitalFinal,
    aportacionesTotales,
  ]);

  console.log(interesCompuestoAcomulado);
  //console.log(interesSimpleAcomulado);

  const options = {
    plugins: {},
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  // Etiquetas del grafico (cantidad de años)
  const chartLabel = years({ count: data.AñosAInvertir });

  return (
    <div className="border py-6 -mt-4 px-4 shadow-md rounded-md">
      <div className="flex gap-2 items-center ">
        <span className="font-semibold">
          {interestType === "simple"
            ? "Calculadora de interés Simple"
            : "Calculadora de interés Compuesto"}
        </span>
        <ToolTip
          description={
            interestType === "simple"
              ? "El interés simple es el interés calculado únicamente sobre el monto principal original, sin reinvertir las ganancias generadas. Esta calculadora asume que los intereses no se reinvierten y se calculan solamente sobre el capital inicial."
              : "Interés compuesto es el interés generado sobre los intereses al reinvertirlos. Esta calculadora asume que cada año tus ganancias serán reinvertidas y no se hará ningún retiro."
          }
        />
      </div>
      <div className="h-[430px]">
        <Bar
          className="w-[400px]"
          options={options}
          data={{
            labels: chartLabel,
            datasets: [
              {
                label: "Depósito Inicial",
                data: chartLabel.map(() => data.DepósitoInicial),
                backgroundColor: "#006eab",
                borderRadius: 2,
              },
              {
                label: "Depósitos adicionales acumulados",
                data: chartLabel.map(
                  (_, index) => aportacionesTotales * (index + 1)
                ),
                backgroundColor: "#05B4FF",
                borderRadius: 2,
              },
              {
                label: "Interés acumulado",
                data: chartLabel.map((_, index) =>
                  interestType === "simple"
                    ? calcularInteresSimple({
                        capitalInicial: data.DepósitoInicial,
                        tasaInteresAnual: data.TasaDeInterésAnual,
                        FrecuenciaAnualDeInterés: data.FrecuenciaAnualDeInterés,
                        años: index + 1,
                        AportacionesAdicionales: data.AportacionesAdicionales,
                      }) - data.DepósitoInicial
                    : calcularInteresCompuesto({
                        capitalInicial: data.DepósitoInicial,
                        tasaInteresAnual: data.TasaDeInterésAnual,
                        FrecuenciaAnualDeInterés: data.FrecuenciaAnualDeInterés,
                        años: index + 1,
                        AportacionesAdicionales: data.AportacionesAdicionales,
                      }) -
                      data.DepósitoInicial -
                      aportacionesTotales * (index + 1)
                ),
                backgroundColor: "#75d7ff",
                borderRadius: 2,
              },
            ],
          }}
        />
      </div>
      <div className="flex-col flex px-4">
        <h1 className="font-bold my-2">Resultados</h1>
        <ChartResult
          DepósitoInicial={parseFloat(data.DepósitoInicial)}
          interesFinal={
            interestType === "simple"
              ? interesSimpleAcomulado
              : interesCompuestoAcomulado
          }
          capitalFinal={
            interestType === "simple"
              ? InteresSimpleCapitalFinal
              : InteresCompuestoCapitalFinal
          }
          aportacionesTotales={aportacionesTotales}
          AñosAInvertir={data.AñosAInvertir}
        />
      </div>
    </div>
  );
};

export default BarChart;
