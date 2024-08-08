import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const ToolTip = ({ description }: { description: string }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src="icon/info.svg"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[12px] h-auto black-svg"
            alt="Tip Icon"
          />
        </TooltipTrigger>
        <TooltipContent className="w-[280px]">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolTip;
