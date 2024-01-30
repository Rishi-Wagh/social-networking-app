import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{
    const [darktheme , setDarktheme ] = useState(
       JSON.parse(localStorage.getItem('darktheme')) || false
    );

    const toggle = () =>{
        setDarktheme(!darktheme)
    }

    useEffect(() => {
        localStorage.setItem('darktheme',darktheme)
    },[darktheme])

    return(
        <ThemeContext.Provider value={{darktheme , toggle}}>
            {children}
        </ThemeContext.Provider>
    );
}