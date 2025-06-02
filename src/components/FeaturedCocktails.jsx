import garibaldiNegroni from '../assets/featured-cocktails/garibaldi-negroni.jpeg'
import grimReaper from '../assets/featured-cocktails/grim-reaper.jpeg'
import b52 from '../assets/featured-cocktails/b-52.jpeg'
import ginLemon from '../assets/featured-cocktails/gin-lemon.jpeg'
import greyhound from '../assets/featured-cocktails/greyhound.jpeg'
import mountainBramble from '../assets/featured-cocktails/mountain-bramble.jpeg'
import thePhilosopher from '../assets/featured-cocktails/the-philosopher.jpeg'
import vampiro from '../assets/featured-cocktails/vampiro.jpeg'


const FeaturedCocktails = () => {


  return (
    <>
      <h3>Featured Cocktails</h3>
      <div className="carousel carousel-center rounded-box max-h-60">
        <div className="carousel-item max-w-[240px] py-3 px-3 pl-3">
          <img className="mx-auto" src={garibaldiNegroni} alt="Garibaldi Negroni" />
        </div>
        <div className="carousel-item max-w-[240px] py-3 px-3">
          <img className="mx-auto"
            src={grimReaper}
            alt="Grim Reaper" />
        </div>
        <div className="carousel-item max-w-[240px] py-3 px-3">
          <img className="mx-auto"
            src={b52}
            alt="B 52" />
        </div>
        <div className="carousel-item max-w-[240px] py-3 px-3">
          <img className="mx-auto"
              src={ginLemon}
              alt="Gin Lemon" />
        </div>
        <div className="carousel-item max-w-[240px] py-3 px-3">
          <img className="mx-auto"
            src={greyhound}
            alt="Greyhound" />
        </div>
        <div className="carousel-item max-w-[240px] py-3 px-3">
          <img className="mx-auto"
              src={mountainBramble}
              alt="Mountain Bramble" />
        </div>
        <div className="carousel-item max-w-[240px] py-3 px-3">
          <img className="mx-auto"
              src={thePhilosopher}
              alt="The Philosopher" />
        </div>
        <div className="carousel-item max-w-[240px] py-3 px-3">
          <img className="mx-auto"
            src={vampiro}
            alt="Vampiro" />
        </div>
      </div>
    </>
  )
}


export default FeaturedCocktails