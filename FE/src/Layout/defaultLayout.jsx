import { Navbar } from "@/components/navbar";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-[#F3F4F6]">
      <div className="w-full max-w-[1280px] mb-8">
        <Navbar/>
      </div>
      
      <div className="w-full max-w-[1280px]">
        {children}
      </div>
    </div>
  );
};
