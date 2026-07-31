import { useContext, useEffect, useState } from "react"
import { destinationTags, destinations } from "../../data/data"
import DesCard from "../Cards/DestinationCard"
import { Context } from "../../Context/Context"

function back(tag){
    if(tag=="Heritage") return "bg-ancient"
    if(tag=="Desert") return "bg-sand"
    if(tag=="Fort") return "bg-fort"
    if(tag=="Lake") return "bg-indus"
    if(tag=="All") return "bg-route"
    if(tag=="Wildlife") return "bg-wildlife"
    if(tag=="Port") return "bg-port"
}

function Destinations(){
    const context=useContext(Context);
    const [clicked,setClicked]=useState(()=>{
        return context.getLocalStorageItem("destinationFilter","All")
    })

    useEffect(()=>{
        let store=context.getLocalStorage()
        store={
            ...store,
            destinationFilter:clicked
        }
        localStorage.setItem('user',JSON.stringify(store))
    },[clicked,context])

    return(
          <div className=" bg-nav flex flex-col items-center justify-center py-20 px-10 gap-20">
               <div className="flex flex-col items-center justify-center w-full  gap-5  ">
                 <h1 className='text-md text-text/40 font-gsans font-bold'>DESTINATIONS</h1>
                <h1 className='text-4xl text-rust font-fraunces'>Every Corner of Sindh</h1>
               </div >
               <div className="w-full grid  sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-5 font-gsans border-b pb-5 border-b-text">
                    {
                        destinationTags.map((element)=>{
                            return(
                                <div onClick={()=>{setClicked(element)}} key={element} className={`flex items-center  justify-center  ${clicked==element? `${back(element)} text-white`:"text-text"}`}>
                                    <h1 className="p-2 w-full flex items-center justify-center cursor-pointer  text-md">{element}</h1>
                                </div>
                            )
                        })
                    }
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-4">
                    {
                        destinations.filter((element)=>{
                            if(clicked=='All') return true
                            else if(element.tag==clicked) return true;
                            return false;
                        }).map((element)=>{
                            return(
                                <div key={element.id}>
                                    <DesCard value={element}/>
                                </div>
                            )
                        })

                    }
                        
               </div>
               
            </div>
    )
}

export default Destinations