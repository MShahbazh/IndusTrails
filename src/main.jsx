import { createRoot } from 'react-dom/client'
import "./index.css"
import {ProvideContext} from './Context/Context'
import router from './Router/RouterConfig'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <ProvideContext>
        <RouterProvider router={router}/>
    </ProvideContext>
)