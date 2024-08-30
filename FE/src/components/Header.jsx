import { Logo } from "./icons";

export const Header = ({ title = "Geld" }) => (
  <div className="flex items-center justify-center p-[5.405px] gap-[9.459px]">
    <Logo />
    <p className="font-semibold text-[32px] leading-7">{title}</p>
  </div>
);
