import {Home,Destinations,Header,Footer,About,Contact,Packages,Soon} from '../components/index'
import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import {Scroll} from '../components'

function Layout(){
    return(
        <>
            <Scroll/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

function Layout2(){
    return(
        <>
            <Scroll/>
            <Header/>
            <Outlet/>
        </>
    )
}

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>                
                <Route path='packages' element={<Packages/>}/>
                <Route path='destinations' element={<Destinations/>}/>
            </Route>
            <Route path='soon' element={<Layout2/>}>
                <Route path='' element={<Soon/>}/>
            </Route>

        </Route>
    )
)


export default router