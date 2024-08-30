import React, { useState, useContext } from 'react';
import {
  Button,
  Card,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Record,
  ResizablePanel,
  ResizablePanelGroup,
  Slider,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Logo,
} from "@/components";

import { CATEGORIES } from "@/constants";
import { formatCurrency } from "@/lib";
import { ArrowLeft, ArrowRight, EyeIcon, Plus } from "lucide-react";
import { DialogContext } from "../_app";
import { Food } from "@/components/icons/Food";
import { Renting } from "@/components/icons/Renting";

const Styles = {
  radioGroupItem: "items-start space-x-2 p-3 inline-flex rounded-lg h-8",
  radioGroupItemDot: "border-solid border-[#aeb7c6]",
  recordsTitle: "text-2xl font-semibold text-[#000]",
  recordsSmTitle: "text-base font-semibold",
  recordsClear:
    "opacity-[20%] flex h-8 p-3 justify-center gap-1 rounded-[20px]",
  search: "rounded-[8px] h-8 p-4 border-solid border-[#D1D5DB] bg-[#F3F4F6]",
  amountRange: "bg-[#F3F4F6] h-12",
};

const Records = () => {
  const { btnRef } = useContext(DialogContext);

  // Initialize state for slider and input values
  const [values, setValues] = useState([0, 1000]);

  const handleClick = () => {
    btnRef.current.click();
  };

  // Handle slider value changes
  const handleSliderChange = (newValues) => {
    setValues(newValues);
  };

  // Handle input field changes
  const handleInputChange = (index, newValue) => {
    const value = Number(newValue);
    if (!isNaN(value)) {
      const updatedValues = [...values];
      updatedValues[index] = value;
      setValues(updatedValues);
    }
  };

  return (
    <div>
      <ResizablePanelGroup direction="horizontal" className="flex gap-6">
        <ResizablePanel maxSize={23.5}>
          <Card className="flex flex-col gap-6 px-4 py-6">
            <p className={Styles.recordsTitle}>Records</p>
            <Button
              onClick={handleClick}
              className={"px-3 rounded-5 h-8 rounded-[20px] bg-[#0166FF]"}
            >
              <Plus className="mr-[6.5px]" />
              Add
            </Button>
            <Input placeholder="Search" className={Styles.search} />
            <div className="flex flex-col gap-4 flex-start text-[#1F2937]">
              <Label className={Styles.recordsSmTitle}>Types</Label>
              <RadioGroup defaultValue="All">
                <div className={Styles.radioGroupItem}>
                  <RadioGroupItem
                    className={Styles.radioGroupItemDot}
                    value="All"
                    id="r1"
                  />
                  <Label htmlFor="r1">All</Label>
                </div>
                <div className={Styles.radioGroupItem}>
                  <RadioGroupItem
                    className={Styles.radioGroupItemDot}
                    value="Income"
                    id="r2"
                  />
                  <Label htmlFor="r2">Income</Label>
                </div>
                <div className={Styles.radioGroupItem}>
                  <RadioGroupItem
                    className={Styles.radioGroupItemDot}
                    value="Expense"
                    id="r3"
                  />
                  <Label htmlFor="r3">Expense</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-[#1F2937] items-center">
                <Label className={Styles.recordsSmTitle}>Category</Label>
                <Label className={Styles.recordsClear}>Clear</Label>
              </div>
              {CATEGORIES.map((category) => {
                return (
                  <div
                    key={category}
                    className="flex items-center gap-2 px-3 rounded-[8px]"
                  >
                    <EyeIcon
                      className="w-4 h-4"
                      size={20}
                      strokeWidth={3.7}
                      stroke="#94A3B8"
                      stopColor="#fff"
                    />
                    <Label className="text-[#1F2937] text-base">
                      {category}
                    </Label>
                  </div>
                );
              })}
              <Button className="flex justify-start gap-2 w-[125px] h-8 bg-transparent px-3">
                <Plus size={20} color="#0166FF" />
                <Label className="text-[#1F2937] leading-6">Category</Label>
              </Button>
              <div className="flex flex-col gap-4">
                <Label className={Styles.recordsSmTitle}>Amount Range</Label>
                <div className="flex gap-4">
                  <Input
                    type="number"
                    value={values[0]}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                    className={Styles.amountRange}
                    max={1000}
                    min={0}
                  />
                  <Input
                    type="number"
                    value={values[1]}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                    className={Styles.amountRange}
                    max={1000}
                    min={0}
                  />
                </div>
                <Slider
                  value={values}
                  onValueChange={handleSliderChange}
                  defaultValue={[0, 1000]}
                  max={1000}
                />
              </div>
            </div>
          </Card>
        </ResizablePanel>
        <ResizablePanel minSize={76.5}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button className="flex items-center justify-center size-8 bg-[#E5E7EB] rounded-[8px]">
                  <div>
                    <ArrowLeft size={15} className="text-black" />
                  </div>
                </Button>
                <Label className="leading-6">Last 30 Days</Label>
                <Button className="size-8 bg-[#E5E7EB] rounded-[8px] flex items-center justify-center">
                  <div>
                    <ArrowRight size={15} className="text-black" />
                  </div>
                </Button>
              </div>
              <div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px] h-12 rounded-[8px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Record label="Select All" balance={formatCurrency(-35500)} />
            <div className="flex flex-col gap-3">
              <Label className="font-semibold leading-6">Today</Label>
              <Record
                label="Lending & Renting"
                balance={formatCurrency(-35500)}
                date="14:00"
              >
                <Food />
              </Record>
              <Record
                label="Lending & Renting"
                balance={formatCurrency(-35500)}
                date="14:00"
              >
                <Renting />
              </Record>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Records;
