
const Navbar = () => {

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>Cocktail Picker</a></li>
            <li><a>Featured Cocktails</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div> */}
        <a href="#" className="btn btn-ghost text-2xl">Cocktail Crafter</a>
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#">Home</a></li>
            <li><a href="#cocktail-picker">Cocktail Picker</a></li>
            <li><a href="#featured-cocktails">Featured Cocktails</a></li>
          </ul>
        </div>
        <div className="dropdown relative">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow absolute right-0">
            <li><a href="#">Home</a></li>
            <li><a href="#cocktail-picker">Cocktail Picker</a></li>
            <li><a href="#featured-cocktails">Featured Cocktails</a></li>
          </ul>
        </div>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div> 

  )
}


export default Navbar