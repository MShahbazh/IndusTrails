import { useLocation } from 'react-router-dom'
import '../../index.css'

function Soon(){
    const location=useLocation()
    return(
        <div className="  text-white bg-rust h-[88.9vh] flex flex-col items-center justify-center gap-10">
            <h1 className='font-fraunces sm:text-2xl  md:text-4xl lg:text-7xl '>{location.state.main}</h1>
            <h2 className='font-gsans sm:text-xl md:text-2xl lg:text-5xl'>{location.state.action}</h2>
        </div>
    )
}

export default Soon  