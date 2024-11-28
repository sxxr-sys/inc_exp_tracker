"use client";
import { Pie, PieChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    category: "Bills",
    amount: 5000000,
    fill: "var(--color-bills)",
  },
  {
    category: "Food",
    amount: 5000000,
    fill: "var(--color-food)",
  },
  {
    category: "Shopping",
    amount: 5000000,
    fill: "var(--color-shopping)",
  },
  {
    category: "Insurance",
    amount: 5000000,
    fill: "var(--color-insurance)",
  },
  {
    category: "Clothing",
    amount: 5000000,
    fill: "var(--color-clothing)",
  },
];

const chartConfig = {
  amount: {
    label: "amount",
  },
  bills: {
    label: "bills",
    color: "hsl(var(--chart-1))",
  },
  food: {
    label: "food",
    color: "hsl(var(--chart-2))",
  },
  shopping: {
    label: "shopping",
    color: "hsl(var(--chart-3))",
  },
  insurance: {
    label: "insurance",
    color: "hsl(var(--chart-4))",
  },
  clothing: {
    label: "clothing",
    color: "hsl(var(--chart-5))",
  },
};

export const IncomeExpensePieChart = () => {
  return (
    <Card className="flex">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[225px] w-[225px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={50}
            />

            <ChartLegend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              className="flex flex-col items-start gap-7 pt-0"

              content={<ChartLegendContent
                className="rounded-full"
                nameKey="category"
              />}
            />

          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className="flex flex-col items-start gap-5 w-[300px] my-auto">
        {chartData.map((el, i) => {
          return (
            <div key={i} className="flex items-center justify-between self-stretch text-sm text-[#111827]">
              <div className="flex items-center w-1/3 gap-2">
                <div className={`w-3 h-3 rounded-full bg-[${el.color}]`}></div>
                <p>{el.category}</p>
              </div>
              <div className="flex justify-end w-1/3">
                <p>{el.amount}</p>
                <p>₮</p>
              </div>
              <p className="flex justify-end w-1/3">15.50%</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
