const Footer = () => {


  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Cocktail Picker</a>
        <a className="link link-hover">Featured Cocktails</a>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved<br />
          Created by&nbsp;
          <a className="link link-hover" href="chrisnelson.netlify.app">Chris&nbsp;Nelson</a><br />
          <a className="link link-hover" target="_blank" href="https://icons8.com/icon/12863/cocktail">Cocktail</a>&nbsp;icon by&nbsp;
          <a className="link link-hover" target="_blank" href="https://icons8.com">Icons8</a>
        </p>
      </aside>
    </footer>
  )
}


export default Footer