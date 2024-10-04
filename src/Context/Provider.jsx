import React, { useState } from "react";
import Context from "./creator";

export const Provider = ({children})=>{
    const [data,setData] = useState('hamza');
    const [theme, setTheme] = useState('default')

   return(
    <Context.Provider value={{data,setData, theme, setTheme}}>
        {children}
    </Context.Provider>
   )
}

