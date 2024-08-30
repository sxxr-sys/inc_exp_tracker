import { Card, Checkbox, Label } from "./ui";

export const Record = ({ isChecked, children, label, balance, date }) => {
  return (
    <Card className="flex items-center justify-between px-6 py-3 rounded-xl">
      <div className="flex items-center gap-4">
        {isChecked && <Checkbox defaultChecked={isChecked} />}
        {children}
        <div className="flex flex-col">
          <Label className="leading-6">{label}</Label>
          {date && <Label className="text-[#6B7280] text-[12px] leading-4">{date}</Label>}
        </div>
      </div>
      <Label>{balance}</Label>
    </Card>
  );
};
