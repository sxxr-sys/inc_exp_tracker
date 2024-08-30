import withAuth from "@/utils/withAuth";
import { Header, StepThird, StepTwo } from "@/components";
import { StepOne } from "@/components/StepOne";
import { STEPPER } from "@/constants";
import { useState } from "react";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextClick = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, STEPPER.length - 1));
  };

  return (
    <div className="flex flex-col items-center gap-12 mt-10">
      <Header />
      <div className="flex gap-12 mb-[141px]">
        {STEPPER.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <div className="relative flex items-center">
              <div
                className={`rounded-full size-6 flex justify-center items-center text-[14px] leading-3 transition-transform duration-300 ease-in-out ${
                  currentStep >= index
                    ? "bg-[#0166FF] text-white"
                    : "bg-[#E5E7EB] text-[#0F172A]"
                }`}>
                {index + 1}
              </div>
              {index !== STEPPER.length - 1 && (
                <div
                  className={`absolute left-[24px] h-1 w-[87px] transition-all duration-300 ease-in-out  ${
                    currentStep > index ? "bg-[#0166FF]" : "bg-[#E5E7EB]"
                  }`}
                />
              )}
            </div>
            <p className="transition-opacity duration-300 ease-in-out">
              {step}
            </p>
          </div>
        ))}
      </div>
      {currentStep == 0 ? <StepOne handleNextClick={handleNextClick} /> : null}
      {currentStep == 1 ? <StepTwo handleNextClick={handleNextClick} /> : null}
      {currentStep == 2 ? <StepThird /> : null}
    </div>
  );
};

export default withAuth(Stepper);
