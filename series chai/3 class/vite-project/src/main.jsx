import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render( //in this react creates its own dom "virtrual dom" ,and then in that 
  //we are creating component  and we are rendering a components in this 


  <StrictMode>
    <App />
  </StrictMode>,
)
