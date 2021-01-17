import React, { useState, createContext } from "react";

export const DarkmodeContext = createContext();

export const DarkmodeProvider = props => {

        const [darkmode, setDarkmode] = useState(false);
        return (<DarkmodeContext.Provider value={[darkmode, setDarkmode]}>{props.children}</DarkmodeContext.Provider>);

}; 