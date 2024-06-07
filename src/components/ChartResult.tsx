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

        <p className="font-bold flex text-2xl rounded-b-md w-full h-[70px] bg-blue-700 items-center justify-center">
          $ {DepósitoInicial + ".00"}
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

        <p className="font-bold flex rounded-b-md text-2xl rounded-md w-full h-[70px] bg-yellow-400 items-center justify-center">
          $ {(aportacionesTotales * AñosAInvertir).toFixed(2)}
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

        <p className="font-bold flex rounded-b-md text-2xl w-full h-[70px] bg-pink-300 items-center justify-center">
          $ {interesFinal.toFixed(2)}
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
          $ {capitalFinal.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ChartResult;
