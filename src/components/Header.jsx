import Navbar from './Navbar'
import liquorShelves from '../assets/liquor-shelves-retina-size.jpg.nosync.jpg'

const Header = () => {
  
  return (
    <>
      <img src={liquorShelves}></img>
      <Navbar />
    </>
  )
}


export default Header