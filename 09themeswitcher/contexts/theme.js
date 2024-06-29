import { useContext,createContext } from "react";

export const ThemeContext = createContext({
    thememode:"light",
    darkTheme:() => {},
    lightTheme:() => {}
})

export const ThemeContextProvider = ThemeContext.Provider

//custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}