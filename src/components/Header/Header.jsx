import {SunIcon , MoonIcon, ListIcon, XIcon  } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import {Context} from '../../context/Context'
import '../../index.css';
import {Link,NavLink} from 'react-router-dom'

function Header(){
    const {light,setLight}=useContext(Context)
    const [click,setClick]=useState(false)
    const links=['Home','Packages','Destinations','About','Contact']
    

    function sidebar(){
        setClick(!click)
    }
    
    return (
        <>
        <div className="sticky top-0 w-full bg-dark flex px-5 border-b-2 z-50 border-rust outline-none">
            <div className=" sm:flex-1 flex flex-1 justify-start py-3 items-center  sm:justify-start">
                <Link to="soon" className='w-fit'  state={{main:"Indus Trails",action:"Go to Home Page"}}>
                <h1 className='w-fit  font-fraunces md:text-3xl sm:text-2xl '><span className='font-bold underline decoration-water text-text'> Indus</span><span className='text-rust'>Trails</span>
                </h1>
                </Link>
            </div>
            <div className="md:flex hidden flex-5  py-3  justify-center">
                <ul className=" flex flex-row justify-center items-center lg:gap-16 md:gap-5  font-gsans">
                    {
                        links.map(element => {
                            const path=element==='Home'?'/':'/'+element.toLowerCase()
                            return <NavLink to={path} className={({ isActive }) =>`cursor-pointer ${isActive ? "text-rust" : "text-text"} outline-none`} key={element}>{element}</NavLink>            
                        })
                    }
                </ul>
            </div>
     
                
            <div className=' flex items-center justify-center flex-0 gap-10'>
                <button onClick={()=>{
                    setLight(!light)
                }} className=' flex items-center cursor-pointer outline-none'>
                    {!light? <SunIcon className='text-text'  weight='fill' size={25}/>:<MoonIcon className='text-text' weight='fill' size={25}/>}
                </button>

                <button onClick={sidebar} className=' md:hidden sm:flex items-center justify-center outline-none'>
                    <ListIcon className='text-text'  size={25}/>
                </button>
            </div>    
        </div>
                <div className={`w-full  h-full fixed top-0 left-0 flex flex-col font-gSans z-40 bg-nav transition-transform duration-300 ease-in-out ${click ? "translate-x-0" : "translate-x-full"}`}>
                    <div className=' flex py-3 items-center justify-end px-5'>
                        <button onClick={sidebar}>
                            <XIcon className='text-text' size={25}/>
                        </button>
                    </div>
                    <div>
                        <ul className='text-2xl flex flex-col'>
                        {
                        
                        links.map(element => {
                            const path=element==='Home'?'/':'/'+element.toLowerCase()
                            return <NavLink onClick={sidebar} to={path}  end={element === 'Home'} className={({isActive }) =>`${isActive ? 'text-rust' : 'text-text'} px-5 py-5 cursor-pointer outline-none`} key={element} >{element}</NavLink>                        
                        })
                    }
                        </ul>
                    </div>
                </div>
             
        </>
    )
}
export default Header 