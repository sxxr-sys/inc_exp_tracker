import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Plus, X, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Logo } from "./icons";
import { AVATAR, LINKS, TRANSACTION_TYPES } from "@/constants";
import { cn } from "@/lib/utils";
import { axiosInstance } from "@/lib";
import { Calendar } from "@/components/ui/calendar";
import {
  Input,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui";
import { DialogContext } from "@/pages/_app";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [transactionType, setTransactionType] = useState(
    TRANSACTION_TYPES.EXPENSE
  );
  const [categories, setCategories] = useState([]);
  const [date, setDate] = useState(null);
  const [formData, setFormData] = useState({});
  const { btnRef } = useContext(DialogContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("category");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleInputChange = (value, key) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddRecord = async () => {
    try {
      const { id: userId } = JSON.parse(localStorage.getItem("user"));
      const recordData = {
        ...formData,
        date,
        user_id: userId,
        transaction_type: transactionType,
      };
      const response = await axiosInstance.post("/record/create", recordData);
      console.log("Record created successfully:", response);
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };

  const renderLinks = () =>
    LINKS.map(({ href, title }, index) => (
      <Link
        key={title}
        onClick={() => setActiveLink(index)}
        href={href}
        className={cn("text-[#0F172A] leading-6", {
          "font-semibold": activeLink === index,
        })}
      >
        {title}
      </Link>
    ));

  const renderTransactionTypeButtons = () => (
    <div className="flex w-full gap-1 bg-[#F3F4F6] rounded-[20px]">
      {Object.entries(TRANSACTION_TYPES).map(([key, value]) => (
        <Button
          key={value}
          className={cn(
            "w-full px-3 rounded-[20px] transition-all duration-300 ease-in-out text-white",
            {
              "bg-[#0166FF]":
                transactionType === TRANSACTION_TYPES.EXPENSE &&
                value === TRANSACTION_TYPES.EXPENSE,
              "bg-[#16A34A]":
                transactionType === TRANSACTION_TYPES.INCOME &&
                value === TRANSACTION_TYPES.INCOME,
              "bg-transparent text-[#1F2937]": transactionType !== value,
            }
          )}
          onClick={() => setTransactionType(value)}
        >
          {key.charAt(0) + key.slice(1).toLowerCase()}
        </Button>
      ))}
    </div>
  );

  const renderFormField = (label, id, component) => (
    <div className="flex flex-col gap-[5px]">
      <label htmlFor={id} className="text-[#171717] leading-6">
        {label}
      </label>
      {component}
    </div>
  );

  const renderDialog = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          ref={btnRef}
          className="flex gap-1 h-8 rounded-[20px] bg-[#0166FF]"
        >
          <Plus className="mr-[6.5px]" />
          Record
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 min-w-[768px]">
        <DialogHeader className="flex flex-row items-center justify-between px-6 py-5 border-b">
          <DialogTitle>Add Record</DialogTitle>
          <DialogClose asChild>
            <X className="w-6 h-6 cursor-pointer" />
          </DialogClose>
        </DialogHeader>
        <DialogFooter className="flex sm:justify-start">
          <div className="flex flex-col flex-1 gap-5 px-6 py-5">
            {renderTransactionTypeButtons()}
            {renderFormField(
              "Amount",
              "amount",
              <Input
                id="amount"
                type="number"
                onChange={(e) => handleInputChange(e.target.value, "amount")}
                placeholder="1000.00₮"
              />
            )}
            {renderFormField(
              "Category",
              "category",
              <Select
                onValueChange={(value) =>
                  handleInputChange(value, "category_id")
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            {renderFormField(
              "Date",
              "date",
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal w-full",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-full"
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
            <DialogClose asChild>
              <Button
                className={cn("px-3 rounded-5", {
                  "bg-[#0166FF]": transactionType === TRANSACTION_TYPES.EXPENSE,
                  "bg-[#16A34A]": transactionType === TRANSACTION_TYPES.INCOME,
                })}
                onClick={handleAddRecord}
              >
                Add Record
              </Button>
            </DialogClose>
          </div>
          <div className="flex flex-col flex-1 gap-[22px] px-6 py-5">
            {renderFormField(
              "Name",
              "name",
              <Input
                id="name"
                onChange={(e) => handleInputChange(e.target.value, "name")}
                placeholder="Enter name"
              />
            )}
            {renderFormField(
              "Note",
              "note",
              <Textarea
                id="note"
                className="h-[240px]"
                onChange={(e) =>
                  handleInputChange(e.target.value, "description")
                }
                placeholder="Add a note"
              />
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-6">
        <Logo className="m-[6.301px] size-[27.8px]" />
        {renderLinks()}
      </div>
      <div className="flex items-center gap-6">
        {renderDialog()}
        <Avatar>
          <AvatarImage src={AVATAR} alt="User avatar" />
          <AvatarFallback>MN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
