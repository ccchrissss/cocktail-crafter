import cocktailInHand from '../assets/cocktail-in-hand-table.jpg'
import { useState, useRef, useEffect } from 'react'

const CocktailPicker = ({ featuredCocktailToGet, featuredCocktailTrigger }) => {

  const inputRef = useRef()
  // const [currentlyDisplayedDrink, setCurrentlyDisplayedDrink] = useState(null)
  // const [currentFeaturedCocktail, setCurrentFeaturedCocktail] = useState(featuredCocktailToGet)
  const [showCocktailCard, setShowCocktailCard] = useState(false)
  const [drinkImage, setDrinkImage] = useState(null)
  const [glassType, setGlassType] = useState(null)
  const [drinkName, setDrinkName] = useState(null)
  const [ingredientsArr, setIngredientsArr] = useState([])
  const [measuresArr, setMeasuresArr] = useState([])
  const [instructions, setInstructions] = useState('')
  const [scrollTrigger, setScrollTrigger] = useState(true)
  const cocktailCard = useRef(null)


  useEffect(() => {
    // console.log('component rerendered')

    getFeaturedCocktail(featuredCocktailToGet)
  }, [featuredCocktailTrigger])

  // useEffect(() => {
  //   // console.log('component rerendered')

  //   setCurrentFeaturedCocktail(featuredCocktailToGet)
  //   // setCurrentlyDisplayedDrink(featuredCocktailToGet)
  //   // console.log('ran useEffect with dep - featuredCocktailToGet')
  // }, [featuredCocktailToGet])

  // useEffect(() => {
  //   // console.log('component rerendered')

  //   setCurrentlyDisplayedDrink(currentFeaturedCocktail)
  //   setCurrentFeaturedCocktail(null)
  // }, [currentFeaturedCocktail])

  // useEffect(() => {

  //   getDrink(currentlyDisplayedDrink)
  //   // console.log('ran useEffect with dep - currentlyDisplayedDrink')
  // }, [currentlyDisplayedDrink])

  // Add fetch into a useEffect hook. it's supposed to be inside a useEffect hook.


  const handleSubmit = event => {
    event.preventDefault()
    // console.log('handleSubmit')
    getDrink(inputRef.current.value)
  }

  useEffect(() => {
    if (drinkName && cocktailCard.current) {
      // console.log('scroll to cocktail card')
      // console.log('cocktailCard.current.scrollHeight: ', cocktailCard.current.scrollHeight)
      // console.log('cocktailcard bounding rect: ', cocktailCard.current.getBoundingClientRect())
      cocktailCard.current?.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
  }, [scrollTrigger])


  // const scrollToCocktailCard = () => {
  //   console.log('scroll to cocktail card')
  //   // console.log('cocktailCard.current.scrollHeight: ', cocktailCard.current.scrollHeight)
  //   console.log('cocktailcard bounding rect: ', cocktailCard.current.getBoundingClientRect())
  //   cocktailCard.current?.scrollIntoView({
  //     block: 'start',
  //     behavior: 'smooth'
  //   })
  // }

  const filterByPosition = (array, element, position1, position2) => {
    return array.filter(innerArray => innerArray[position1].includes(element) == true && innerArray[position2] !== null);
  }

  const roundToNearestQuarter = (num) => {
    return Math.round(num * 4) / 4
  }

  const getDrink = async (drink) => {
    
    try {

      // const drink = inputRef.current.value
      const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      const data = await response.json()

      data.drinks !== null ? setShowCocktailCard(true) : setShowCocktailCard(false)

      //         // this iterates through the data.drinks[0] array (the first drink Object in the array of drinks. The array of drinks is comprised of variations on the standard version of that drink if available). It then creates a 2d array of keys that contain the word 'Ingredient' and their corresponding values 
      setIngredientsArr(filterByPosition(Object.entries(data.drinks[0]), 'Ingredient', 0, 1))
      setMeasuresArr(filterByPosition(Object.entries(data.drinks[0]), 'Measure', 0, 1))

      setDrinkImage(data.drinks[0].strDrinkThumb)
      setGlassType(data.drinks[0].strGlass)
      setDrinkName(data.drinks[0].strDrink)
      setInstructions(data.drinks[0].strInstructions)

      setScrollTrigger(!scrollTrigger)
      // scrollToCocktailCard()

      // setCurrentlyDisplayedDrink(data.drinks[0].strDrink)
      // console.log('fc to get in get drink() BEFORE: ', featuredCocktailToGet)
      // featuredCocktailToGet = drink
      // console.log('fc to get in get drink() AFTER: ', featuredCocktailToGet)

    } catch (err) {
      console.log('Error: ', err)
    }
  }

  const getFeaturedCocktail = async (featuredCocktail) => {

    // console.log('featuredCocktail: ', featuredCocktail)
    
    try {

      const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${featuredCocktail}`)
      const data = await response.json()

      data.drinks !== null ? setShowCocktailCard(true) : setShowCocktailCard(false)

      //         // this iterates through the data.drinks[0] array (the first drink Object in the array of drinks. The array of drinks is comprised of variations on the standard version of that drink if available). It then creates a 2d array of keys that contain the word 'Ingredient' and their corresponding values 
      setIngredientsArr(filterByPosition(Object.entries(data.drinks[0]), 'Ingredient', 0, 1))
      setMeasuresArr(filterByPosition(Object.entries(data.drinks[0]), 'Measure', 0, 1))

      setDrinkImage(data.drinks[0].strDrinkThumb)
      setGlassType(data.drinks[0].strGlass)
      setDrinkName(data.drinks[0].strDrink)
      setInstructions(data.drinks[0].strInstructions)

      setScrollTrigger(!scrollTrigger)
      // scrollToCocktailCard()

    } catch (err) {
      console.log('Error: ', err)
    }

  }



  return (
    <>
      <div className="hero bg-base-200 min-h-[400px]">
        <div className="hero-content flex-col lg:flex-row-reverse p-6">
          <img
            src={cocktailInHand}
            className="hidden rounded-lg shadow-2xl m-8 lg:block"
          />
          <div>
            <div className="flex justify-center flex-wrap">
              <h1 className="text-4xl text-center font-bold my-6">The Cocktail Picker</h1>
              <div className="h-0 basis-full"></div>
              <hr className="border border-neutral-400 w-40 my-6" />
              <div className="h-0 basis-full"></div>
              <p className="text-center py-6">
              Which cocktail would you like to make&nbsp;today?
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex justify-center max-w-88 m-auto">
              <input type="text" ref={inputRef} placeholder="e.g. margarita" className="input mr-2 mb-6" />
              <button type="submit" className="btn btn-primary mb-6">Pour it up!</button>
            </form>
          </div>
        </div>
      </div>
      {/* <img src={drinkPic} /> */}

      {showCocktailCard && 
        <div ref={cocktailCard} className="card lg:card-side bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{drinkName}</h2>
            <p className="italic">{glassType}</p>
            <h3 className="font-bold">Ingredients</h3>
            <ul>
              {ingredientsArr.map( (e, i) => (
                <li key={`ingredient-${i}`}>
                  { measuresArr[i] ? measuresArr[i][1].toLowerCase().includes(' cl') ? `${roundToNearestQuarter((measuresArr[i][1].split(' ')[0] * 0.33814))} oz `
                    : measuresArr[i][1].toLowerCase().includes(' ml') ? `${roundToNearestQuarter(measuresArr[i][1].split(' ')[0] * 0.033814)} oz `
                    : measuresArr[i][1] + ' ' : ''}{e[1]}
                </li>
              ))}
            </ul>
            <h3 className="font-bold">Instructions</h3>
            <p>{instructions}</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div> */}
          </div>
          <figure className="lg:order-first">
            <img
              src={drinkImage}
              alt="cocktail" className="animate-fadeIn" />
          </figure>
        </div>
      }
      
    </>
  )

}


export default CocktailPicker