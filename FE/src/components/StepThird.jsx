import { Button, Check } from "@/components";
import { useRouter } from "next/router";

export const StepThird = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 max-w-[384px]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center p-2 rounded-full justify-normal bg-[#0166FF] w-fit">
          <Check />
        </div>
        <h1 className="text-[#0F172A] text-[24px] leading-8 font-semibold">
          Good Job!
        </h1>
      </div>
      <p className="text-[#475569] leading-6">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </p>
      <Button
        onClick={() => router.push("/dashboard")}
        children="Go to Dashboard"
        className="bg-[#0166FF] text-[20px] leading-7 px-4 rounded-[20px]"
      />
    </div>
  );
};
