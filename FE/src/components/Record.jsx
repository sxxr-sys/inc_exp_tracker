import { EyeIcon } from "./icon/eyeIcon";
import { Radio } from "./icon/radio";
import { TrailingIcon } from "./icon/trailingIcon";
import { Button } from "./ui/button";

import { Slider } from "@/components/ui/slider"

import { useContext } from "react";
import { DialogContext } from "@/pages/_app";
import { AddCategory } from "./addCategory";
import { PlusIcon } from "./icon/plusIcon";
import { Input } from "./ui/input";

const Categories = [
  "Food & Drinks",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others",
];


export const Record = () => {

  const { recordBtnRef} = useContext(DialogContext)

  const recordBtnHandler = () => {
    console.log(recordBtnRef,'ref')
    recordBtnRef.current.click();
   }

  return (
    <div className="inline-flex p-6 flex-col items-start gap-6 rounded-xl border-solid border-[1px] border-[#E5E7EB] mt-6">
      <div className="flex flex-col items-start self-stretch gap-6">
        <h3 className="text-2xl font-semibold">Records</h3>
        <Button onClick={recordBtnHandler} className="flex items-center self-stretch justify-center h-8 gap-1 bg-[#0166FF] rounded-[20px]">
          <PlusIcon />
          Add
        </Button>
      </div>
      <div className="flex w-[250px] max-w-[320px] flex-col justify-center items-center rounded-lg">
        <Input
          className="flex h-8 max-w-[320px] p-4 items-center self-stretch rounded-lg border-[1px] border-solid border-[#D1D5DB]"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col items-start gap-4">
        <h4 className="text-base font-semibold">Types</h4>
        <div className="w-[109px] h-[104px]">
          <Button variant="ghost" className="gap-2">
            <Radio />
            All
          </Button>
          <Button variant="ghost" className="gap-2">
            <Radio />
            Income
          </Button>
          <Button variant="ghost" className="gap-2">
            <Radio />
            Expense
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch gap-4">
        <div className="flex items-center self-stretch justify-between">
          <h4 className="font-semibold">Category</h4>
          <Button
            variant="ghost"
            className="flex items-center justify-center h-8 gap-1 rounded-[20px] text-gray-400"
          >
            Clear
          </Button>
        </div>
        <div className="flex flex-col items-start self-stretch gap-2">
          {Categories.map((category, index) => {
            return (
              <div className="flex items-center self-stretch justify-between" key={index}>
                <Button
                  variant="ghost"
                  className="flex items-center justify-center h-8 gap-2"
                  key={index}
                >
                  <EyeIcon />
                  {category}
                </Button>
                <TrailingIcon />
              </div>
            );
          })}
          <div className="flex items-center self-stretch justify-between">
              <AddCategory />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h4 className="text-base font-semibold">Amount Range</h4>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-start self-stretch gap-4">
            <Input className="w-[120px] flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-[#D1D5DB] bg-[#F3F4F6]" />
            <Input className="w-[120px] flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-[#D1D5DB] bg-[#F3F4F6]" />
          </div>
          <div className="flex w-[245px] items-start content-start gap-[189px] flex-wrap">
            <Slider defaultValue={[0]} max={100000} step={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
