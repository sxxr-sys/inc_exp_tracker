import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  Money,
  SelectValue,
  Button,
} from "@/components";

export const StepOne = ({ handleNextClick }) => {
  return (
    <div className="flex flex-col gap-6 max-w-[384px]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center p-2 rounded-full justify-normal bg-[#0166FF] w-fit">
          <Money />
        </div>
        <h1 className="text-[#0F172A] text-[24px] leading-8 font-semibold">
          Select base currency
        </h1>
      </div>
      <Select defaultValue="MNT">
        <SelectTrigger className="w-[384px] p-4 h-16 text-[#1F2937] font-semibold leading-6">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-[#1F2937]">
            <SelectItem value="MNT">MNT - Mongolian Tugrik</SelectItem>
            <SelectItem value="USD">USD - American Dollar</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <p className="text-[#475569] text-[12px] leading-4">
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one
      </p>
      <Button onClick={handleNextClick} children="Confirm" className="bg-[#0166FF] text-[20px] leading-7 px-4 rounded-[20px]" />

    </div>
  );
};
