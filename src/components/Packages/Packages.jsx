import { MagnifyingGlassIcon,ArrowDownIcon  } from "@phosphor-icons/react"
import { useState } from "react"
import { packages, packageTags,filterPackages } from "../../data/data"
import PackCard from "../cards/PackagesCard"

function Packages(){
    const [dropDown,setDropDown]=useState(false)
    const [search,setSearch]=useState({name:"",from:"",to:"",tag:"All",route:""})
    const [pack,setPack]=useState(packages)
    
    return(
        <div className=" bg-nav flex flex-col items-center justify-center py-20 px-10 gap-20">
               <div className="flex flex-col items-center justify-center w-full  gap-5  ">
                 <h1 className='text-md text-text/40 font-gsans font-bold'>PACKAGES</h1>
                <h1 className='text-4xl text-rust font-fraunces'>Pick Your Route</h1>
               </div >
               <div className="w-full grid lg:grid-cols-5 font-gsans text-text gap-5 border p-5 rounded-[5px]">
                    
                    <div className=" text-md flex flex-col items-start justify-center gap-2">
                        <label  className="text-md text-text/60" htmlFor="">Search</label>
                        <input value={search.name} onChange={(e)=>{setSearch({...search,name:e.target.value})}} className="outline-none border w-full p-2  focus:border-rust" placeholder="Enter text" type="text" />
                    </div>
                    <div className=" text-md flex flex-col items-start justify-center gap-2">
                        <label  className="text-md text-text/60" htmlFor="">Route</label>
                        <input value={search.route} onChange={(e)=>{setSearch({...search,route:e.target.value})}} className="outline-none border w-full p-2  focus:border-rust" placeholder="Enter Any Route" type="text" />
                    </div>
                   
                    <div className=" text-md flex flex-col items-start justify-center gap-2">
                        <label className="text-md text-text/60" htmlFor="from">From</label>
                        <input value={search.from} onChange={(e)=>{setSearch({...search,from:e.target.value})}} className="outline-none border w-full p-2  focus:border-rust" placeholder="Rs: 0" type="number" />
                    </div>
                    <div className=" text-md flex flex-col items-start justify-center gap-2">
                        <label className="text-md text-text/60" htmlFor="to">To</label>
                        <input value={search.to} onChange={(e)=>{setSearch({...search,to:e.target.value})}} className="outline-none border w-full p-2  focus:border-rust" placeholder="Rs: 100000" type="number" />
                    </div>
                    <div className=" text-md flex flex-col items-start justify-center gap-2 relative">
                        <h1 className="text-md text-text/60" >Tags</h1>
                        <div className={`outline-none border w-full  focus:border-rust flex flex-row`}>
                            <h1 className="flex-1 p-2">{search.tag}</h1>
                            <div onClick={()=>{setDropDown(!dropDown)}} className="flex-0  p-2 bg-rust cursor-pointer">
                                <ArrowDownIcon className={`text-white ${dropDown?`rotate-180`:`rotate-0`}`} size={21}/>
                            </div>
                        </div>
                        {
                            dropDown &&
                            <div className="absolute z-50 w-full top-full border-x bg-nav2 flex flex-col">
                                {
                                    packageTags.map((element)=>{
                                        return(
                                            <div key={element} onClick={()=>{
                                                setSearch({...search,tag:element})
                                                setDropDown(false)
                                            }} className={`border-b p-2 cursor-pointer ${search.tag==element? "bg-rust text-white":""}`}>
                                                <h1>{element}</h1>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className=" flex justify-start w-full relative">
                        <button onClick={()=>{
                            setPack(filterPackages(search))
                        }} className=' outline-none font-bold px-4 py-2 group hover:scale-105 bg-rust cursor-pointer text-white flex flex-row items-center justify-center gap-2'>
                            <h1>Search</h1>
                            <MagnifyingGlassIcon size={18} className='group-hover:scale-105'/>
                        </button>
                    </div>
               </div>
               <div className="w-full  gap-x-3 gap-y-4 grid lg:grid-cols-4">
                    {
                        
                            
                            pack.map((element)=>{
                                return(
                                    <div key={element.id}>
                                        <PackCard value={element}/>
                                    </div>
                                )
                            })
                        
                    }
                   
               </div>
                    
              
        </div>
    )
}

export default Packages