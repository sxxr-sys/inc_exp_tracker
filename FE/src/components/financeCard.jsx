export const FinanceCard = ({
  dotColor,
  label,
  amount,
  currency,
  amountLabel,
  incrementOrDecrement,
  fromLastMonth,
}) => {
  return (
    <div className="w-[384px] flex flex-col items-start rounded-xl bg-white">
      <div className="flex items-center self-stretch gap-2 p-4 border-b-[1px]">
        <div className={`w-2 h-2 rounded-full ` + dotColor}></div>
        <p className="font-semibold">{label}</p>
      </div>
      <div className="flex flex-col items-start self-stretch gap-4 px-6 pt-5 pb-6">
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-start gap-1 text-4xl font-semibold">
            <p>{amount}</p>
            <p>{currency}</p>
          </div>
          <p className="text-[18px] text-[#64748B]">{amountLabel}</p>
        </div>
        <div className="flex items-center gap-2">
          {incrementOrDecrement}
          <p>{fromLastMonth} from last month</p>
        </div>
      </div>
    </div>
  );
};
