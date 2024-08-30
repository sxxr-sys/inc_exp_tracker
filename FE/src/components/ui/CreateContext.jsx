import { createContext, useState} from "react";

export const ColorModeContext = createContext()

export function ThemeComponent({ children }) {
    const [checked, setChecked] = useState(true)
    const handlechange =() => {
        setChecked(!checked)
    }
    return (
        <ColorModeContext.Provider value= {{ handlechange, checked }}>
            {children}
        </ColorModeContext.Provider>
    )
}