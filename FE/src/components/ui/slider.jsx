import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(({ className, ...props }, ref) => {
  const handleValueChange = (newValue) => {
    props.onValueChange(newValue);
  };

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      value={props.value}
      onValueChange={handleValueChange}
      {...props}
    >
      <SliderPrimitive.Track className="relative w-full h-1 overflow-hidden rounded-full grow bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-[#0166FF]" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb
        className="relative block w-5 h-5 transition-colors border-4 border-[#0166FF] rounded-full bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        data-thumb="thumb1"
      >
        <span className="absolute mt-2 text-xs text-center transform -translate-x-1/2 top-full left-1/2">
          {props.value[0]}
        </span>
      </SliderPrimitive.Thumb>

      <SliderPrimitive.Thumb
        className="relative block w-5 h-5 transition-colors border-4 border-[#0166FF] rounded-full bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        data-thumb="thumb2"
      >
        <span className="absolute mt-2 text-xs text-center transform -translate-x-1/2 top-full left-1/2">
          {props.value[1]}
        </span>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});

Slider.displayName = "Slider";

export { Slider };
