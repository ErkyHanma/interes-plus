export const headers_links = [
  {
    name: "Calculadora",
    href: "/calculadora",
  },
  {
    name: "Info",
    href: "/info",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const inputValues = [
  {
    label: "Depósito Inicial",
    name: "DepósitoInicial",
    id: "DepósitoInicial",
    type: "number",
    value: "formData.DepósitoInicial",
    descripcion: "Cantidad con la que vas a comenzar a invertir.",
    isInput: true,
    icon: "icon/usd-circle.svg",
  },
  {
    label: "Tasa De Interés Anual",
    name: "TasaDeInterésAnual",
    id: "TasaDeInterésAnual",
    type: "number",
    value: "formData.DepósitoInicial",
    descripcion:
      "Tasa de rendimiento anual que recibes expresada en porcentaje",
    isInput: true,
    icon: "icon/percentage.svg",
  },
  {
    label: "Años a Invertir",
    name: "AñosAInvertir",
    id: "AñosAInvertir",
    type: "number",
    value: "formData.DepósitoInicial",
    descripcion: "Número de años por los que vas a realizar la inversión.",
    isInput: true,
    icon: "icon/calendar-minus.svg",
  },
  {
    label: "Frecuencia Anual De Interés",
    name: "FrecuenciaAnualDeInterés",
    id: "FrecuenciaAnualDeInterés",
    type: "number",
    value: "formData.DepósitoInicial",
    descripcion:
      "Número de veces al año que se agrega el interés al capital (interés compuesto).",
    isInput: false,
    icon: "icon/clock.svg",
  },
  {
    label: "Aportaciones Adicionales",
    name: "AportacionesAdicionales",
    id: "AportacionesAdicionales",
    type: "number",
    value: "formData.DepósitoInicial",
    descripcion:
      "Depósitos adicionales a lo que invertiste inicialmente, la frecuencia del depósito es la misma que la que definas en 'Frecuencia anual de interés'.",
    isInput: true,
    icon: "icon/usd-circle.svg",
  },
];

export const revenueData = [
  {
    label: "Jan",
    revenue: 64854,
    cost: 32652,
  },
  {
    label: "Feb",
    revenue: 54628,
    cost: 42393,
  },
  {
    label: "Mar",
    revenue: 117238,
    cost: 50262,
  },
  {
    label: "Apr",
    revenue: 82830,
    cost: 64731,
  },
  {
    label: "May",
    revenue: 91208,
    cost: 41893,
  },
  {
    label: "Jun",
    revenue: 103609,
    cost: 83809,
  },
  {
    label: "Jul",
    revenue: 90974,
    cost: 44772,
  },
  {
    label: "Aug",
    revenue: 82919,
    cost: 37590,
  },
  {
    label: "Sep",
    revenue: 62407,
    cost: 43349,
  },
  {
    label: "Oct",
    revenue: 82528,
    cost: 45324,
  },
  {
    label: "Nov",
    revenue: 56979,
    cost: 47978,
  },
  {
    label: "Dec",
    revenue: 87436,
    cost: 175,
  },
];

export const ChartData = [
  {
    label: "Depósito Inicial",
  },
  {
    label: "Depositos adicionales acomulados",
  },
  {
    label: "Interes acomulado",
  },
];
