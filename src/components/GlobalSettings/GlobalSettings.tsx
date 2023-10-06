import { useState } from "react";
import { CgClose } from 'react-icons/cg'

function GlobalSettings() {

  const [activeColor, setActiveColor] = useState('')

  const resetColor = () => {
    const r = document.querySelector(':root') as HTMLElement;
    r.style.setProperty('--primary_color_green', '#28e98c')
    setActiveColor('')
  }

  const changeColor = (color: string) => {
    const r = document.querySelector(':root') as HTMLElement;
    r.style.setProperty('--primary_color_green', `var(--primary_color_${color})`)
    setActiveColor(color)
  }

  return (
    <div className="bg-transparent w-full h-full top-0 left-0 z-10"> {/* absolute */}
      <div className="flex flex-col justify-center z-20 absolute h-full w-4/6 right-0 top-0 text-black dark:text-white bg-gray-default overflow-x-hidden max-xl:w-7/12 max-lg:w-1/2 max-md:w-full max-lg:items-center transition-all">
        <button className="absolute right-5 top-6"><CgClose size={20} /></button>
        <div className="ml-32 flex flex-col justify-between max-lg:-ml-7 max-lg:items-center max-lg:w-1/2">
          <h1 className=" text-start text-3xl font-light mb-20">Configuração</h1>
          <p className="text-start text-sm mb-12">COLORS</p>
        </div>
        <div className="ml-32 flex gap-7 flex-wrap max-lg:ml-0 max-lg:items-center max-lg:w-1/2">
          <a
            onClick={resetColor}
            className={`bg-default selector ${activeColor === '' ? 'active' : ''}`}
            href="#">
            {activeColor === '' && <div className="center-dot" />}
          </a>
          <a
            onClick={() => changeColor('yellow')}
            className={`bg-yellow-500 selector ${activeColor === 'yellow' ? 'active' : ''}`}
            href="#">
            {activeColor === 'yellow' && <div className="center-dot" />}
          </a>
          <a
            onClick={() => changeColor('orange')}
            className={`bg-orange-500 selector ${activeColor === 'orange' ? 'active' : ''}`}
            href="#">
            {activeColor === 'orange' && <div className="center-dot" />}
          </a>
          <a
            onClick={() => changeColor('blue')}
            className={`bg-blue-primary selector ${activeColor === 'blue' ? 'active' : ''}`}
            href="#">
            {activeColor === 'blue' && <div className="center-dot" />}
          </a>
          <a
            onClick={() => changeColor('gray')}
            className={`bg-gray-300 selector ${activeColor === 'gray' ? 'active' : ''}`}
            href="#">
            {activeColor === 'gray' && <div className="center-dot" />}
          </a>
          <a
            onClick={() => changeColor('dark_blue')}
            className={`bg-dark-blue-primary selector ${activeColor === 'dark_blue' ? 'active' : ''}`}
            href="#">
            {activeColor === 'dark_blue' && <div className="center-dot" />}
          </a>
          <a
            onClick={() => changeColor('red')}
            className={`bg-red-primary selector ${activeColor === 'red' ? 'active' : ''}`}
            href="#">
            {activeColor === 'red' && <div className="center-dot" />}
          </a>
          <a
            onClick={() => changeColor('pink')}
            className={`bg-pink-300 selector ${activeColor === 'pink' ? 'active' : ''}`}
            href="#">
            {activeColor === 'pink' && <div className="center-dot" />}
          </a>
        </div>
      </div>
    </div>
  )
}

export default GlobalSettings;
