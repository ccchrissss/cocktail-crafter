import garibaldiNegroni from '../assets/featured-cocktails/garibaldi-negroni.jpeg'
import grimReaper from '../assets/featured-cocktails/grim-reaper.jpeg'
import b52 from '../assets/featured-cocktails/b-52.jpeg'
import ginLemon from '../assets/featured-cocktails/gin-lemon.jpeg'
import greyhound from '../assets/featured-cocktails/greyhound.jpeg'
import mountainBramble from '../assets/featured-cocktails/mountain-bramble.jpeg'
import thePhilosopher from '../assets/featured-cocktails/the-philosopher.jpeg'
import vampiro from '../assets/featured-cocktails/vampiro.jpeg'

import { useRef } from 'react'


const FeaturedCocktails = ({ handleGreyhoundClick, handleVampiroClick, handleThePhilosopherClick, handleGinLemonClick, handleMountainBrambleClick, handleGrimReaperClick, handleB52Click, handleGaribaldiNegroniClick }) => {
  
  const carouselRef = useRef(null)

  const handleClick = direction => {
    // carouselRef.scroll(100,0)

    carouselRef.current.scrollBy({
      left: direction * 240,
      behavior: 'smooth',
    })
  }

  // const handleFeaturedCocktailClick = () => {
  //   console.log('handle featured cocktail click')
  // }

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-screen-xl">
          <h3 id="featured-cocktails" className="p-6 text-xl">Featured Cocktails</h3>
          <div className="h-0 basis-full"></div>
          <div className="relative group/arrow-btns">
            <div ref={carouselRef} className="relative carousel carousel-center rounded-box max-h-60 md:mx-6">
              {/* <div className="top-1/2 absolute left-5 right-5 flex transform justify-between ">
                <a className="btn btn-square" onClick={() => handleClick(-1)}>❮</a>
                <a className="btn btn-circle" onClick={() => handleClick(1)}>❯</a>
              </div> */}
              <div className="carousel-item max-w-[216px] py-3 px-3">
                <div className="absolute peer w-[216px] bottom-3 h-[25%] flex justify-center items-center text-l font text-white rounded-b-md border-t-[1px] border-white font-medium backdrop-filters-wk-safe backdrop-blur-[5px] backdrop-brightness-90">
                  <h3 className="cursor-pointer">
                  <a className="link link-hover" onClick={handleGreyhoundClick}>Greyhound</a></h3>
                </div>
                <img className="mx-auto rounded-md hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] peer-hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out"
                  src={greyhound}
                  alt="Greyhound" />
              </div>
              <div className="carousel-item max-w-[216px] py-3 px-3">
                <div className="absolute peer w-[216px] bottom-3 h-[25%] flex justify-center items-center text-l font text-white rounded-b-md border-t-[1px] border-white font-medium backdrop-filters-wk-safe backdrop-blur-[5px] backdrop-brightness-90">
                  <h3 className="cursor-pointer">
                  <a className="link link-hover" onClick={handleVampiroClick}>Vampiro</a></h3>
                </div>
                <img className="mx-auto rounded-md hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] peer-hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out"
                  src={vampiro}
                  alt="Vampiro" />
              </div>
              <div className="carousel-item max-w-[216px] py-3 px-3">
                <div className="absolute peer w-[216px] bottom-3 h-[25%] flex justify-center items-center text-l font text-white rounded-b-md border-t-[1px] border-white font-medium backdrop-filters-wk-safe backdrop-blur-[5px] backdrop-brightness-90">
                  <h3 className="cursor-pointer">
                  <a className="link link-hover" onClick={handleThePhilosopherClick}>The Philosopher</a></h3>
                </div>
                <img className="mx-auto rounded-md hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] peer-hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out"
                    src={thePhilosopher}
                    alt="The Philosopher" />
              </div>
              <div className="carousel-item max-w-[216px] py-3 px-3">
                <div className="absolute peer w-[216px] bottom-3 h-[25%] flex justify-center items-center text-l font text-white rounded-b-md border-t-[1px] border-white font-medium backdrop-filters-wk-safe backdrop-blur-[5px] backdrop-brightness-90">
                  <h3 className="cursor-pointer">
                  <a className="link link-hover" onClick={handleGinLemonClick}>Gin Lemon</a></h3>
                </div>
                <img className="mx-auto rounded-md hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] peer-hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out"
                    src={ginLemon}
                    alt="Gin Lemon" />
              </div>
              <div className="carousel-item max-w-[216px] py-3 px-3">
                <div className="absolute peer w-[216px] bottom-3 h-[25%] flex justify-center items-center text-l font text-white rounded-b-md border-t-[1px] border-white font-medium backdrop-filters-wk-safe backdrop-blur-[5px] backdrop-brightness-90">
                  <h3 className="cursor-pointer">
                  <a className="link link-hover" onClick={handleMountainBrambleClick}>Mountain Bramble</a></h3>
                </div>
                <img className="mx-auto rounded-md hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] peer-hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out"
                    src={mountainBramble}
                    alt="Mountain Bramble" />
              </div>
              <div className="carousel-item max-w-[216px] py-3 px-3">
                <div className="absolute peer w-[216px] bottom-3 h-[25%] flex justify-center items-center text-l text-white rounded-b-md border-t-[1px] border-white font-medium backdrop-filters-wk-safe backdrop-blur-[5px] backdrop-brightness-90">
                  <h3 className="cursor-pointer">
                  <a className="link link-hover" onClick={handleGrimReaperClick}>Grim Reaper</a></h3>
                </div>
                <img className="mx-auto rounded-md hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] peer-hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out"
                  src={grimReaper}
                  alt="Grim Reaper" />
              </div>
              <div className="carousel-item max-w-[216px] py-3 px-3">
                <div className="absolute peer w-[216px] bottom-3 h-[25%] flex justify-center items-center text-l font text-white rounded-b-md border-t-[1px] border-white font-medium backdrop-filters-wk-safe backdrop-blur-[5px] backdrop-brightness-90">
                  <h3 className="cursor-pointer">
                  <a className="link link-hover" onClick={handleB52Click}>B-52</a></h3>
                </div>
                <img className="mx-auto rounded-md hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] peer-hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out"
                  src={b52}
                  alt="B-52" />
              </div>
              <div className="carousel-item relative max-w-[216px] py-3 px-3">
                <div className="absolute peer w-[216px] bottom-3 h-[25%] flex justify-center items-center text-l text-white rounded-b-md border-t-[1px] border-white font-medium backdrop-filters-wk-safe backdrop-blur-[5px] backdrop-brightness-90">
                  <h3 className="cursor-pointer">
                  <a className="link link-hover" onClick={handleGaribaldiNegroniClick}>Garibaldi Negroni</a></h3>
                </div>
                <img
                  className="mx-auto rounded-md hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] peer-hover:shadow-[0_5px_7px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out"
                  src={garibaldiNegroni}
                  alt="Garibaldi Negroni"
                />
              </div>
            </div>
            <div className="left-7 right-7 flex transform justify-between mt-3 mb-6 px-6">
              <a className="btn btn-circle" onClick={() => handleClick(-1)}>❮</a>
              <a className="btn btn-circle" onClick={() => handleClick(1)}>❯</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default FeaturedCocktails