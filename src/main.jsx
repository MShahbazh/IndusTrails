import { createRoot } from 'react-dom/client'
import "./index.css"
import Header from './components'
import {ProvideContext} from './Context/Context'

createRoot(document.getElementById('root')).render(
    <ProvideContext>
        <Header/>
    </ProvideContext>
)