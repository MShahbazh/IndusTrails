import { Link } from "react-router-dom"
import { ArrowRightIcon } from "@phosphor-icons/react"

function DesCard({value}){


    return(
        <div className="group w-[300px] lg:w-[95%] border-text border rounded-[5px] font-gsans overflow-hidden hover:scale-105">
            <div className="w-full lg:h-[450px]  relative overflow-hidden  ">
                <div className="absolute text-rust  bg-nav m-2 rounded-2xl text-sm px-3 uppercase">
                    <h1>{value.tag}</h1>
                </div>
                <img src={value.src} className="w-full h-full object-cover "  alt=""/>
                <div className={`z-40 translate-y-full group-hover:translate-y-0  bg-nav2 absolute bottom-0  w-full h-[35%] flex items-start justify-start flex-col p-3 gap-5 transition-transform duration-500`}>
                    <div>
                        <h1 className="text-3xl text-rust font-fraunces">{value.name}</h1>
                        <h1 className="text-sm text-text/50">{value.region}</h1>
                    </div>
                    <Link to="soon" className="w-[50%] bg-rust flex items-center justify-center text-white py-2 cursor-pointer gap-3 outline-none" state={{main:value.name,action:"Article Coming Soon"}}>
                            <h1 >View Trail</h1>
                            <ArrowRightIcon/>
                    </Link>  
                </div>
                <div className=" opacity-full group-hover:opacity-0 absolute bottom-0 p-3 z-0">
                    <h1 className={` text-white font-fraunces text-3xl`}>{value.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default DesCard 