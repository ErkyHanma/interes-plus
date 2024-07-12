import { numberWithCommas } from "@/lib/utils";
import Image from "next/image";

const ChartResult = ({
  DepósitoInicial,
  capitalFinal,
  aportacionesTotales,
  AñosAInvertir,
  interesFinal,
}: {
  DepósitoInicial: number;
  capitalFinal: number;
  aportacionesTotales: number;
  AñosAInvertir: number;
  interesFinal: number;
}) => {


  const safeDepositoInicial = isNaN(DepósitoInicial)
    ? (0).toFixed(2)
    : DepósitoInicial.toFixed(2);
  const safeCapitalFinal = isNaN(capitalFinal)
    ? (0).toFixed(2)
    : capitalFinal.toFixed(2);
  const safeInteresFinal = isNaN(interesFinal)
    ? (0).toFixed(2)
    : interesFinal.toFixed(2);

  return (
    <div className="flex gap-2">
      <div className="flex shadowClass hover:bg-gray-50 duration-300 border rounded-md gap-16  border-gray-300 flex-col  items-center flex-1 h-full  ">
        <div className="flex-col px-2 gap-3 mt-3 flex items-center">
          <p className="font-bold text-lg text-center">Deposito Inicial</p>
          <Image
            className=""
            src="icon/wallet.svg"
            width={60}
            height={30}
            alt="Tip Icon"
          />
        </div>

        <p className="font-bold flex text-2xl rounded-b-md w-full h-[70px] bg-[#006eab] items-center justify-center">
          {numberWithCommas(safeDepositoInicial)}
        </p>
      </div>
      <div className="flex border shadowClass rounded-md gap-8  mb-2 border-gray-300 flex-col  items-center flex-1  h-full ">
        <div className="flex-col px-2 gap-3 mb-[50px] mt-3 flex items-center">
          <p className="font-bold text-lg  text-center">
            Depósitos Adicionales Acumulados
          </p>
          <Image
            className=""
            src="icon/coins.svg"
            width={60}
            height={30}
            alt="Tip Icon"
          />
        </div>

        <p className="font-bold flex rounded-b-md text-2xl rounded-md w-full h-[70px] bg-[#05B4FF] items-center justify-center">
          $ {numberWithCommas((aportacionesTotales * AñosAInvertir).toFixed(2))}
        </p>
      </div>
      <div className="flex border shadowClass rounded-md gap-8  mb-2 border-gray-300 flex-col  items-center flex-1  h-full ">
        <div className="flex-col px-2 gap-3 mb-[50px] mt-3 flex items-center">
          <p className="font-bold text-lg text-center">Interés Acumulado</p>
          <Image
            className=""
            src="icon/chart-histogram.svg"
            width={60}
            height={30}
            alt="Tip Icon"
          />
        </div>

        <p className="font-bold flex rounded-b-md text-2xl w-full h-[70px] bg-[#75d7ff] items-center justify-center">
          $ {numberWithCommas(safeInteresFinal)}
        </p>
      </div>
      <div className="flex border shadowClass rounded-md gap-8 mb-2 border-gray-300 flex-col  items-center flex-1 h-full  ">
        <div className="flex-col px-2 gap-3 mb-[50px] mt-3 flex items-center">
          <p className="font-bold text-lg text-center">Total</p>
          <Image
            className=""
            src="icon/sack-dollar.svg"
            width={60}
            height={30}
            alt="Tip Icon"
          />
        </div>

        <p className="font-bold flex  rounded-b-md text-2xl w-full h-[70px] bg-green-300 items-center justify-center">
          $ {numberWithCommas(safeCapitalFinal)}
        </p>
      </div>
    </div>
  );
};

export default ChartResult;
