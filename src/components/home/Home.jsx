import {Link} from 'react-router-dom'
import {camel,camel2,camel3,camel4} from '../../assets'
import {destinations,packages} from '../../data/data'
import {DesCard,PackCard} from '../index'
import { ArrowRightIcon } from '@phosphor-icons/react'
import { useState } from 'react'

function Home(){
  
    const [dests,setDests]=useState([destinations[0],destinations[1],destinations[2]])

    const [packs,setPacks]=useState([packages[0],packages[1],packages[2]])

    const whyChoose=[
        [0,"Local Guides","Every Trip is Led by an Expert Local Guide from the Region"],
        [1,"Small Groups","Max 12 Travellers per trip so the ruins and desert stay quiet"],
        [2,"Custom Trips","Option of Custom Trips around your dates and interests"],
        [3,"Fair Prices","No Hidden Costs. What you see at booking is what you pay"],
        [4,"Real Experiences","Stay in local homes, eat local food, meet the people who live there."],
        [5,"Safe Travel","We check routes and weather before every trip, every time."],
    ]
    return(        
            <div className=''>
               
                <div className=' bg-nav2 text-text grid grid-cols-1 font-gsans '>
                    <img src={camel} className='hidden sm:flex'  alt=""/>                        
                    <img src={camel2} className='sm:hidden'  alt=""/>                        
                    <div className="absolute p-10 md:p-8 w-full md:w-[80%] lg:w-[75%] flex flex-col gap-10 md:gap-4 lg:gap-7 ">
                            <div className=' top-0 left-0 text-xl w-full lg:w-[70%]'>
                                <h1 className="font-bold text-antidarkRust">Since the Indus first met the Sea</h1>
                                <h1 className='pt-6 lg:pt-10 text-3xl text-black    '>Trail Through the <span className='text-antidarkRust font-fraunces md:text-3xl'>4500 year old</span> Territory</h1>
                
                                <p className=' hidden md:flex  text-black/70 pt-3 md:pt-6 lg:pt-10 text-sm md:text-md lg:text-xl'>Travel through the Desert Lands of Thar, explore the ancient Secrets of Mohenjo-Daro and stand where the Mighty Indus Meets its dest</p>
                            </div>
                            <div >
                                <Link to="soon" state={{main:"Don't Explore",action:"Exploring is bad"}} className='font-bold bg-antidarkRust p-2 md:p-3 lg:p4 cursor-pointer text-white'>Explore More</Link>
                            </div>    
                    </div>
                </div>
                


                <div className=' bg-nav flex flex-col items-center justify-center py-20 px-16 gap-12'>
                    <h1 className=' text-3xl lg:text-4xl font-fraunces text-rust '>Featured Destinations</h1>
                    <div className='flex items-center justify-center w-full flex-col gap-5 lg:gap-0 lg:flex-row'>
                        {
                            dests.map((element)=>{
                                return(
                                    <div key={element.id} className='flex-1 flex items-center justify-center'>
                                        <DesCard  value={element}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    <Link to="/destinations" className='font-bold p-4 group hover:scale-105 bg-rust cursor-pointer text-white flex flex-row items-center justify-center gap-2'>
                    <h1>Discover More</h1>
                    <ArrowRightIcon className='group-hover:translate-x-1'/>
                    </Link>
                </div>

                <div className="bg-nav py-20 px-16 flex flex-col items-center justify-center gap-12">   
                    <h1 className=' text-3xl lg:text-4xl font-fraunces text-rust '>Why Choose Us?</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 font-gsans'>
                        {
                            whyChoose.map((element)=>{
                                return(
                                <div key={element[0]} className='flex flex-col items-start justify-center p-3 gap-5 border-s-2 border-sand border-t-2'>
                                    {/* <div className='w-full h-1 bg-sand'></div> */}
                                    <h1 className='text-rust text-xl lg:text-2xl font-fraunces'>{element[1]}</h1>   
                                    <p className='text-text/50 text-sm lg:text-xl'>{element[2]}</p> 
                                </div>
                                )
                            })
                        }            
                    </div>
                    <Link to="soon" state={{main:"Please Choose Us!",action:"You really thought there were more features ?"}} className='font-bold p-4 group hover:scale-105 bg-rust cursor-pointer text-white flex flex-row items-center justify-center gap-2'>
                    <h1>More Features</h1>
                    <ArrowRightIcon className='group-hover:translate-x-1'/>
                    </Link>
                </div>

                <div className='bg-nav py-20 px-16 flex flex-col items-center justify-center gap-12'>
                    <h1 className=' text-3xl lg:text-4xl font-fraunces text-rust '>Trending Packages</h1>      
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 font-gsans'>
                         {
                            packs.map((element)=>{
                                return(
                                    <div key={element.id} className='flex-1 flex items-center justify-center'>
                                        <PackCard  value={element}/>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <Link to="/packages" className='font-bold p-4 group hover:scale-105 bg-rust cursor-pointer text-white flex flex-row items-center justify-center gap-2'>
                    <h1>View Packages</h1>
                    <ArrowRightIcon className='group-hover:translate-x-1'/>
                    </Link>
                </div>


                <div className='relative py-15 font-gsans bg-nav flex flex-col items-center justify-center overflow-hidden'>
                    <img src={camel3} className='hidden absolute md:flex' alt="" />
                    <img src={camel4} className='flex absolute md:hidden' alt="" />
                    <div className='p-3 rounded-[5px]  relative  flex flex-col items-center justify-center gap-10 '>
                   <div className='   flex flex-col items-center justify-center gap-8'>
                        <h1 className=' text-3xl lg:text-4xl font-fraunces text-antidarkRust '>Plan Your Trip</h1>      
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-black/50 text-md'>Tell us where in Sindh you want to go</p>
                            <p className='text-black/50 text-md'>We'll build the route around you</p>
                        </div>
                    </div>
                    <Link to="soon"  state={{main:"Planning Your Trip?",action:"NO! Save your Money"}} className='font-bold p-4 group hover:scale-105 bg-antidarkRust cursor-pointer text-white flex flex-row items-center justify-center gap-2'>
                    <h1>Plan My Trip</h1>
                    <ArrowRightIcon className='group-hover:translate-x-1'/>
                    </Link> 


                    </div>
                </div>
                        


            </div>
    )
}

export default Home