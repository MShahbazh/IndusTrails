import '../../index.css'
import {InstagramLogoIcon,FacebookLogoIcon,LinkedinLogoIcon,} from '@phosphor-icons/react'
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <>
        
        <div className="grid grid-cols-1 md:grid-cols-3 items-center bg-dark p-5 font-gsans gap-10 md:gap-5  border-t-2  border-rust">
            <div className='flex flex-col gap-5 items-center'>
            <h1 className='font-fraunces  text-3xl'>
                <span className='font-bold underline decoration-water text-text'> Indus</span><span className='text-rust'>Trails</span>
            </h1>
            <p className='text-text/50'>
                Guided tours across Sindh — from the ruins of Mohenjo-daro to the dunes of Thar and the lakes of Keenjhar, planned by people who know the land.
            </p>      
        </div>            
            <div className='flex flex-col gap-5 h-full text-text items-center'>
                <h1 className='font-fraunces'>QUICK LINKS</h1>
                <ul className='flex flex-col gap-3'>
                    <Link to="/destinations" className='hover:underline cursor-pointer'>Destinations</Link>
                    <Link to="/packages" className='hover:underline cursor-pointer'>Packages</Link>
                    <Link to="/about" className='hover:underline cursor-pointer'>About Us</Link>
                    <Link to="/contact" className='hover:underline cursor-pointer'>Contact</Link>
                    <Link to="soon" state={{main:"Plan Your Trip",action:"Being Prepared"}}  className='text-rust hover:underline cursor-pointer'>Plan your Trip</Link>                    
                </ul>
            </div>
            <div className=' flex flex-col  h-full gap-5 text-text items-center'>
                <h1 className='font-fraunces'>CONTACT US</h1>
                <div className='flex flex-col gap-3'>
                    <h1><span className='text-text/50'>Email:</span> <span className='hover:text-rust hover:underline cursor-pointer'>industrailsgmail.com</span></h1>
                    <h1><span className='text-text/50'>Contact:</span> <span className='hover:text-rust hover:underline cursor-pointer'>+92-30045321221</span></h1>
                    <h1><span className='text-text/50'>Based In:</span> <span>Karachi, Pakistan</span></h1>
                    <div className='flex flex-row items-center justify-center  gap-3 '>
                    <Link to="soon" state={{main:"Caught You!",action:"Looking for Our Instagram, huh?"}}><div className='hover:bg-rust hover:text-white border border-text/10 rounded-full w-9 h-9 flex items-center justify-center  cursor-pointer'><InstagramLogoIcon  size={21}/></div></Link>
                    <Link to="soon" state={{main:"Caught You!",action:"There is no Face for our Facebook"}}><div className='hover:bg-rust hover:text-white border border-text/10 rounded-full w-9 h-9 flex items-center justify-center  cursor-pointer'><FacebookLogoIcon  size={21}/></div></Link>
                    <Link to="soon" state={{main:"Caught You!",action:"We can't leave this empty"}}><div className='hover:bg-rust hover:text-white border border-text/10 rounded-full w-9 h-9 flex items-center justify-center  cursor-pointer'><LinkedinLogoIcon  size={21}/></div></Link>
                </div>
                </div>
            </div>
        </div>
        <div className=" bg-rust border-t-transparent  flex flex-col  justify-center items-center gap-2 px-5 py-4 text-sm font-gsans text-white">
        <span>© 2026 IndusTrails. All rights reserved.</span>
        <Link to="soon" state={{main:"Terms and Conditions",action:"We have no Terms..."}}  className='hover:underline cursor-pointer'>Terms and Conditions</Link>
        <Link to="soon" state={{main:"No Policy",action:"Should there be?"}}  className='hover:underline cursor-pointer'>Privacy Policy</Link>
      </div>
        </>
    )
}

export default Footer 