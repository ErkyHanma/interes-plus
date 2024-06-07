import * as z from "zod";

export const CalculatorValidation = z.object({
  password: z.string().min(8, { message: "At least 8 characters requiered" }),
  DepósitoInicial: z.number(),
  TasaDeInterésAnual: z.number(),
  AñosAInvertir: z.number(),
  FrecuenciaAnualDeInterés: z.any(),
  AportacionesAdicionales: z.number(),
});
