import { createRoot } from 'react-dom/client'
import "./index.css"
import {ProvideContext} from './context/Context'
import router from './router/RouterConfig'
import { RouterProvider } from 'react-router-dom'
import { Scroll } from './components'

createRoot(document.getElementById('root')).render(
    <ProvideContext>
        <RouterProvider router={router}>
        <Scroll>

        </Scroll>
        </RouterProvider>
    </ProvideContext>
)