import { Button, Input, Coins } from "@/components";

export const StepTwo = ({ handleNextClick }) => {
  return (
    <div className="flex flex-col gap-6 max-w-[384px]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center p-2 rounded-full justify-normal bg-[#0166FF] w-fit">
          <Coins />
        </div>
        <h1 className="text-[#0F172A] text-[24px] leading-8 font-semibold">
          Set up your cash Balance
        </h1>
      </div>
      <Input className="w-[384px] h-12" placeholder="Balance" />
      <p className="text-[#475569] text-[12px] leading-4">
        How much cash do you have in your wallet?
      </p>
      <Button
        onClick={handleNextClick}
        children="Confirm"
        className="bg-[#0166FF] text-[20px] leading-7 px-4 rounded-[20px]"
      />
    </div>
  );
};
