import { LeftIcon } from "./icon/leftIcon"
import { RightIcon } from "./icon/rightIcon"

export const RecordDetails = () => {
    return <div className="flex h-fit gap-4">
        <LeftIcon className="bg-[#E5E7EB] p-1 rounded-md" />
        <p>Last 30 Days</p>
        <RightIcon className="bg-[#E5E7EB] p-1 rounded-md" />
    </div>
}