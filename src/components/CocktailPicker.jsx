import cocktailInHand from '../assets/cocktail-in-hand-table.jpg'

const CocktailPicker = () => {

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
            <div className="flex justify-center max-w-88 m-auto">
              <input type="text" placeholder="e.g. margarita" className="input mr-2 mb-6" />
              <button className="btn btn-primary mb-6">Get Cocktail</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}


export default CocktailPicker