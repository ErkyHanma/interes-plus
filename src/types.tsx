export type BarData = {
  DepósitoInicial: number;
  TasaDeInterésAnual: number;
  AñosAInvertir: number;
  FrecuenciaAnualDeInterés: string;
  AportacionesAdicionales: number;
};

interface DeveloperContact {
  name: string;
  info: string;
  link?: string;
}

export interface ContactDetail {
  icon: string;
  title: string;
  dato: {
    dev1: DeveloperContact;
    dev2: DeveloperContact;
    dev3: DeveloperContact;
  };
}
