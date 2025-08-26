import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/ItemListContainer'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      <NavBar />
      <h1>¡Bienvenidos!</h1>
      <div class="div-productos">
        <Item producto="Tazas" precio="4100" />
        <Item producto="Vasos" precio="2500" />
        <Item producto="Platos" precio="2700" />
        <Item producto="Cubiertos" precio="3000" />
      </div>
    </>
  )
}

export default App
