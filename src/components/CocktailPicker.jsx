import cocktailInHand from '../assets/cocktail-in-hand-table.jpg'
import { useRef } from 'react'

const CocktailPicker = () => {
  const inputRef = useRef()
  let drinkImage = "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"

  const handleSubmit = event => {
    event.preventDefault()
    // console.log('handleSubmit')
    getDrink()
  }

  const filterByPosition = (array, element, position) => {
    return array.filter(innerArray => innerArray[position].includes(element) == true);
  }

  const getDrink = () => {
    // console.log('getDrink')
    console.log(inputRef.current.value)
    
    const drink = inputRef.current.value

    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            drinkImage = data.drinks[0].strDrinkThumb
            console.log(data.drinks[0].strDrink)
            console.log(data.drinks[0].strGlass)
            console.log(data.drinks[0].strInstructions)

            let ingredientsArr = filterByPosition(Object.entries(data.drinks[0]), 'Ingredient', 0)
            let measureArr = filterByPosition(Object.entries(data.drinks[0]), 'Measure', 0)

            console.log(ingredientsArr)
            console.log(measureArr)
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
              <button type="submit" className="btn btn-primary mb-6">Get Cocktail</button>
            </form>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={drinkImage}
            alt="cocktail" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Drink Name</h2>
          <p>Glass Type</p>
          <ul>
            <li>Ingredient</li>
            <li>Ingredient</li>
            <li>Ingredient</li>
          </ul>
          <ol>
            <li>Instruction</li>
            <li>Instruction</li>
            <li>Instruction</li>
          </ol>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
    </>
  )

}


export default CocktailPicker