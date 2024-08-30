import { forwardRef } from "react";
import { Button, Input } from "./ui";

export const CustomForm = forwardRef(({ onSubmit, inputs, btnText }, ref) => (
  <form className="flex flex-col gap-4" ref={ref} onSubmit={onSubmit}>
    {inputs.map(({ placeholder, name, type }) => (
      <Input key={name} placeholder={placeholder} name={name} type={type} required />
    ))}
    <Button className="rounded-[20px] bg-[#0166FF]" type="submit">
      {btnText}
    </Button>
  </form>
));
