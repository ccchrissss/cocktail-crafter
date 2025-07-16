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


  const updateFeaturedCocktailAndTrigger = (beverage) => {

    setFeaturedCocktailToGet(beverage)
    setFeaturedCocktailTrigger(!featuredCocktailTrigger)
  }

  return (
    <>
      <Header />
      <CocktailPicker 
        featuredCocktailToGet={featuredCocktailToGet} 
        featuredCocktailTrigger={featuredCocktailTrigger} 
      />
      <FeaturedCocktails 
        handleGreyhoundClick={() => updateFeaturedCocktailAndTrigger('greyhound')}
        handleVampiroClick={() => updateFeaturedCocktailAndTrigger('vampiro')}
        handleThePhilosopherClick={() => updateFeaturedCocktailAndTrigger('the philosopher')}
        handleGinLemonClick={() => updateFeaturedCocktailAndTrigger('gin lemon')}
        handleMountainBrambleClick={() => updateFeaturedCocktailAndTrigger('mountain bramble')}
        handleGrimReaperClick={() => updateFeaturedCocktailAndTrigger('grim reaper')}
        handleB52Click={() => updateFeaturedCocktailAndTrigger('b-52')}
        handleGaribaldiNegroniClick={() => updateFeaturedCocktailAndTrigger('garibaldi negroni')}
      />
      <Footer />
    </>

  )
}

export default App
