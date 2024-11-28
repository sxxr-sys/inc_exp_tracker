import { Card } from "@/components/card";
import { FinanceCard } from "@/components/financeCard";
import { DecreasingIcon } from "@/components/icon/decreasingIcon";
import { HomeIcon } from "@/components/icon/homeIcon";
import { IncreasingIcon } from "@/components/icon/increasingIcon";
import { IncomeExpenseChart } from "@/components/incomeExpenseChart";
import { IncomeExpensePieChart } from "@/components/incomeExpensePieChart";

const dataRecords = [
  {
    icon: <HomeIcon />,
    name: "Lending & Renting",
    time: "3 hours ago",
    amount: "1000",
    currency: "₮",
  },
  {
    icon: <HomeIcon />,
    name: "Lending & Renting",
    time: "3 hours ago",
    amount: "1000",
    currency: "₮",
  },
  {
    icon: <HomeIcon />,
    name: "Lending & Renting",
    time: "3 hours ago",
    amount: "1000",
    currency: "₮",
  },
  {
    icon: <HomeIcon />,
    name: "Lending & Renting",
    time: "3 hours ago",
    amount: "1000",
    currency: "₮",
  },
  {
    icon: <HomeIcon />,
    name: "Lending & Renting",
    time: "3 hours ago",
    amount: "1000",
    currency: "₮",
  },
];

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-6 mt-8 justify-center">
        <Card cashAmount="21,000,00" />
        <FinanceCard
          dotColor="bg-[#84CC16]"
          label="Your Income"
          amount="1,200,000"
          currency="₮"
          amountLabel="Your Income Amount"
          incrementOrDecrement={<IncreasingIcon />}
          fromLastMonth="32%"
        />
        <FinanceCard
          dotColor="bg-[#0166FF]"
          label="Total Expenses"
          amount="-1,200,000"
          currency="₮"
          amountLabel="Your Expense Amount"
          incrementOrDecrement={<DecreasingIcon />}
          fromLastMonth="43%"
        />
      </div>
      <div className="flex gap-6 mt-6 justify-center">
        <div className="flex w-[588px] h-[284px] flex-col items-start shrink-0 bg-white rounded-xl">
          <div className="flex items-center self-stretch gap-2 p-4 border-b-[1px]">
            <p className="text-base font-semibold">Income-Expense</p>
          </div>
          <div className="flex flex-col items-start self-stretch justify-end gap-8 px-6 py-8">
            <div className="flex items-start gap-[17px]">
              <IncomeExpenseChart />
            </div>
          </div>
        </div>
        <div className="flex w-[588px] h-[284px] flex-col items-start shrink-0 bg-white rounded-xl">
          <div className="flex items-center self-stretch gap-2 p-4 border-b-[1px] justify-between">
            <p className="text-base font-semibold">Income-Expense</p>
            <p className="text-[#6B7280]">Jun 1 - Nov 30</p>
          </div>
          <IncomeExpensePieChart />
        </div>
      </div>
      <div className="flex w-[1200px] flex-col items-start rounded-xl bg-white mt-6 m-auto">
        <div className="flex items-center self-stretch gap-2 p-4 font-semibold">
          <p>Last Records</p>
        </div>
        {dataRecords.map((el, i) => {
          return (
            <div
              className="flex flex-col items-start self-stretch border-t-[1px]"
              key={i}
            >
              <div className="flex items-center self-stretch justify-between p-5">
                <div className="flex items-center gap-4">
                  {el.icon}
                  <div className="flex flex-col items-start justify-center">
                    <p>{el.name}</p>
                    <p className="text-xs text-[#6B7280]">{el.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#84CC16]">
                  <p>-</p>
                  <p>{el.amount}</p>
                  <p>{el.currency}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
