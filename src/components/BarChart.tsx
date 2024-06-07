import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

import ToolTip from "./Tooltip";
import { years } from "@/lib/Chart.JS/Utils";
import { BarData } from "@/types";
import { calcularInteresCompuesto } from "@/lib/utils";

const BarChart = ({ data }: BarData) => {
  const [interesFinal, setInteresFinal] = useState(0);

  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  defaults.plugins.title.display = true;
  defaults.plugins.title.align = "start";
  defaults.plugins.title.color = "black";
  defaults.plugins.legend.maxHeight = 1000;

  // Monto final de la inversion
  const capitalFinal = calcularInteresCompuesto({
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
      : data.FrecuenciaAnualDeInterés === "mensualmente"
      ? 12
      : data.FrecuenciaAnualDeInterés === "quincenalmente"
      ? 24
      : data.FrecuenciaAnualDeInterés === "semanalmente"
      ? 52
      : 365);

  useEffect(() => {
    const totalInteres =
      capitalFinal -
      data.DepósitoInicial -
      aportacionesTotales * data.AñosAInvertir;
    setInteresFinal(totalInteres);
  }, [data, capitalFinal, aportacionesTotales]);

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
    <div className="">
      <div className="flex gap-2 items-center">
        <span className="font-semibold">Calculadora de interés Compuesto</span>
        <ToolTip description="Interés compuesto es el interés generado sobre los intereses al reinvertirlos. Esta calculadora asume que cada año tus ganancias serán reinvertidas y no se hará ningún retiro." />
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
                backgroundColor: "rgba(43, 63, 229, 0.8)",
                borderRadius: 5,
              },
              {
                label: "Depósitos adicionales acumulados",
                data: chartLabel.map(
                  (_, index) => aportacionesTotales * (index + 1)
                ),
                backgroundColor: "rgba(250, 192, 19, 0.8)",
                borderRadius: 5,
              },
              {
                label: "Interés acumulado",
                data: chartLabel.map((_, index) =>
                  (
                    calcularInteresCompuesto({
                      capitalInicial: data.DepósitoInicial,
                      tasaInteresAnual: data.TasaDeInterésAnual,
                      FrecuenciaAnualDeInterés: data.FrecuenciaAnualDeInterés,
                      años: index + 1,
                      AportacionesAdicionales: data.AportacionesAdicionales,
                    }) -
                    data.DepósitoInicial -
                    aportacionesTotales * (index + 1)
                  ).toFixed(2)
                ),
                backgroundColor: "rgba(253, 135, 135, 0.8)",
                borderRadius: 5,
              },
            ],
          }}
        />
      </div>
      <div>
        <p>Deposito Inicial: {data.DepósitoInicial + ".00"}</p>
        <p>
          Depósitos Adicionales Acumulados:{"  "}
          {(aportacionesTotales * data.AñosAInvertir).toFixed(2)}
        </p>
        <p>Interés Acumulado: {interesFinal.toFixed(2)}</p>
        <p>Total: {capitalFinal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BarChart;
