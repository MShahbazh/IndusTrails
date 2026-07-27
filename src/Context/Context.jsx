import { createContext,useState } from "react";

const Context=createContext()

function ProvideContext({children}){
    const [light,setLight]=useState(true)

    return (
        <Context.Provider value={{light,setLight}}>
            {children}
        </Context.Provider>
    )
}

export {Context,ProvideContext}