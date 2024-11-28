import Image from "next/image";
import { Shape } from "./icon/shape";
import Logo from "./icon/logo";
import { CardLogo } from "./icon/cardLogo";
import Noise from "./icon/noise.png";

export const Card = ({ cashAmount }) => {
  return (
    <div className="w-[384px] h-[220px] bg-[#0166FF] rounded-2xl relative p-8 pb-9">
      <div className="absolute bottom-0 right-0 z-20">
        {" "}
        <Shape />
      </div>
      <Image src={Noise} alt="" className="absolute top-0 left-0 z-10 rounded-2xl" />
      <div className="flex flex-col justify-between h-full">
        <div className="z-30">
          <Logo textColor="white" logoColor="white" />
        </div>

        <div className="z-30 flex justify-between">
          <div>
            <p className="text-white opacity-50">Cash</p>
            <p className="text-2xl font-semibold text-white">{cashAmount}</p>
          </div>
          <div>
            <CardLogo />
          </div>
        </div>
      </div>
    </div>
  );
};
