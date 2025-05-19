// import { useState } from 'react'
import Header from './components/Header'
import CocktailPicker from './components/CocktailPicker'
import Footer from './components/Footer'
import FeaturedCocktails from './components/FeaturedCocktails'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CocktailPicker />
      <FeaturedCocktails />
      <Footer />
    </>

  )
}

export default App
