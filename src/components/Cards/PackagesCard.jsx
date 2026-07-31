import {ArrowRightIcon,UserIcon,TicketIcon,CalendarBlankIcon} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'


function back(tag,element){  

    if(tag=="Heritage"){
        if(element=="border") return "border-ancient"
        if(element=="text") return "text-ancient"
        if(element=="bg") return "bg-ancient"
    }
    else if(tag=="Spiritual"){
        if(element=="border") return "border-spiritual"
        if(element=="text") return "text-spiritual"
        if(element=="bg") return "bg-spiritual"
    }
    else if(tag=="Coastal"){
        if(element=="border") return "border-coastal"
        if(element=="text") return "text-coastal"
        if(element=="bg") return "bg-coastal"
    }
    else if(tag=="Desert") {
        if(element=="border") return "border-sand"
        if(element=="text") return "text-sand"
        if(element=="bg") return "bg-sand"
    }
    else if(tag=="Route"){
        if(element=="border") return "border-route"
        if(element=="text") return "text-route"
        if(element=="bg") return "bg-route"
    }
}

function PackCard({value}){
    return(
    <div className={`h-full group hover:scale-105 bg-nav2  text-text font-gsans  border-2  ${back(value.tag,"border")} rounded-[5px]  flex flex-col items-center p-4 gap-7 justify-center w-full`}>
            <div className={`flex justify-start shrink-0      items-center w-full uppercase ${back(value.tag,"text")} `}>
                <h1>{value.tag}</h1>
            </div>
            <div className='w-[90%] h-0 border-t-2 border-text/20'></div>
            <div  className="flex flex-1  justify-center gap-2 flex-col items-start w-full">
                <h1 className='text-xl sm:text-3xl font-bold font-fraunces'>{value.name}</h1>
                <h1 className='text-md sm:text-xl'>{value.route}</h1>
            </div>
            <div className='w-[90%] h-0 border-t-2 border-text/20'></div>
            <div className=" h-[5rem] grid grid-cols-3 w-full grid-row-1">
                <div className="grid-cols-1 gap-2   flex flex-col items-center justify-center">
                    <CalendarBlankIcon size={25}/>
                    <h1 className='text-xs sm:text-md'>{value.time}</h1>
                </div>
                <div className="grid-cols-2 gap-2   flex flex-col items-center justify-center">
                    <UserIcon size={25}/>
                    <h1 className='text-xs sm:text-md'>{value.person}</h1>
                </div>
                <div className=" grid-cols-3 gap-2 flex flex-col items-center justify-center">
                    <TicketIcon size={25}/>
                    <h1 className='text-xs sm:text-md'>{value.price}</h1>
                </div>
            </div>
             <div>
                <Link to="soon" className={` flex items-center justify-center text-white p-2 sm:p-3 cursor-pointer gap-3 outline-none ${back(value.tag,"bg")}`} state={{main:value.name,action:"Article Coming Soon"}}>
                            <h1 className='text-xs sm:text-md' >View Details</h1>
                            <ArrowRightIcon className='group-hover:translate-x-1'/>
                            
                </Link> 
             </div>
        </div>
    )

}

export default PackCard