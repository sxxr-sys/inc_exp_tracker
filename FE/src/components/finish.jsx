import { FinishIcon } from "./icon/finishIcon";

const data = {
  title: "Good Job!",
  paragraph:
    "Your very first account has been created. Now continue to dashboard and start tracking",
};

export const Finish = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-[384px]">
      <div className="flex flex-col items-center gap-4">
        <FinishIcon />
        <div className="text-2xl font-semibold">{data.title}</div>
      </div>
      <p className="text-xs text-[#475569] mb-8">{data.paragraph}</p>
    </div>
  );
};
