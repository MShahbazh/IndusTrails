function About(){
    return(
        <div className=" bg-nav flex flex-col items-center justify-center py-20 px-10 gap-10">
            
                <h1 className='text-md text-text/40 font-gsans font-bold'>ABOUT</h1>
               <div className="flex flex-col items-center justify-center gap-4 ">
                 <h1 className='text-4xl font-fraunces text-rust'>Why do we Exist ?</h1>
                <p className="text-text/50 font-gsans">A Sindh Focused Tour and Travelling Site with Complete Packages and Amazing Experience</p>
               </div >
               <p className="p-10 text-center font-gsans text-text ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-3 font-gsans w-full gap-5 text-text" >
                <div className='w-full flex flex-col items-center justify-center border-2 rounded-[5px] border-text p-5'>
                    <h1 className="text-2xl">20+</h1>
                    <p className="text-xl">Packages</p>
                </div>
                <div className='w-full flex flex-col items-center justify-center border-2 rounded-[5px] border-text p-5'>
                    <h1 className="text-2xl">5+</h1>
                    <p className="text-xl">Categories</p>
                </div>
                <div className='w-full flex flex-col items-center justify-center border-2 rounded-[5px] border-text p-5'>
                    <h1 className="text-2xl">100%</h1>
                    <p className="text-xl">Sindh Focused</p>
                </div>
               </div>
                <p className="text-text/50 font-gsans italic">Built By someone who has walked these trails Himself</p>

        </div>
    )
}

export default About