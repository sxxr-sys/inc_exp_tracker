import { BalanceIcon } from "./icon/balanceIcon";
import { Input } from "./ui/input";

const data = {
  title: "Set up your cash Balance",
  paragraph: "How much cash do you have in your wallet?",
};

const Balance = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-[384px]">
      <div className="flex flex-col items-center gap-4">
        <BalanceIcon />
        <div className="text-2xl font-semibold">{data.title}</div>
        <Input placeholder="Email" className="w-[384px]" />
      </div>
      <p className="text-xs text-[#475569] mb-8">{data.paragraph}</p>
    </div>
  );
};

export default Balance;
