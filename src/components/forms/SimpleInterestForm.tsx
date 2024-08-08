import React, { ChangeEvent } from "react";
import ToolTip from "../Tooltip";
import Image from "next/image";

interface InputValue {
  label: string;
  name: string;
  id: string;
  type: string;
  value: string;
  descripcion: string;
  isInput: boolean;
  icon: string;
}

interface FormData {
  [key: string]: number | string;
}

interface FormFieldProps {
  inputValues: InputValue[];
  formData: FormData;
  handleOnChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const SimpleInterestForm: React.FC<FormFieldProps> = ({
  inputValues,
  formData,
  handleOnChange,
}) => {
  return (
    <div className="flex flex-col w-[380px] mr-14 gap-2 mx-4">
      {inputValues.map((item) => (
        <div key={item.id}>
          <div className="flex mb-1 mt-1 items-center gap-2">
            <label className="font-semibold" htmlFor={item.id.toString()}>
              {item.label}
            </label>
            <ToolTip description={item.descripcion} />
          </div>
          <div className="outlined-div border-[1px] flex gap-2 rounded-md py-2 px-2">
            <Image
              src={item.icon}
              width="0"
              height="0"
              sizes="100vw"
              className="w-[18px] h-auto black-svg"
              alt="Tip Icon"
            />
            {item.isInput ? (
              <input
                value={formData[item.name] as string}
                name={item.name}
                onChange={handleOnChange}
                className="flex rounded-md bg-transparent outline-none w-[350px] text-lg"
                id={item.id}
                type={item.type || "text"}
              />
            ) : (
              <select
                className="flex rounded-md bg-transparent outline-none w-[350px] text-lg"
                id={item.id}
                name={item.name}
                value={formData[item.name] as string}
                onChange={handleOnChange}
              >
                <option value="anualmente">Anualmente</option>
                <option value="mensualmente">Mensualmente</option>
                <option value="quincenalmente">Quincenalmente</option>
                <option value="semanalmente">Semanalmente</option>
                <option value="diariamente">Diariamente</option>
              </select>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleInterestForm;
