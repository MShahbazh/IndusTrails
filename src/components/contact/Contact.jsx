import {ArrowRightIcon,EnvelopeSimpleIcon,PhoneIcon,GpsIcon,InstagramLogoIcon,FacebookLogoIcon,LinkedinLogoIcon} from '@phosphor-icons/react'
import {Link} from 'react-router-dom'

function Contact(){
    return(
       <div className=" bg-nav flex flex-col items-center justify-center py-18 px-10 gap-20">
             <div className="text-rust flex flex-col items-center justify-center gap-5 ">
                <h1 className='text-md text-text/40 font-gsans font-bold'>CONTACT</h1>
                <h1 className='text-4xl font-fraunces'>Get In Touch</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full font-gsans text-text">
                <div className=" rounded-[5px] grid-cols-1  w-full flex flex-col items-start justify-center p-5 gap-10 text-md">
                    <div className="flex flex-col items-start justify-center w-full gap-3">
                        <label htmlFor="name">Name</label>
                        <input className='outline-none border p-3 rounded-[5px] w-full' type="text" htmlFor="name" />
                    </div>

                    <div className="flex flex-col items-start justify-center w-full gap-3">
                        <label htmlFor="email">Email</label>
                        <input className='outline-none border p-3 rounded-[5px] w-full' type="email" htmlFor="email" />
                    </div>

                    <div className="flex flex-col items-start justify-center w-full gap-3">
                        <label htmlFor="text">Subject</label>
                        <input className='outline-none border p-3 rounded-[5px] w-full ' type="text" htmlFor="text" />
                    </div>

                    <div className="flex flex-col items-start justify-center w-full gap-3">
                        <label htmlFor="text">Message</label>
                        <textarea className='outline-none border p-3 rounded-[5px] w-full' name="text" id="text" rows={10}></textarea>
                    </div>

                    
                    <Link to="/soon"  state={{main:"Message Sent",action:"Did it?"}} className='group font-bold p-3 w-full hover:scale-105 bg-antidarkRust cursor-pointer text-white flex flex-row items-center justify-center gap-2'>
                        <h1>Send Message</h1>
                        <ArrowRightIcon className='group-hover:translate-x-1 '/>
                    </Link>

                </div>
                <div className='grid-cols-2 w-full flex flex-col items-start justify-center gap-5'>
                    <div className='bg-nav2 text-text flex-0 w-full flex flex-col items-start p-5 justify-start gap-5 rounded-[5px]'>
                        <div className='flex flex-row items-center justify-center  gap-3 '>
                            <EnvelopeSimpleIcon size={21}/>    
                            <h1>industrailsgmail.com</h1>
                        </div>
                        <div className='flex flex-row items-center justify-center  gap-3 '>
                            <PhoneIcon size={21}/>    
                            <h1>+92-30045321221</h1>
                        </div>
                        <div className='flex flex-row items-center justify-center  gap-3 '>
                            <GpsIcon size={21}/>    
                            <h1>Karachi, Pakistan</h1>
                        </div>
                    <div className='flex flex-row items-center justify-center  gap-3 '>
                    <Link to="/soon" state={{main:"Caught You!",action:"Looking for Our Instagram, huh?"}}><div className='hover:bg-rust hover:text-white border border-text/10 rounded-full w-9 h-9 flex items-center justify-center  cursor-pointer'><InstagramLogoIcon  size={21}/></div></Link>
                    <Link to="/soon" state={{main:"Caught You!",action:"There is no Face for our Facebook"}}><div className='hover:bg-rust hover:text-white border border-text/10 rounded-full w-9 h-9 flex items-center justify-center  cursor-pointer'><FacebookLogoIcon  size={21}/></div></Link>
                    <Link to="/soon" state={{main:"Caught You!",action:"We can't leave this empty"}}><div className='hover:bg-rust hover:text-white border border-text/10 rounded-full w-9 h-9 flex items-center justify-center  cursor-pointer'><LinkedinLogoIcon  size={21}/></div></Link>
                    </div>
                    </div>
                    <div className='  overflow-hidden rounded-[5px] p-5 flex-1 w-full'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7107175417!2d66.49590410255709!3d25.192983523643715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1785460754493!5m2!1sen!2s" className='w-full h-full'  loading="lazy" ></iframe>
                    </div>
                </div>

            </div>
       </div>
    )
}

export default Contact