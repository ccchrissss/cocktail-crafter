// import { useState } from 'react'
import Header from './components/Header'
import CocktailPicker from './components/CocktailPicker'
import Footer from './components/Footer'
import FeaturedCocktails from './components/FeaturedCocktails'
import './App.css'
import { useState } from 'react'

function App() {
  const [featuredCocktailToGet, setFeaturedCocktailToGet] = useState(null)
  const [featuredCocktailTrigger, setFeaturedCocktailTrigger] = useState(true)


  const testCocktail = (beverage) => {
    // console.log('hi test cocktail')

    setFeaturedCocktailToGet(beverage)
    setFeaturedCocktailTrigger(!featuredCocktailTrigger)
    // console.log('testCocktail(): ', featuredCocktailToGet)
  }

  return (
    <>
      <Header />
      <CocktailPicker 
        featuredCocktailToGet={featuredCocktailToGet} 
        featuredCocktailTrigger={featuredCocktailTrigger} 
      />
      <FeaturedCocktails 
        handleGreyhoundClick={() => testCocktail('greyhound')}
        handleVampiroClick={() => testCocktail('vampiro')}
        handleThePhilosopherClick={() => testCocktail('the philosopher')}
        handleGinLemonClick={() => testCocktail('gin lemon')}
        handleMountainBrambleClick={() => testCocktail('mountain bramble')}
        handleGrimReaperClick={() => testCocktail('grim reaper')}
        handleB52Click={() => testCocktail('b-52')}
        handleGaribaldiNegroniClick={() => testCocktail('garibaldi negroni')}
      />
      <Footer />
    </>

  )
}

export default App
