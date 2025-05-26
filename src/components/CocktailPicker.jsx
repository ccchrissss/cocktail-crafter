import cocktailInHand from '../assets/cocktail-in-hand-table.jpg'
import { useState, useRef } from 'react'

const CocktailPicker = () => {
  const inputRef = useRef()
  const [showCocktailCard, setshowCocktailCard] = useState(false)
  const [drinkImage, setDrinkImage] = useState(null)
  const [glassType, setGlassType] = useState(null)
  const [drinkName, setDrinkName] = useState(null)
  const [ingredientsArr, setIngredientsArr] = useState([])
  const [measuresArr, setMeasuresArr] = useState([])
  const [instructions, setInstructions] = useState('')



  const handleSubmit = event => {
    event.preventDefault()
    // console.log('handleSubmit')
    getDrink()
  }

  const filterByPosition = (array, element, position1, position2) => {
    return array.filter(innerArray => innerArray[position1].includes(element) == true && innerArray[position2] !== null);
  }

  const roundToNearestQuarter = (num) => {
    return Math.round(num * 4) / 4
  }

  const getDrink = () => {
    // console.log('getDrink')
    // console.log(inputRef.current.value)
    
    const drink = inputRef.current.value

    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {

            setshowCocktailCard(true)
            console.log(data)
            console.log(data.drinks[0].strDrink)
            console.log(data.drinks[0].strGlass)
            console.log(data.drinks[0].strInstructions)
            console.log(data.drinks[0].strIngredient)

            // this iterates through the data.drinks[0] array (the first drink Object in the array of drinks. The array of drinks is comprised of variations on the standard version of that drink if available). It then creates a 2d array of keys that contain the word 'Ingredient' and their corresponding values 
            setIngredientsArr(filterByPosition(Object.entries(data.drinks[0]), 'Ingredient', 0, 1))
            setMeasuresArr(filterByPosition(Object.entries(data.drinks[0]), 'Measure', 0, 1))

            console.log(ingredientsArr)
            console.log(measuresArr)

            setDrinkImage(data.drinks[0].strDrinkThumb)
            setGlassType(data.drinks[0].strGlass)
            setDrinkName(data.drinks[0].strDrink)
            setInstructions(data.drinks[0].strInstructions)
        })
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
        <div className="card lg:card-side bg-base-100 shadow-sm">
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
              alt="cocktail" />
          </figure>
        </div>
      }
      
    </>
  )

}


export default CocktailPicker