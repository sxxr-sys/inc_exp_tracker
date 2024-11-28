import { MoneyIcon } from "./icon/moneyIcon";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = {
  title: "Select base currency",
  paragraph:
    "Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one ",
};

const Currency = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-[384px]">
      <div className="flex flex-col items-center gap-4">
        <MoneyIcon />
        <div className="text-2xl font-semibold">{data.title}</div>
      </div>
      <Select>
        <SelectTrigger className="w-[384px h-[64px]">
          <SelectValue placeholder="MNT-Mongolian Tugrik" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="MNT">MNT-Mongolian Tugrik</SelectItem>
          <SelectItem value="USD">USD-American Dollar</SelectItem>
        </SelectContent>
      </Select>

      <p className="text-xs text-[#475569] mb-8">{data.paragraph}</p>
    </div>
  );
};

export default Currency;
