import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContaines from './componentes/ItemListContainer/ItemListContaines'

function App() {
  //const [count, setCount] = useState(0)

  return (

    <>
    <NavBar />
    
    <ItemListContaines TextoBienvenida="Bienvenido a Nuetra Tienda Realizada con React"/>
    
    
    </>
  )
}

export default App
