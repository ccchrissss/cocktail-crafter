// import { useState } from 'react'
import Header from './components/Header'
import CocktailPicker from './components/CocktailPicker'
import Footer from './components/Footer'
import FeaturedCocktails from './components/FeaturedCocktails'
import './App.css'
import { useState } from 'react'

function App() {
  const [featuredCocktailToGet, setFeaturedCocktailToGet] = useState(null)


  const testCocktail = (beverage) => {
    // console.log('hi test cocktail')

    setFeaturedCocktailToGet(beverage)
    console.log('testCocktail(): ', featuredCocktailToGet)
  }

  return (
    <>
      <Header />
      <CocktailPicker featuredCocktailToGet={featuredCocktailToGet}  />
      <FeaturedCocktails 
        handleGreyhoundClick={() => testCocktail('greyhound')}
        handleVampiroClick={() => testCocktail('vampiro')}
      />
      <Footer />
    </>

  )
}

export default App
