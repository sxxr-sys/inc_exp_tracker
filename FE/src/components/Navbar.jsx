import Image from "next/image";
import { PlusIcon } from "./icon/plusIcon";
import Logo from "./icon/logo";
import Avatar from "./icon/avatar.jpg";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { DatePicker } from "./datePicker";
import { CategorySelect } from "./categorySelect";
import { Textarea } from "./ui/textarea";
import { useContext, useState } from "react";
import { DialogContext } from "@/pages/_app";
import Link from "next/link";

export const Navbar = () => {

  const { recordBtnRef } = useContext(DialogContext)
  const [isClicked, setIsClicked] = useState(false)

  const clickHandler = () => {
    setIsClicked(!isClicked)
  }


  return (
    <div className="flex px-[120px] w-full h-fit justify-between py-4 bg-white">
      <div className="flex items-center gap-6">
        <Logo textShow={false} />
        <Link href="/dashboard">
          <span>Dashboard</span>
        </Link>
        <Link href="/records">
          <span>Records</span>
        </Link>
      </div>
      <div className="flex items-center gap-6">

        <Dialog>
          <DialogTrigger asChild>
            <Button ref={recordBtnRef} className="bg-[#0166FF] justify-center items-center rounded-[20px] flex gap-1 h-8">
              <PlusIcon />
              Record
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 min-w-[768px]">
            <DialogHeader className="flex justify-between border-b-[1px] px-6 py-5 items-center">
              <DialogTitle>Add Record</DialogTitle>
              <DialogClose>
                <Cross2Icon className="h-4 w-4" />
              </DialogClose>
            </DialogHeader>
            <div className="flex flex-start self-stretch">
              <div className="flex px-6 py-6 flex-col items-start gap-5 w-1/2">
                <div className="w-full">
                  <Button onClick={clickHandler} className={isClicked ? "bg-[#F3F4F6] text-[#000] rounded-[20px] w-1/2" : "bg-[#0166FF] rounded-[20px] w-1/2"}>Expense</Button>
                  <Button onClick={clickHandler} className={isClicked ? "bg-[#16A34A] rounded-[20px] w-1/2" : "bg-[#F3F4F6] text-[#000] rounded-[20px] w-1/2"}>Income</Button>
                </div>
                <div className="flex flex-col gap-[32px] w-full">
                  <div className="flex flex-col items-start gap-12 self-stretch">
                    <div className="w-full">
                      <h4>Amount</h4>
                      <Input placeholder="000.00 ₮" />
                    </div>
                    <div className="w-full">
                      <h4>Category</h4>
                      <CategorySelect className="w-full" />
                    </div>
                    <div className="w-full">
                      <h4>Date</h4>
                      <DatePicker />
                    </div>
                  </div>
                  <Button type="submit" className={isClicked ? "bg-[#16A34A] rounded-[20px]" : "bg-[#0166FF] rounded-[20px]"}>Add Record</Button>
                </div>
              </div>
              <div className="flex py-6 px-6 flex-col items-start gap-5 w-1/2">

                <div className="flex flex-col items-start gap-12 self-stretch">
                  <div className="flex flex-col items-start justify-center self-stretch rounded-lg">
                    <p>Name</p>
                    <Input />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full rounded-lg">
                    <p>Note</p>
                    <Textarea />
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Image alt="" className="rounded-full" src={Avatar} width={40} height={40} />
      </div>
    </div>
  );
};
