import * as React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

export const FilterSelect = () => {
return (
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Newest First" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="Newest First">Newest First</SelectItem>
              <SelectItem value="By Date">By Date</SelectItem>
              <SelectItem value="By Category">By Category</SelectItem>
              <SelectItem value="By Amount">By Amount</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )
}