import { createContext,useEffect,useState } from "react";

const Context=createContext()

function ProvideContext({children}){

    function getLocalStorageItem(element,def){
        const store=JSON.parse(localStorage.getItem('user'))
        if(!store||!Object.hasOwn(store,element)){
            return def;
        }
        else{
            return store[element]
        }
    }

    function getLocalStorage(){
        const store=JSON.parse(localStorage.getItem('user'))
        if(!store) return {}
        else return store
    }

    const [light,setLight]=useState(()=>{
        return getLocalStorageItem("theme",true)
    })


        
    useEffect(()=>{
        const html=document.querySelector('html')
        if(light){
            html.classList.remove('dark')
        }
        else{
            html.classList.add('dark')
        }
    
        let store=getLocalStorage()
        store={
            ...store,
            theme:light
        }
        localStorage.setItem('user',JSON.stringify(store))
    },[light])

    
    return (
        <Context.Provider value={{light,setLight,getLocalStorage,getLocalStorageItem}}>
            {children}
        </Context.Provider>
    )
}

export {Context,ProvideContext}