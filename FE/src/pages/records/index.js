import { FilterSelect } from "@/components/filterSelect";
import { HomeIcon } from "@/components/icon/homeIcon";
import { Record } from "@/components/record";
import { RecordDetails } from "@/components/recordDetails";
import { Checkbox } from "@/components/ui/checkbox";

const Records = () => {
  return (
    <>
      <div className="flex gap-6 justify-center">
        <Record />
        <div className="flex flex-col gap-6 w-[894px] mt-6">
          <div className="flex items-center justify-between w-full">
            <RecordDetails />
            <FilterSelect />
          </div>

          <div className="flex w-[894px] flex-col items-start gap-6">
            <div className="flex p-6 justify-between items-center self-stretch rounded-xl border-1 border-solid border-[#E5E7EB] bg-[#FFF]">
              <div className="flex items-center gap-4">
                <Checkbox />
                <p>Select All</p>
              </div>
              <div className="flex items-center gap-2">
                <p>-</p>
                <p>35.500</p>
                <p>₮</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 self-stretch">
              <h3 className="font-semibold">Today</h3>
              <div className="flex flex-col items-start gap-3 self-stretch">

                <div className="flex p-6 justify-between items-center self-stretch rounded-xl border-1 border-solid border-[#E5E7EB] bg-[#FFF]">
                  <div className="flex items-center gap-4 w-full">
                    <Checkbox />
                    <HomeIcon />
                   <div className="flex justify-between w-full">
                   <div className="flex flex-col items-start">
                      <p>Lending & Renting</p>
                      <p className="text-sm text-[#6B7280]">14:00</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p>-</p>
                      <p>1000</p>
                      <p>₮</p>
                    </div>
                   </div>
                  </div>
                </div>
                <div className="flex items-center gap-2"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 self-stretch">

          </div>
        </div>
      </div>
    </ >
  );
};

export default Records;
