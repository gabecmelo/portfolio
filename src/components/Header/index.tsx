import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const change = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <p>foto</p>
      <>barra</>
      {
        darkMode 
        ? <button><SunIcon onClick={change} className="h-8 w-8 text-emerald-300 hover:text-emerald-500"/> </button>
        : <button><MoonIcon onClick={change} className="h-8 w-8" /></button>
      }
    </div>
  )
}

export default Header;
