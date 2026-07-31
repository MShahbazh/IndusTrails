import { createContext,useEffect,useState } from "react";

const Context=createContext()
function ProvideContext({children}){
    const [light,setLight]=useState(()=>{
        const store=JSON.parse(localStorage.getItem('user'))
        if(!store||!Object.hasOwn(store,'theme')){
            return true;
        }
        else{
            return store['theme']
        }
    })


        
    useEffect(()=>{
        const html=document.querySelector('html')
        if(light){
            html.classList.remove('dark')
        }
        else{
            html.classList.add('dark')
        }
        const store={
            theme:light 
        }
        localStorage.setItem('user',JSON.stringify(store))
    },[light])

    
    return (
        <Context.Provider value={{light,setLight}}>
            {children}
        </Context.Provider>
    )
}

export {Context,ProvideContext}