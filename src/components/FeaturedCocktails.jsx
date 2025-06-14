import garibaldiNegroni from '../assets/featured-cocktails/garibaldi-negroni.jpeg'
import grimReaper from '../assets/featured-cocktails/grim-reaper.jpeg'
import b52 from '../assets/featured-cocktails/b-52.jpeg'
import ginLemon from '../assets/featured-cocktails/gin-lemon.jpeg'
import greyhound from '../assets/featured-cocktails/greyhound.jpeg'
import mountainBramble from '../assets/featured-cocktails/mountain-bramble.jpeg'
import thePhilosopher from '../assets/featured-cocktails/the-philosopher.jpeg'
import vampiro from '../assets/featured-cocktails/vampiro.jpeg'

import { useRef } from 'react'


const FeaturedCocktails = () => {
  
  const carouselRef = useRef(null)

  const handleClick = direction => {
    // carouselRef.scroll(100,0)

    carouselRef.current.scrollBy({
      left: direction * 240,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <h3 className="p-6 text-xl">Featured Cocktails</h3>
      <div className="relative group/arrow-btns">
        <div ref={carouselRef} className="relative carousel carousel-center rounded-box max-h-60">
          {/* <div className="top-1/2 absolute left-5 right-5 flex transform justify-between ">
            <a className="btn btn-square" onClick={() => handleClick(-1)}>❮</a>
            <a className="btn btn-circle" onClick={() => handleClick(1)}>❯</a>
          </div> */}
          <div className="carousel-item relative max-w-[240px] py-3 px-3 group/garibaldi">
            <img
              className="mx-auto rounded-md"
              src={garibaldiNegroni}
              alt="Garibaldi Negroni"
            />
            <div className="absolute w-[216px] bottom-3 h-[25%] mx-3 flex justify-center hover: items-center text-l font text-white rounded-b-md border-t-1 border-white backdrop-brightness-87 font-medium backdrop-blur-[5px]">
              <h3 className="cursor-pointer">
              <a className="link link-hover">Garibaldi Negroni</a></h3>
            </div>
          </div>
          <div className="carousel-item max-w-[240px] py-3 px-3">
            <img className="mx-auto rounded-md"
              src={grimReaper}
              alt="Grim Reaper" />
            <div className="absolute w-[216px] bottom-3 h-[25%] mx-3 flex justify-center hover: items-center text-l font text-white rounded-b-md border-t-1 border-white backdrop-brightness-87 font-medium backdrop-blur-[5px]">
              <h3 className="cursor-pointer">
              <a className="link link-hover">Grim Reaper</a></h3>
            </div>
          </div>
          <div className="carousel-item max-w-[240px] py-3 px-3">
            <img className="mx-auto rounded-md"
                src={thePhilosopher}
                alt="The Philosopher" />
            <div className="absolute w-[216px] bottom-3 h-[25%] mx-3 flex justify-center hover: items-center text-l font text-white rounded-b-md border-t-1 border-white backdrop-brightness-87 font-medium backdrop-blur-[5px]">
              <h3 className="cursor-pointer">
              <a className="link link-hover">The Philosopher</a></h3>
            </div>
          </div>
          <div className="carousel-item max-w-[240px] py-3 px-3">
            <img className="mx-auto rounded-md"
                src={ginLemon}
                alt="Gin Lemon" />
            <div className="absolute w-[216px] bottom-3 h-[25%] mx-3 flex justify-center hover: items-center text-l font text-white rounded-b-md border-t-1 border-white backdrop-brightness-87 font-medium backdrop-blur-[5px]">
              <h3 className="cursor-pointer">
              <a className="link link-hover">Gin Lemon</a></h3>
            </div>
          </div>
          <div className="carousel-item max-w-[240px] py-3 px-3">
            <img className="mx-auto rounded-md"
                src={mountainBramble}
                alt="Mountain Bramble" />
            <div className="absolute w-[216px] bottom-3 h-[25%] mx-3 flex justify-center hover: items-center text-l font text-white rounded-b-md border-t-1 border-white backdrop-brightness-87 font-medium backdrop-blur-[5px]">
              <h3 className="cursor-pointer">
              <a className="link link-hover">Mountain Bramble</a></h3>
            </div>
          </div>
          <div className="carousel-item max-w-[240px] py-3 px-3">
            <img className="mx-auto rounded-md"
              src={greyhound}
              alt="Greyhound" />
            <div className="absolute w-[216px] bottom-3 h-[25%] mx-3 flex justify-center hover: items-center text-l font text-white rounded-b-md border-t-1 border-white backdrop-brightness-87 font-medium backdrop-blur-[5px]">
              <h3 className="cursor-pointer">
              <a className="link link-hover">Greyhound</a></h3>
            </div>
          </div>
          <div className="carousel-item max-w-[240px] py-3 px-3">
            <img className="mx-auto rounded-md"
              src={b52}
              alt="B 52" />
            <div className="absolute w-[216px] bottom-3 h-[25%] mx-3 flex justify-center hover: items-center text-l font text-white rounded-b-md border-t-1 border-white backdrop-brightness-87 font-medium backdrop-blur-[5px]">
              <h3 className="cursor-pointer">
              <a className="link link-hover">B 52</a></h3>
            </div>
          </div>
          <div className="carousel-item max-w-[240px] py-3 px-3">
            <img className="mx-auto rounded-md"
              src={vampiro}
              alt="Vampiro" />
            <div className="absolute w-[216px] bottom-3 h-[25%] mx-3 flex justify-center hover: items-center text-l font text-white rounded-b-md border-t-1 border-white backdrop-brightness-87 font-medium backdrop-blur-[5px]">
              <h3 className="cursor-pointer">
              <a className="link link-hover">Vampiro</a></h3>
            </div>
          </div>
        </div>
        <div className="top-[42%] absolute left-7 right-7 flex transform justify-between">
          <a className="btn btn-circle opacity-0 group-hover/arrow-btns:opacity-100 transition-opacity duration-300" onClick={() => handleClick(-1)}>❮</a>
          <a className="btn btn-circle hidden group-hover/arrow-btns:inline-flex" onClick={() => handleClick(1)}>❯</a>
        </div>
      </div>
    </>
  )
}


export default FeaturedCocktails