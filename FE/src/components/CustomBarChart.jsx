import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui";
import { BAR_CHART_CONFIG } from "@/constants";

export const CustomBarChart = ({ chartData }) => {
  const renderBar = (dataKey, colorVar) => (
    <Bar
      dataKey={dataKey}
      fill={`var(${colorVar})`}
      barSize={16}
      radius={[100, 100, 0, 0]}
    />
  );

  return (
    <Card className="h-[284px] flex-1">
      <CardHeader className="py-4 px-6 border-b-[1px]">
        <CardTitle className="text-[16px]">Income - Expense</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between gap-4 px-6 py-8">
        <ChartContainer config={BAR_CHART_CONFIG} className="h-[162px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            barGap={0}
            barCategoryGap={40}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#CBD5E1"
            />
            <YAxis stroke="transparent" />
            <XAxis
              stroke="transparent"
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {renderBar("income", "--color-income")}
            {renderBar("expense", "--color-expense")}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
