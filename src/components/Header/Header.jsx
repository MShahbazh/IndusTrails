import {SunIcon , MoonIcon, ListIcon, XIcon  } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import '../../index.css';

function Header(){
    const {light,setLight}=useContext(Context)
    const [click,setClick]=useState(false)
    const links=['Home','Packages','Destinations','About','Contact']
    

    function sidebar(){
        setClick(!click)
    }
    
    return (
        <>
        <div className="w-full  bg-nav flex px-5 ">
            <div className=" sm:flex-1 flex-1 justify-center py-3 items-center  sm:justify-start">
                <h1 className='font-fraunces md:text-3xl sm:text-2xl '>
                   <span className='font-bold underline decoration-blue-500'> Indus</span><span className='text-[#B54B32]'>Trails</span>
                </h1>
            </div>
            <div className="md:flex hidden flex-5  py-3  justify-center">
                <ul className=" flex flex-row justify-center items-center lg:gap-16 md:gap-5  font-gsans">
                    {
                        links.map(element => {
                            return <li key={element} className={`${element=='Home'?"text-[#B54B32]":""}`}>{element}</li>            
                        })
                    }
                </ul>
            </div>
            <div className="md:flex hidden flex-1 justify-center items-center">
                <h1 className=" flex items-center justify-center md:py-3 sm:py-0 px-1 text-white bg-[#B54B32] font-gsans rounded-[5px]">Plan Your Trip</h1>
            </div>
                
            <div className=' flex items-center justify-center flex-0 gap-10 '>
                <button onClick={()=>{
                    setLight(!light)
                }} className=' flex items-center cursor-pointer'>
                    {!light? <SunIcon size={25}/>:<MoonIcon size={25}/>}
                </button>

                <button onClick={sidebar} className=' md:hidden sm:flex items-center justify-center'>
                    <ListIcon size={25}/>
                </button>
            </div>
        

        </div>
                <div className={`w-full  h-full fixed top-0 left-0 flex flex-col font-gSans z-40 bg-[#FFFDF8] transition-transform duration-300 ease-in-out ${click ? "translate-x-0" : "translate-x-full"}`}>
                    <div className=' flex py-3 items-center justify-end px-5'>
                        <button onClick={sidebar}>
                            <XIcon size={25}/>
                        </button>
                    </div>
                    <div>
                        <ul className='text-2xl'>
                        {
                        links.map(element => {
                            return <li  key={element} className={` ${element=='Home'?"text-[#B54B32]":""} py-5 px-5`}>{element}</li>            
                        })
                    }
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl pl-5 py-5 text-white bg-[#B54B32] font-gsans">Plan Your Trip</h1>                        
                    </div>
                </div>
            
        </>
    )
}
export default Header 