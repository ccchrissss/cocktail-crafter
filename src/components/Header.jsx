import Navbar from './Navbar'
import liquorShelves from '../assets/liquor-shelves-retina-size.jpg.nosync.jpg'

const Header = () => {
  
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-screen-xl">
          <img src={liquorShelves}></img>
          <Navbar />
        </div>
      </div>
    </>
  )
}


export default Header