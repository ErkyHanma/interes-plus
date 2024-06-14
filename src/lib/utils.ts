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
    case "semestralmente":
      numeroCompuestosAnuales = 2;
      break;
    case "bimestralmente":
      numeroCompuestosAnuales = 6;
      break;
    case "trimestralmente":
      numeroCompuestosAnuales = 4;
      break;
    case "cuatrimestralmente":
      numeroCompuestosAnuales = 3;
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

  const FV_initial = parseFloat(
    capitalInicial *
      Math.pow(
        1 + tasaInteresDecimal / numeroCompuestosAnuales,
        numeroCompuestosAnuales * años
      )
  );

  const FV_contributions = parseFloat(
    (AportacionesAdicionales *
      (Math.pow(
        1 + tasaInteresDecimal / numeroCompuestosAnuales,
        numeroCompuestosAnuales * años
      ) -
        1)) /
      (tasaInteresDecimal / numeroCompuestosAnuales)
  );

  const montoAcumulado = FV_initial + FV_contributions;

  return montoAcumulado;
};

export const calcularInteresSimple = ({
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

  let numeroCompuestosAnuales: number;

  switch (FrecuenciaAnualDeInterés) {
    case "anualmente":
      numeroCompuestosAnuales = 1;
      break;
    case "semestralmente":
      numeroCompuestosAnuales = 2;
      break;
    case "bimestralmente":
      numeroCompuestosAnuales = 6;
      break;
    case "trimestralmente":
      numeroCompuestosAnuales = 4;
      break;
    case "cuatrimestralmente":
      numeroCompuestosAnuales = 3;
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

  const InteresSimpleTotal = parseFloat(
    capitalInicial * tasaInteresDecimal * años
  );

  const montoAcumulado =
    InteresSimpleTotal +
    parseFloat(capitalInicial) +
    parseFloat(AportacionesAdicionales === "" ? 0.00 : AportacionesAdicionales);

  return montoAcumulado;
};

// export const calcularInteresSimple = ({
//   capitalInicial,
//   tasaInteresAnual,
//   FrecuenciaAnualDeInterés,
//   años,
//   AportacionesAdicionales,
// }: {
//   capitalInicial: number;
//   tasaInteresAnual: number;
//   FrecuenciaAnualDeInterés: string;
//   años: number;
//   AportacionesAdicionales: number;
// }) => {
//   const tasaInteresDecimal = tasaInteresAnual / 100;

//   // Calcular interés sobre el capital inicial

//   // Determinar la frecuencia de las aportaciones
//   let numeroAportacionesAnuales;

//   switch (FrecuenciaAnualDeInterés) {
//     case "anualmente":
//       numeroAportacionesAnuales = 1;
//       break;
//     case "mensualmente":
//       numeroAportacionesAnuales = 12;
//       break;
//     case "quincenalmente":
//       numeroAportacionesAnuales = 24;
//       break;
//     case "semanalmente":
//       numeroAportacionesAnuales = 52;
//       break;
//     default:
//       throw new Error("Frecuencia de aportaciones no válida");
//   }
// };
