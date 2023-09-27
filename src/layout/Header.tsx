import { useState, useEffect } from "react";

import Navegation from "../components/navegation/Navegation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const putNavbarFixed = () => {
    setWindowWidth(window.scrollY);
    if (window.scrollY >= 490) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', putNavbarFixed);

    return () => {
      window.removeEventListener('scroll', putNavbarFixed);
    }
  }, []);

  return (
    <>
      <header className={`bg-white border-b-2 p-5 transition-all ${windowWidth >= 490 ? 'sticky top-0 z-50' : ''} ${navbar ? 'shadow-md border-b-0' : ''}`}>
        <div className="contenedor flex justify-between">
          <h2 className="uppercase font-bold">Marvin</h2>
          <p onClick={() => setIsOpen(!isOpen)} className="md:hidden">- - -</p>
          <Navegation isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  )
}

export default Header;