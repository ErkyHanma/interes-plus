import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calcularInteresCompuesto = ({
  capitalInicial,
  tasaInteresAnual,
  FrecuenciaAnualDeInterés,
  años,
  AportacionesAdicionales,
}: {
  capitalInicial: number;
  tasaInteresAnual: number;
  FrecuenciaAnualDeInterés: string;
  años: number;
  AportacionesAdicionales: number;
}) => {
  const tasaInteresDecimal = tasaInteresAnual / 100;

  let numeroCompuestosAnuales;

  switch (FrecuenciaAnualDeInterés) {
    case "anualmente":
      numeroCompuestosAnuales = 1;
      break;
    case "mensualmente":
      numeroCompuestosAnuales = 12;
      break;
    case "quincenalmente":
      numeroCompuestosAnuales = 24;
      break;
    case "semanalmente":
      numeroCompuestosAnuales = 52;
      break;
    case "diariamente":
      numeroCompuestosAnuales = 365;
      break;
    default:
      throw new Error("Frecuencia de interés no válida");
  }

  const FV_initial =
    capitalInicial *
    Math.pow(
      1 + tasaInteresDecimal / numeroCompuestosAnuales,
      numeroCompuestosAnuales * años
    );

  const FV_contributions =
    (AportacionesAdicionales *
      (Math.pow(
        1 + tasaInteresDecimal / numeroCompuestosAnuales,
        numeroCompuestosAnuales * años
      ) -
        1)) /
    (tasaInteresDecimal / numeroCompuestosAnuales);

  const montoAcumulado = FV_initial + FV_contributions;

  return montoAcumulado;
};
