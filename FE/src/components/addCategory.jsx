import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    House, HouseLine, IdentificationBadge, IdentificationCard, Ladder, IntersectSquare, ImageSquare, MagnifyingGlassPlus, Microphone, MicrosoftExcelLogo, Notepad, ListPlus, Leaf, NumberFive, NumberCircleSeven, RoadHorizon, HourglassSimpleMedium, AnchorSimple, BezierCurve, Exclude, Vignette, Baseball, Question, Exam, Watch, GlobeSimple, OrangeSlice, Peace, ToiletPaper, Pencil, BlueCircle, SkyBlueCircle, GreenCircle, YellowCircle, OrangeCircle, PurpleCircle, RedCircle
} from "./icon/add-category-icons";

import { Button } from "./ui/button";
import { PlusIcon } from "./icon/plusIcon";
import { Input } from "./ui/input";


const AddCategoryIcons = [
    {
        name: "House",
        icon: <House />,
    },
    {
        name: "HouseLine",
        icon: <HouseLine />,
    },
    {
        name: "IdentificationBadge",
        icon: <IdentificationBadge />,
    },
    {
        name: "IdentificationCard",
        icon: <IdentificationCard />,
    },
    {
        name: "Ladder",
        icon: <Ladder />,
    },
    {
        name: "IntersectSquare",
        icon: <IntersectSquare />,
    },
    {
        name: "ImageSquare",
        icon: <ImageSquare />,
    },
    {
        name: "MagnifyingGlassPlus",
        icon: <MagnifyingGlassPlus />,
    },
    {
        name: "Microphone",
        icon: <Microphone />,
    },
    {
        name: "MicrosoftExcelLogo",
        icon: <MicrosoftExcelLogo />,
    },
    {
        name: "Notepad",
        icon: <Notepad />,
    },
    {
        name: "ListPlus",
        icon: <ListPlus />,
    },
    {
        name: "Leaf",
        icon: <Leaf />,
    },
    {
        name: "NumberFive",
        icon: <NumberFive />,
    },
    {
        name: "NumberCircleSeven",
        icon: <NumberCircleSeven />,
    },
    {
        name: "RoadHorizon",
        icon: <RoadHorizon />,
    },
    {
        name: "HourglassSimpleMedium",
        icon: <HourglassSimpleMedium />,
    },
    {
        name: "AnchorSimple",
        icon: <AnchorSimple />,
    },
    {
        name: "BezierCurve",
        icon: <BezierCurve />,
    },
    {
        name: "Exclude",
        icon: <Exclude />,
    },
    {
        name: "Vignette",
        icon: <Vignette />,
    },
    {
        name: "Baseball",
        icon: <Baseball />,
    },
    {
        name: "Question",
        icon: <Question />,
    },
    {
        name: "Exam",
        icon: <Exam />,
    },
    {
        name: "Watch",
        icon: <Watch />,
    },
    {
        name: "GlobeSimple",
        icon: <GlobeSimple />,
    },
    {
        name: "OrangeSlice",
        icon: <OrangeSlice />,
    },
    {
        name: "Peace",
        icon: <Peace />,
    },
    {
        name: "ToiletPaper",
        icon: <ToiletPaper />,
    },
    {
        name: "Pencil",
        icon: <Pencil />,
    }
]

const CategoryColorPicker = [
    {
        name: "Blue",
        icon: <BlueCircle />
    },
    {
        name: "Sky Blue",
        icon: <SkyBlueCircle />
    },
    {
        name: "Green",
        icon: <GreenCircle />
    },
    {
        name: "Yellow",
        icon: <YellowCircle />
    },
    {
        name: "Orange",
        icon: <OrangeCircle />
    },
    {
        name: "Purple",
        icon: <PurpleCircle />
    },
    {
        name: "Red",
        icon: <RedCircle />
    },
]


export const AddCategory = () => {
    return <Dialog>
        <DialogTrigger asChild>
            <Button
                variant="ghost"
                className="flex items-center self-stretch justify-center h-8 gap-1 rounded-[20px]"
            >
                <PlusIcon color="#0166FF" />
                Add Category
            </Button>
        </DialogTrigger>
        <DialogContent className="">
            <DialogHeader className="justify-between">
                <DialogTitle>Add Category</DialogTitle>
                <DialogClose><Cross2Icon /></DialogClose>
            </DialogHeader>
            <div className="flex p-6 flex-col items-start gap-5">
                <div className="flex flex-col items-start gap-8 self-stretch">
                    <div className="flex items-start gap-3 self-stretch">
                        <div className="flex items-start gap-3">
                            <Select>
                                <SelectTrigger className="w-[80px] h-[48px]">
                                    <SelectValue placeholder={<House />} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className="grid grid-rows-5 grid-cols-6 p-6 gap-6" >
                                        {AddCategoryIcons.map((category, index) => {
                                            return <SelectItem className="p-0 gap-0 grid justify-center items-center" key={index} value={category.name}>{category.icon}</SelectItem>
                                        })}
                                    </SelectGroup>
                                    <SelectGroup className="flex gap-4 justify-center py-6 border-t-[1px]">
                                        {CategoryColorPicker.map((color, index) => {
                                            return <div key={index} value={color.name}>{color.icon}</div>
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <Input placeholder="Name" />
                    </div>
                </div>
            </div>
            <DialogFooter>
                <Button type="submit" className="w-full bg-[#16A34A] rounded-full">Add Category</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}